# NotebookLM Chat API Reference

## `client.chat.ask(notebook_id, query, **kwargs)`

Asks a question grounded in the notebook's sources.

```python
response = await client.chat.ask(
    notebook_id="abc123",
    query="What are the main themes?",
    persona="default",     # "default" | "expert" | "simple"
    length="default",      # "brief" | "default" | "detailed"
    history=[]             # list of prior message dicts
)
```

## Response Object Fields

```python
response.answer      # str — the answer text
response.citations   # list[Citation] — source references
```

## Citation Object Fields

```python
citation.source_id     # str — source identifier
citation.source_title  # str — display name of source
citation.excerpt       # str — relevant passage from source
citation.page          # int | None — page number for PDFs
```

## History Format

For multi-turn conversations, pass prior exchanges as a list:

```python
history = [
    {"role": "user", "content": "What are the main themes?"},
    {"role": "assistant", "content": "The main themes are..."},
]
response = await client.chat.ask(
    notebook_id="abc123",
    query="Tell me more about theme 1",
    history=history
)
```

## Persona Options

| Persona | Description |
|---------|-------------|
| `"default"` | Balanced, general-purpose responses |
| `"expert"` | Technical depth, assumes domain knowledge |
| `"simple"` | Plain language, accessible to general audiences |

## Length Options

| Length | Description |
|--------|-------------|
| `"brief"` | Concise answer, 1–3 sentences |
| `"default"` | Standard length |
| `"detailed"` | Comprehensive, thorough answer |

## Research Integration

`client.research.query()` performs web/Drive research and auto-imports results as sources:

```python
result = await client.research.query(
    notebook_id="abc123",
    query="Recent advances in quantum computing"
)
# result.suggested_query is the refined query to use for chat
# Sources are auto-added to the notebook

response = await client.chat.ask(
    notebook_id="abc123",
    query=result.suggested_query
)
```

## Notes

- Answers are grounded in notebook sources — they are not pure LLM responses
- If sources don't cover the query, citations may be empty or the answer may be generic
- Notebook must have at least one source for chat to work meaningfully
- `history` parameter enables contextual follow-up questions within a session
