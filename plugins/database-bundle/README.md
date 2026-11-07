# database-bundle

Database tools for Claude Code.

## Agents

### sql-reviewer

Reviews schemas, migrations, queries, ORM models, and access control, and returns a ranked list of findings. Claude delegates to it automatically when SQL or migrations change, or you can ask for it ("review this migration with sql-reviewer").

- Detects the engine from the project (ORM config, drivers, docker-compose, SQL dialect)
- General relational checks for any engine, plus specific rules for PostgreSQL, MySQL/MariaDB, and SQLite; says so when it has no engine-specific rules
- Read-only: no Edit/Write tools, never runs writes or DDL, proposes fixes instead
- Static review by default; connects to a live database only when asked and told which environment it is, then uses a read-only transaction with timeouts

## Skills

### postgres-playbook

Practical PostgreSQL guidance with production safety rules up front.

- Column types and indexing, each with the reason behind it; RLS, upsert, keyset pagination, `SKIP LOCKED` queues
- Lock-safe migrations: `CREATE INDEX CONCURRENTLY`, `NOT VALID` constraints, `lock_timeout`, batched backfills
- Read-only diagnostics: unindexed foreign keys, slow queries, unused indexes, dead rows, blocking locks
- Connection pooling (PgBouncer transaction mode caveats)
- Configuration that says which settings need a reload vs. a restart

The skill is instructions only — it has no database access of its own. Claude runs queries through whatever you give it (for example `psql` with `PG*` env vars, or a Postgres MCP server). Use a read-only role for anything production.

## Usage

```
/database-bundle:postgres-playbook [question or SQL]
```

It also triggers on requests like "design this schema", "why is this query slow", or "write a migration".

## Installation

```bash
/plugin install database-bundle@malanka-marketplace
```
