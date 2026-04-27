---
name: NotebookLM Sources
description: This skill should be used when the user asks to "add a source to NotebookLM", "add this URL to my notebook", "add a PDF to NotebookLM", "add a YouTube video to NotebookLM", "add text to NotebookLM", "add a Google Drive file to NotebookLM", "remove a source", "list sources in my notebook", or "show what's in my notebook". Handles adding and managing sources in NotebookLM notebooks.
version: 0.1.0
---

# NotebookLM Sources

This skill handles adding content sources to NotebookLM notebooks: URLs, PDFs, YouTube videos, Google Drive files, and plain text.

## Source Types

| Type | Input | Notes |
|------|-------|-------|
| URL | `https://...` | Web pages, articles, documentation |
| PDF | Local file path | Uploaded as binary |
| YouTube | YouTube URL | Transcription extracted automatically |
| Google Drive | Drive URL or file ID | Must be accessible to the Google account |
| Text | Raw string | Inline content, max ~100k characters |

## Auth & Notebook Resolution

Before generating scripts:
1. Read `.claude/notebooklm.local.md` with the Read tool
2. Extract `auth_path` (default: `~/.notebooklm/auth.json`) and `default_notebook_id`
3. If the user hasn't specified a notebook and no default is set, list notebooks and ask

## Adding Sources

### URL or YouTube

```python
import asyncio, pathlib
from notebooklm import NotebookLMClient

AUTH = str(pathlib.Path("~/.notebooklm/auth.json").expanduser())

async def main():
    async with NotebookLMClient.from_storage(AUTH) as client:
        source = await client.sources.add(
            notebook_id="NOTEBOOK_ID",
            source="https://example.com/article"
        )
        print(f"Added: {source.id}  {source.title}")

asyncio.run(main())
```

The same `add()` method handles URLs and YouTube links — the library detects the type automatically.

### PDF File

```python
with open("/path/to/file.pdf", "rb") as f:
    source = await client.sources.add(
        notebook_id="NOTEBOOK_ID",
        source=f,
        filename="file.pdf"
    )
```

Resolve the file path before generating the script. If the user gave a relative path, expand it to absolute using the current working directory.

### Plain Text

```python
source = await client.sources.add(
    notebook_id="NOTEBOOK_ID",
    source="Raw text content here...",
    title="My Notes"
)
```

### Multiple Sources

To add multiple sources in one operation, loop the `add()` calls within the same `async with` block. Print progress after each.

## Listing Sources

```python
sources = await client.sources.manage(notebook_id="NOTEBOOK_ID")
for s in sources:
    print(f"{s.id}  |  {s.title}  |  {s.type}")
```

Present as a formatted table with index numbers so the user can reference by number.

## Reading Source Full Text

```python
text = await client.sources.fulltext(notebook_id="NOTEBOOK_ID", source_id="SOURCE_ID")
print(text[:2000])  # preview first 2000 chars
```

## Removing Sources

Confirm before removing. Show the source title and ask for explicit confirmation.

```python
await client.sources.manage(
    notebook_id="NOTEBOOK_ID",
    remove_ids=["SOURCE_ID"]
)
```

## Common Scenarios

**User pastes a URL in the message**: Extract the URL, confirm the target notebook (use default if set), add the source, report success.

**User says "add this PDF"**: Ask for the file path if not provided. Expand to absolute path. Add the PDF.

**User says "add everything in this folder"**: List `.pdf` files in the folder, confirm with user, add each one sequentially.

**User mentions a YouTube video**: Detect the YouTube URL pattern, use `add()` directly — no special handling needed.

## Error Handling

- `AuthError`: Direct user to re-run auth setup
- Source already exists: NotebookLM may reject duplicates — inform user
- File not found: Verify path with Bash `ls` before attempting upload
- Rate limits: Retry once after 30s delay

## Additional Resources

- **`references/api-reference.md`** — Full sources API method signatures and source type details
