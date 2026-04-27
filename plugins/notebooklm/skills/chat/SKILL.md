---
name: NotebookLM Chat
description: This skill should be used when the user asks to "ask my notebook", "chat with NotebookLM", "ask NotebookLM about", "query my research notebook", "what does my notebook say about", "find information in my notebook", "search my NotebookLM sources", or "get citations from NotebookLM". Handles asking questions to a NotebookLM notebook and displaying answers with source citations.
version: 0.1.0
---

# NotebookLM Chat

This skill handles asking questions to a NotebookLM notebook and presenting answers with source citations.

## Auth & Notebook Resolution

Before generating scripts:
1. Read `.claude/notebooklm.local.md` with the Read tool
2. Extract `auth_path` and `default_notebook_id`
3. If no notebook is specified and no default is set, list notebooks and ask

## Asking a Question

```python
import asyncio, pathlib
from notebooklm import NotebookLMClient

AUTH = str(pathlib.Path("~/.notebooklm/auth.json").expanduser())

async def main():
    async with NotebookLMClient.from_storage(AUTH) as client:
        response = await client.chat.ask(
            notebook_id="NOTEBOOK_ID",
            query="What are the main themes in these sources?"
        )
        print(response.answer)
        print("\n--- Citations ---")
        for citation in response.citations:
            print(f"  [{citation.source_title}] {citation.excerpt}")

asyncio.run(main())
```

## Displaying Results

Present the answer in the conversation as the main response, then list citations below in a clearly separated section. Format:

```
**Answer:**
[answer text]

**Sources cited:**
- *[Source Title]* — "[excerpt]"
- *[Source Title]* — "[excerpt]"
```

If no citations are returned, note that the answer was generated from general knowledge rather than grounded in notebook sources.

## Persona and Length Options

The `ask()` method supports optional parameters for controlling response style:

```python
response = await client.chat.ask(
    notebook_id="NOTEBOOK_ID",
    query="Summarize the key findings",
    persona="expert",      # "default" | "expert" | "simple"
    length="detailed"      # "brief" | "default" | "detailed"
)
```

Use `persona="simple"` for general audiences, `persona="expert"` for technical depth. Use `length="detailed"` when the user asks for a comprehensive answer.

## Multi-Turn Conversations

For follow-up questions, pass the previous conversation context. Maintain a list of prior exchanges in the script:

```python
messages = [
    {"role": "user", "content": "What are the main themes?"},
    {"role": "assistant", "content": previous_answer},
]
response = await client.chat.ask(
    notebook_id="NOTEBOOK_ID",
    query="Tell me more about theme X",
    history=messages
)
```

For multiple back-and-forth questions in a single session, generate one Python script that handles the full exchange interactively, or ask each question as a separate invocation.

## Research Mode

For broader questions that benefit from web research auto-imported into the notebook:

```python
result = await client.research.query(
    notebook_id="NOTEBOOK_ID",
    query="Latest developments in quantum computing"
)
# Sources are auto-imported; then ask the notebook
response = await client.chat.ask(notebook_id="NOTEBOOK_ID", query=result.suggested_query)
```

Use research mode only when the user explicitly asks to "search the web" or "find recent information" in addition to notebook content.

## Common Scenarios

**"What does my notebook say about X?"**: Direct chat query against default notebook, display answer + citations.

**"Summarize everything in my notebook"**: Use `length="detailed"`, display comprehensive summary.

**"Find where my sources mention Y"**: Chat query, focus on displaying citation excerpts.

**"Ask my notebook like a five-year-old would understand"**: Use `persona="simple"`.

## Error Handling

- Empty answer: Notebook may have no sources — suggest adding sources first
- `AuthError`: Direct user to re-run setup
- `RateLimitError`: Wait 30s and retry once; inform user if it fails again

## Additional Resources

- **`references/api-reference.md`** — Full chat API, persona options, history format
