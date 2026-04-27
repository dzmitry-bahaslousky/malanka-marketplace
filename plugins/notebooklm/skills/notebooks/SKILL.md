---
name: NotebookLM Notebooks
description: This skill should be used when the user asks to "create a notebook", "list my notebooks", "rename a notebook", "delete a notebook", "find a notebook", "show my NotebookLM notebooks", or "get notebook description". Handles all notebook CRUD operations using the notebooklm-py Python library.
version: 0.1.0
---

# NotebookLM Notebooks

This skill handles creating, listing, renaming, and deleting NotebookLM notebooks via inline Python scripts executed with Bash.

## Auth Pattern

Every script must load credentials from `~/.notebooklm/auth.json`. Check `.claude/notebooklm.local.md` for a project-level `auth_path` override before falling back to the default.

Read `.claude/notebooklm.local.md` with the Read tool before generating scripts. If `default_notebook_id` is set, use it when no notebook is specified by the user.

## Script Pattern

Generate a self-contained async Python script and run it with `python3 -c "..."` or write to `/tmp/nlm_op.py` and execute. Always use `async with NotebookLMClient.from_storage(auth_path) as client:` as the context manager.

```python
import asyncio, pathlib
from notebooklm import NotebookLMClient

AUTH = str(pathlib.Path("~/.notebooklm/auth.json").expanduser())

async def main():
    async with NotebookLMClient.from_storage(AUTH) as client:
        # operation here
        pass

asyncio.run(main())
```

## Operations

### List Notebooks

```python
notebooks = await client.notebooks.list()
for nb in notebooks:
    print(f"{nb.id}  |  {nb.title}  |  {nb.source_count} sources")
```

Present results as a formatted table. If the list is empty, suggest creating a notebook.

### Create Notebook

```python
nb = await client.notebooks.create(title="My Research")
print(f"Created: {nb.id}  {nb.title}")
```

After creation, ask if the user wants to set this as the project default (update `.claude/notebooklm.local.md`).

### Rename Notebook

```python
await client.notebooks.rename(notebook_id="NOTEBOOK_ID", title="New Name")
print("Renamed successfully")
```

### Delete Notebook

Confirm with the user before deleting — deletion is permanent and removes all sources and artifacts. Use AskUserQuestion to get explicit confirmation showing the notebook title.

```python
await client.notebooks.delete(notebook_id="NOTEBOOK_ID")
print("Deleted")
```

### Get Description

```python
desc = await client.notebooks.get_description(notebook_id="NOTEBOOK_ID")
print(desc)
```

## Resolving Notebook Identity

When the user refers to a notebook by name (not ID):

1. Call `list()` to get all notebooks
2. Match by title (case-insensitive, partial match acceptable)
3. If multiple matches, present options and ask user to choose
4. If no match, report and show full list

## Updating Default Notebook

When the user sets a new default, update `.claude/notebooklm.local.md`:

1. Read the current file with the Read tool
2. Replace `default_notebook_id` and `default_notebook_name` values
3. Write the updated content with the Write tool
4. Confirm the change to the user

## Error Handling

- `AuthError`: Tell user to re-run auth setup (run the capture script from the setup skill)
- `RateLimitError`: Wait 30 seconds and retry once; if it fails again, report to user
- Notebook not found: Show list of available notebooks

## Additional Resources

- **`references/api-reference.md`** — Full notebooks API method signatures
