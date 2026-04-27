# NotebookLM Notebooks API Reference

## NotebookLMClient Initialization

```python
from notebooklm import NotebookLMClient

# From Playwright storage state file (recommended)
async with NotebookLMClient.from_storage("~/.notebooklm/auth.json") as client:
    ...

# From AuthTokens directly
from notebooklm import AuthTokens
tokens = AuthTokens(session_cookie="...", csrf_token="...")
async with NotebookLMClient(tokens) as client:
    ...
```

## Notebook Object Fields

```python
notebook.id           # str — unique identifier (use for API calls)
notebook.title        # str — display name
notebook.source_count # int — number of sources
notebook.created_at   # datetime
notebook.updated_at   # datetime
```

## Methods

### `client.notebooks.list()`

Returns all notebooks for the authenticated account.

```python
notebooks: list[Notebook] = await client.notebooks.list()
```

### `client.notebooks.create(title)`

Creates a new notebook.

```python
notebook: Notebook = await client.notebooks.create(title="My Research")
```

### `client.notebooks.rename(notebook_id, title)`

Renames a notebook.

```python
await client.notebooks.rename(notebook_id="abc123", title="New Name")
```

### `client.notebooks.delete(notebook_id)`

Permanently deletes a notebook and all its sources/artifacts. Irreversible.

```python
await client.notebooks.delete(notebook_id="abc123")
```

### `client.notebooks.get_description(notebook_id)`

Returns the AI-generated description of the notebook's content.

```python
description: str = await client.notebooks.get_description(notebook_id="abc123")
```

## Exception Types

```python
from notebooklm.exceptions import (
    NotebookLMError,   # base
    AuthError,         # 401 / expired session
    RPCError,          # API-level errors
    RateLimitError,    # 429
)
```
