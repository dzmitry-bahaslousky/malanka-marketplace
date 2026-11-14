---
name: postgres-playbook
description: Practical PostgreSQL guidance — column types, indexing, query patterns, row-level security, lock-safe migrations, diagnostics, connection pooling, and server settings — with safety rules for live databases. Use when designing tables or indexes, writing a migration, investigating a slow query, setting up RLS or pooling, or running SQL against a real database.
---

# PostgreSQL Playbook

How to design, query, and change PostgreSQL databases without surprises in production. For a full review of schemas, migrations, or queries, use the `sql-reviewer` agent from this plugin.

## Before Touching a Live Database

These rules come first, because a mistake against production is the expensive kind.

1. **Look before you change.** Investigate with a read-only role, or inside `BEGIN READ ONLY; … ROLLBACK;`.
2. **Ask first.** Any write, schema change, or `ALTER SYSTEM` needs explicit confirmation from the user, naming the host and database it will run on.
3. **`EXPLAIN ANALYZE` runs the query for real.** Start with plain `EXPLAIN`. If you need actual timings for an `INSERT`, `UPDATE`, or `DELETE`, run it inside `BEGIN; … ROLLBACK;`.
4. **Put a ceiling on every investigation session.** Each `psql -c` call is a new session, so a `SET` from one call is gone in the next. Pass the limits and the read-only default with the connection instead:

   ```bash
   PGOPTIONS='-c default_transaction_read_only=on -c statement_timeout=30s -c lock_timeout=5s' \
     psql -X -v ON_ERROR_STOP=1 -c 'SELECT …'
   ```

   Migrations are the exception: keep `lock_timeout`, but lift `statement_timeout` for index builds and constraint validation, which legitimately run for minutes (see "Changing Schema on Live Tables").
5. **Keep secrets out of sight.** Take credentials from `PGHOST`/`PGUSER`/`PGDATABASE` and `~/.pgpass`. Never pass a password on the command line (it shows up in shell history and process lists) and never print it.

## Picking Column Types

| Storing | Use | Instead of | Why |
|---|---|---|---|
| Surrogate keys | `bigint GENERATED ALWAYS AS IDENTITY`; UUIDv7 when IDs are minted outside the DB | `int`, random UUIDv4 keys | `int` runs out at ~2.1 billion; random UUIDs scatter inserts across the index |
| Text | `text`, with a `CHECK` if a length limit matters | `varchar(255)` | Same storage; the arbitrary limit just causes failed inserts later |
| Points in time | `timestamptz` | `timestamp` | Stores an absolute instant, no time-zone ambiguity |
| Money | `numeric(p,s)` sized for the largest amount, e.g. `numeric(19,4)` | `float`, `money` | Floats round; `money` depends on locale settings |
| Yes/no | `boolean` | `int`, `char(1)` | Self-describing, enforced |

## Indexing

**Which index type:**

- **B-tree** (default) — equality and range comparisons, `ORDER BY`.
- **GIN** — "contains" searches: JSONB `@>`, arrays, full-text `@@`.
- **BRIN** — very large tables where the column follows physical insert order (e.g. `created_at` on an append-only log). Tiny, but only useful when that ordering holds.

**Multi-column order.** Put columns compared with `=` first and the range column last:

```sql
-- serves: WHERE state = 'open' AND due_at < now()
CREATE INDEX CONCURRENTLY tasks_state_due_idx ON tasks (state, due_at);
```

With `(due_at, state)` instead, matching rows are spread across the whole range and the index helps much less.

**Answer from the index alone.** `INCLUDE` carries extra columns so the table is not visited (index-only scan; works best on a recently vacuumed table):

```sql
CREATE INDEX CONCURRENTLY accounts_email_idx ON accounts (email) INCLUDE (display_name);
```

**Index only the rows you query.** A partial index is smaller and faster; the query must contain the same condition to use it:

```sql
CREATE INDEX CONCURRENTLY accounts_live_email_idx ON accounts (email) WHERE archived_at IS NULL;
```

**Index the expression you filter on.** An index on `email` does not serve `WHERE lower(email) = $1`; index the expression itself:

```sql
CREATE INDEX CONCURRENTLY accounts_lower_email_idx ON accounts (lower(email));
```

**Substring search needs a trigram index.** B-tree only helps `LIKE 'abc%'`. For `LIKE '%abc%'` or `ILIKE`, use `pg_trgm`:

```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX CONCURRENTLY accounts_name_trgm_idx ON accounts USING gin (display_name gin_trgm_ops);
```

**Foreign keys are not indexed automatically.** Without an index on the referencing column, deleting a parent row scans the whole child table. Index FK columns that are joined on or whose parents get deleted.

**Every index has a cost.** Each one slows writes and takes space. Add indexes for access paths the application actually uses, and drop ones that are never scanned.

## Query Patterns

**Insert-or-update in one statement** (needs a unique index or constraint on the conflict columns):

```sql
INSERT INTO preferences (account_id, name, value)
VALUES ($1, $2, $3)
ON CONFLICT (account_id, name) DO UPDATE SET value = EXCLUDED.value;
```

**Paginate with a cursor, not `OFFSET`.** `OFFSET 100000` still reads and discards 100,000 rows; a keyset condition jumps straight to the right place in the index, so page 1,000 costs the same as page 1:

```sql
SELECT * FROM invoices WHERE id > $1 ORDER BY id LIMIT 50;
```

When sorting by a column that is not unique, add the key as a tie-breaker and compare both as a row, backed by an index on the same columns:

```sql
SELECT * FROM invoices
WHERE (created_at, id) > ($1, $2)
ORDER BY created_at, id
LIMIT 50;
-- supporting index: (created_at, id)
```

**Job queue on a plain table.** `SKIP LOCKED` lets many workers each grab a different row without waiting on each other:

```sql
UPDATE jobs SET state = 'running', started_at = now()
WHERE id = (
  SELECT id FROM jobs
  WHERE state = 'queued'
  ORDER BY enqueued_at
  LIMIT 1
  FOR UPDATE SKIP LOCKED
)
RETURNING *;
-- supporting index:
CREATE INDEX CONCURRENTLY jobs_queued_idx ON jobs (enqueued_at) WHERE state = 'queued';
```

**Row-level security.** Wrap function calls in a sub-select so PostgreSQL evaluates them once per query instead of once per row, and index the column the policy filters on:

```sql
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices FORCE ROW LEVEL SECURITY;
CREATE POLICY invoices_by_owner ON invoices
  USING (owner_id = (SELECT NULLIF(current_setting('app.account_id', true), '')::bigint));
CREATE INDEX CONCURRENTLY invoices_owner_idx ON invoices (owner_id);
```

On Supabase, use `(SELECT auth.uid())` in place of the `current_setting` call.

Three ways this goes wrong quietly:

- **The policy is skipped.** The table's owner bypasses policies unless `FORCE ROW LEVEL SECURITY` is set, and superusers and `BYPASSRLS` roles always do. An application that connects as the role that ran the migrations usually owns the tables. Connect it as a separate, non-owner role.
- **The setting is missing.** Without the second argument `true`, `current_setting` raises an error when the setting was never set. After a `SET LOCAL` has ended, the setting reads as an empty string, not NULL, so the cast fails without `NULLIF`. Written as above, a missing tenant matches no rows.
- **The tenant leaks to another client.** Set it per transaction — `SET LOCAL app.account_id = '42'` or `set_config('app.account_id', '42', true)` — never with a plain `SET`. Behind a transaction pooler a plain `SET` stays on the server connection and applies to the next client that gets it.

## Changing Schema on Live Tables

The danger in a migration is usually the lock, not the change. A statement that needs an exclusive lock waits behind any long transaction — and every query that arrives afterwards queues behind *it*. A one-second change can stall the application for minutes.

**Fail fast instead of queueing:**

```sql
SET lock_timeout = '5s';   -- retry later rather than block traffic
```

Do not cap these statements with a short `statement_timeout`. `lock_timeout` only limits the wait for the lock; `statement_timeout` limits the work itself and would cancel a healthy index build halfway.

**Build indexes without blocking writes:**

```sql
CREATE INDEX CONCURRENTLY invoices_due_idx ON invoices (due_at);
```

It cannot run inside a transaction block, and most migration tools wrap each migration in one — turn that off for this migration (Flyway `executeInTransaction=false`, Liquibase `runInTransaction="false"`, Alembic `autocommit_block()`, Rails `disable_ddl_transaction!`, Django `atomic = False`). If it fails or is cancelled, it leaves an `INVALID` index behind — remove it with `DROP INDEX CONCURRENTLY invoices_due_idx;` and try again.

**Add a foreign key in two steps** — the first is instant, the second checks existing rows under a lighter lock:

```sql
ALTER TABLE invoices ADD CONSTRAINT invoices_owner_fk
  FOREIGN KEY (owner_id) REFERENCES accounts (id) NOT VALID;
ALTER TABLE invoices VALIDATE CONSTRAINT invoices_owner_fk;
```

**Add a unique constraint in two steps** — build the index without blocking writes, then attach it:

```sql
CREATE UNIQUE INDEX CONCURRENTLY accounts_email_key ON accounts (email);
ALTER TABLE accounts ADD CONSTRAINT accounts_email_key UNIQUE USING INDEX accounts_email_key;
```

**Make a column `NOT NULL` without a long lock** (PostgreSQL 12+ reuses the validated check):

```sql
ALTER TABLE invoices ADD CONSTRAINT invoices_owner_present CHECK (owner_id IS NOT NULL) NOT VALID;
ALTER TABLE invoices VALIDATE CONSTRAINT invoices_owner_present;
ALTER TABLE invoices ALTER COLUMN owner_id SET NOT NULL;
ALTER TABLE invoices DROP CONSTRAINT invoices_owner_present;
```

**Operations that rewrite or lock a big table** — plan them as separate, scheduled work:

- Changing a column's type
- Adding a column whose default is volatile, such as `DEFAULT clock_timestamp()` (a constant default is instant since PostgreSQL 11)
- `VACUUM FULL` — use `pg_repack` instead

**Drop or rename across releases, not in one.** Code from the previous release is still running while the migration applies, and it fails the moment a column it uses disappears. Expand (add the new column, write to both), migrate (backfill, switch reads), then contract (drop the old column) in a later release.

**Backfill in batches** of roughly 1,000–10,000 rows per transaction, not one huge `UPDATE` that holds locks and bloats the table.

## Reading a Query Plan

For a slow query, get the plan with real numbers — `EXPLAIN (ANALYZE, BUFFERS) <query>` — following the rules at the top: it executes the query, so wrap anything that writes in `BEGIN; … ROLLBACK;`. Use the parameter values that were slow; the plan can change with them. Read from the most indented node outward and look for the node where the time goes.

| In the plan | Usually means | Try |
|---|---|---|
| `Seq Scan` with a large `Rows Removed by Filter` | The table is read in full to return a few rows | An index on the filtered columns |
| Estimated `rows=` far from actual `rows=` (10× or more) | Stale or missing statistics; the planner chose the plan for a different amount of data | `ANALYZE <table>`; extended statistics for correlated columns |
| `Nested Loop` whose inner node has a large `loops=` | The inner side runs once per outer row; the node's time is per loop | An index on the inner join column, or fix the row estimate that led to this join |
| `Sort Method: external merge  Disk:` | The sort did not fit in `work_mem` | An index that returns rows already ordered, or more `work_mem` for that session |
| `Index Only Scan` with high `Heap Fetches` | The table is visited anyway, because the visibility map is out of date | `VACUUM <table>` |
| Many `Buffers: shared read` | Pages came from disk, not cache | Run it again before concluding; a cold cache is not a query problem |
| An index exists but is not used | The condition wraps the column (`lower(col)`, a cast), has a leading `%`, or matches most of the table | Index the expression, or accept the sequential scan when most rows match |

A sequential scan is not a problem by itself: for a small table, or a query that returns a large share of the rows, it is the fastest plan.

## Finding Problems

All of these are read-only.

```sql
-- Foreign keys with no index starting with the same columns
SELECT c.conrelid::regclass AS table_name, c.conname, pg_get_constraintdef(c.oid) AS definition
FROM pg_constraint c
WHERE c.contype = 'f'
  AND NOT EXISTS (
    SELECT 1
    FROM pg_index i
    WHERE i.indrelid = c.conrelid
      AND i.indpred IS NULL
      AND (string_to_array(i.indkey::text, ' ')::int2[])[1:cardinality(c.conkey)] @> c.conkey
      AND (string_to_array(i.indkey::text, ' ')::int2[])[1:cardinality(c.conkey)] <@ c.conkey
  );

-- Queries using the most total time in this database
-- (requires pg_stat_statements; column names are PG13+; the view covers the whole server)
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
WHERE dbid = (SELECT oid FROM pg_database WHERE datname = current_database())
ORDER BY total_exec_time DESC
LIMIT 20;

-- Indexes never used since statistics were reset
-- (unique indexes are left out: they enforce a constraint even when never scanned)
SELECT s.relname AS table_name, s.indexrelname AS index_name,
       pg_size_pretty(pg_relation_size(s.indexrelid)) AS size
FROM pg_stat_user_indexes s
JOIN pg_index i ON i.indexrelid = s.indexrelid
WHERE s.idx_scan = 0 AND NOT i.indisunique
ORDER BY pg_relation_size(s.indexrelid) DESC;

-- Tables where autovacuum is falling behind
SELECT relname, n_live_tup, n_dead_tup, last_autovacuum
FROM pg_stat_user_tables
WHERE n_dead_tup > 1000
ORDER BY n_dead_tup DESC;

-- Sessions currently waiting on another session's lock
SELECT pid, pg_blocking_pids(pid) AS blocked_by, state,
       now() - xact_start AS transaction_age, query
FROM pg_stat_activity
WHERE cardinality(pg_blocking_pids(pid)) > 0;

-- Oldest open transactions: they block schema changes and stop vacuum from removing dead rows
SELECT pid, usename, state, now() - xact_start AS transaction_age, left(query, 60) AS query
FROM pg_stat_activity
WHERE xact_start IS NOT NULL AND pid <> pg_backend_pid()
ORDER BY xact_start
LIMIT 20;
```

Before dropping an "unused" index, check that statistics have been collected long enough to cover rare jobs, and check replicas — usage is tracked per server.

## Connection Pooling

- Every PostgreSQL connection is a separate server process with its own memory, so hundreds of idle app connections are expensive. Route application traffic through PgBouncer or your provider's pooler.
- **Transaction pooling** shares server connections most efficiently, but anything tied to a session stops working reliably: plain `SET` (use `SET LOCAL` inside the transaction), session-level advisory locks, `LISTEN`/`NOTIFY`, and temporary tables. Server-side prepared statements require PgBouncer 1.21+ with `max_prepared_statements` enabled.
- Run migrations and admin sessions over a **direct** connection, not through the pooler.
- Keep the total of all application pool sizes, plus room for admin access, below `max_connections`.

## Server and Role Settings

**Set limits per role** so the application gets strict timeouts while migrations and maintenance do not:

```sql
ALTER ROLE app_user SET statement_timeout = '30s';
ALTER ROLE app_user SET lock_timeout = '5s';
ALTER ROLE app_user SET idle_in_transaction_session_timeout = '60s';
-- takes effect for new sessions of app_user
```

**Server-wide changes** need user confirmation, and not all of them apply immediately:

| Setting | Takes effect | Watch out for |
|---|---|---|
| `work_mem` | on reload | Allocated per sort/hash step in every connection — a high value times many connections can exhaust memory |
| `idle_in_transaction_session_timeout` | on reload | A reasonable server-wide default |
| `max_connections` | **after restart** | Raising it is rarely the fix — add a pooler |
| `shared_preload_libraries` | **after restart** | `pg_stat_statements` must be listed here before the extension collects anything |

```sql
ALTER SYSTEM SET idle_in_transaction_session_timeout = '60s';
SELECT pg_reload_conf();
-- settings changed but still waiting for a restart:
SELECT name, setting FROM pg_settings WHERE pending_restart;
```

Managed services (Amazon RDS, Cloud SQL, Azure) generally do not allow `ALTER SYSTEM`; change settings through their parameter groups or flags.

**Lock down the `public` schema** on PostgreSQL 14 and older with `REVOKE CREATE ON SCHEMA public FROM PUBLIC;`. Version 15 and later already do this by default.
