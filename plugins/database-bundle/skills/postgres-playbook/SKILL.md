---
name: postgres-playbook
description: Practical PostgreSQL guidance — column types, indexing, query patterns, row-level security, lock-safe migrations, diagnostics, connection pooling, and server settings — with safety rules for live databases. Use when designing tables or indexes, writing a migration, investigating a slow query, setting up RLS or pooling, or running SQL against a real database.
---

# PostgreSQL Playbook

How to design, query, and change PostgreSQL databases without surprises in production. For a full review of schemas, migrations, or queries, use the `sql-reviewer` agent from this plugin.

## When to Use

- Creating or altering tables, indexes, or constraints
- Writing a migration that will run on a live database
- A query is slow and you need to find out why
- Adding row-level security or tenant isolation
- Configuring a connection pooler, timeouts, or server settings
- Running any SQL against a shared, staging, or production database

## Before Touching a Live Database

These rules come first, because a mistake against production is the expensive kind.

1. **Look before you change.** Investigate with a read-only role, or inside `BEGIN READ ONLY; … ROLLBACK;`.
2. **Ask first.** Any write, schema change, or `ALTER SYSTEM` needs explicit confirmation from the user, naming the host and database it will run on.
3. **`EXPLAIN ANALYZE` runs the query for real.** Start with plain `EXPLAIN`. If you need actual timings for an `INSERT`, `UPDATE`, or `DELETE`, run it inside `BEGIN; … ROLLBACK;`.
4. **Put a ceiling on every session:** `SET statement_timeout = '30s'; SET lock_timeout = '5s';`.
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
CREATE POLICY invoices_by_owner ON invoices
  USING (owner_id = (SELECT current_setting('app.account_id')::bigint));
CREATE INDEX CONCURRENTLY invoices_owner_idx ON invoices (owner_id);
```

On Supabase, use `(SELECT auth.uid())` in place of the `current_setting` call.

## Changing Schema on Live Tables

The danger in a migration is usually the lock, not the change. A statement that needs an exclusive lock waits behind any long transaction — and every query that arrives afterwards queues behind *it*. A one-second change can stall the application for minutes.

**Fail fast instead of queueing:**

```sql
SET lock_timeout = '5s';   -- retry later rather than block traffic
```

**Build indexes without blocking writes:**

```sql
CREATE INDEX CONCURRENTLY invoices_due_idx ON invoices (due_at);
```

It cannot run inside a transaction block. If it fails, it leaves an `INVALID` index behind — remove it with `DROP INDEX CONCURRENTLY invoices_due_idx;` and try again.

**Add a foreign key in two steps** — the first is instant, the second checks existing rows under a lighter lock:

```sql
ALTER TABLE invoices ADD CONSTRAINT invoices_owner_fk
  FOREIGN KEY (owner_id) REFERENCES accounts (id) NOT VALID;
ALTER TABLE invoices VALIDATE CONSTRAINT invoices_owner_fk;
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

**Backfill in batches** of roughly 1,000–10,000 rows per transaction, not one huge `UPDATE` that holds locks and bloats the table.

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

-- Queries using the most total time (requires pg_stat_statements; column names are PG13+)
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;

-- Indexes never used since statistics were reset
SELECT relname AS table_name, indexrelname AS index_name,
       pg_size_pretty(pg_relation_size(indexrelid)) AS size
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY pg_relation_size(indexrelid) DESC;

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
```

Before dropping an "unused" index, check it is not backing a constraint and that statistics have been collected long enough to cover rare jobs, and check replicas — usage is tracked per server.

## Connection Pooling

- Every PostgreSQL connection is a separate server process with its own memory, so hundreds of idle app connections are expensive. Route application traffic through PgBouncer or your provider's pooler.
- **Transaction pooling** shares server connections most efficiently, but anything tied to a session stops working reliably: plain `SET` (use `SET LOCAL` inside the transaction), session-level advisory locks, `LISTEN`/`NOTIFY`, and temporary tables. Server-side prepared statements require PgBouncer 1.21+ with `max_prepared_statements` enabled.
- Run migrations and admin sessions over a **direct** connection, not through the pooler.
- Keep the total of all application pool sizes, plus room for admin access, below `max_connections`.

## Server and Role Settings

**Set limits per role** so the application gets strict timeouts while migrations and maintenance do not:

```sql
ALTER ROLE app_user SET statement_timeout = '30s';
ALTER ROLE app_user SET lock_timeout = '10s';
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
