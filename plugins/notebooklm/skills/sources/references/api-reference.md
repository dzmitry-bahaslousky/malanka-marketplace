# NotebookLM Sources API Reference

## `client.sources.add(notebook_id, source, **kwargs)`

Universal method — detects source type automatically.

```python
# URL or YouTube
source = await client.sources.add(notebook_id="abc123", source="https://...")

# Local PDF
with open("/path/to/file.pdf", "rb") as f:
    source = await client.sources.add(notebook_id="abc123", source=f, filename="doc.pdf")

# Plain text
source = await client.sources.add(notebook_id="abc123", source="raw text...", title="My Notes")

# Google Drive (by URL or file ID)
source = await client.sources.add(notebook_id="abc123", source="https://drive.google.com/...")
```

## Source Object Fields

```python
source.id       # str — unique identifier
source.title    # str — display name (from URL title, filename, or provided title)
source.type     # str — "url" | "pdf" | "youtube" | "drive" | "text"
source.created_at  # datetime
```

## `client.sources.manage(notebook_id, remove_ids=None)`

List all sources, or remove specific sources.

```python
# List
sources: list[Source] = await client.sources.manage(notebook_id="abc123")

# Remove
await client.sources.manage(notebook_id="abc123", remove_ids=["src1", "src2"])
```

## `client.sources.fulltext(notebook_id, source_id)`

Returns the full extracted text of a source.

```python
text: str = await client.sources.fulltext(notebook_id="abc123", source_id="src1")
```

## Source Type Detection Rules

The library detects source type by inspecting the `source` argument:
- File object with `read()` → PDF upload
- String starting with `https://www.youtube.com` or `https://youtu.be` → YouTube
- String starting with `https://drive.google.com` → Google Drive
- String starting with `https://` or `http://` → URL
- Plain string → Text

## Notes

- PDF uploads must be binary file objects (open with `"rb"`)
- YouTube sources extract transcription automatically — no captions required
- Text sources have an approximate limit of 100,000 characters
- Adding a duplicate source may raise `RPCError` — the library does not deduplicate
