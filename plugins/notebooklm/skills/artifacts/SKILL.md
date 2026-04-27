---
name: NotebookLM Artifacts
description: This skill should be used when the user asks to "generate an audio overview", "create a podcast from my notebook", "generate a quiz", "make flashcards", "create a mind map", "generate a study guide", "create a report", "make an infographic", "generate a timeline", "create a briefing doc", or "download an artifact from NotebookLM". Handles generating and downloading AI-generated content artifacts from NotebookLM notebooks.
version: 0.1.0
---

# NotebookLM Artifacts

This skill handles generating AI-produced artifacts from NotebookLM notebook content: audio overviews, quizzes, flashcards, mind maps, slide decks, reports, infographics, and more.

## Artifact Types

| Artifact | Type Enum | Format Options | Notes |
|----------|-----------|----------------|-------|
| Audio overview (podcast) | `audio_overview` | `mp3`, `wav` | Two-host AI conversation |
| Quiz | `quiz` | `easy`, `medium`, `hard` | Multiple choice questions |
| Flashcards | `flashcards` | — | Q&A pairs |
| Mind map | `mind_map` | — | Concept graph |
| Slide deck | `slides` | — | Presentation outline |
| Infographic | `infographic` | — | Visual summary |
| Report | `report` | — | Long-form written summary |
| Data table | `data_table` | — | Structured data extraction |

## Auth & Notebook Resolution

Before generating scripts:
1. Read `.claude/notebooklm.local.md` with the Read tool
2. Extract `auth_path` and `default_notebook_id`
3. If no notebook is specified and no default is set, list notebooks and ask

## Generating an Artifact

```python
import asyncio, pathlib
from notebooklm import NotebookLMClient
from notebooklm.enums import ArtifactType, AudioFormat

AUTH = str(pathlib.Path("~/.notebooklm/auth.json").expanduser())

async def main():
    async with NotebookLMClient.from_storage(AUTH) as client:
        artifact = await client.artifacts.generate(
            notebook_id="NOTEBOOK_ID",
            artifact_type=ArtifactType.audio_overview,
            format=AudioFormat.mp3
        )
        print(f"Generated: {artifact.id}  {artifact.type}")

asyncio.run(main())
```

Generation is asynchronous on NotebookLM's side — the `generate()` call may block for 30–120 seconds for audio, less for text artifacts. Inform the user that generation is in progress.

## Downloading an Artifact

After generation, download the artifact to disk:

```python
import os

output_path = "/path/to/output.mp3"  # chosen by user or default to cwd
await client.artifacts.download(artifact_id=artifact.id, path=output_path)
print(f"Saved to: {output_path}")
```

## Download Location

Before downloading, ask the user where to save the file:

> "Where should I save the audio file? Press Enter for the current directory (`./notebook-audio.mp3`), or type a path."

If the user presses Enter or says "here" / "current directory", use the current working directory with a descriptive filename derived from the notebook title.

## Quiz Difficulty

When generating a quiz, ask about difficulty if not specified:

```python
from notebooklm.enums import QuizDifficulty

artifact = await client.artifacts.generate(
    notebook_id="NOTEBOOK_ID",
    artifact_type=ArtifactType.quiz,
    format=QuizDifficulty.medium
)
```

## Displaying Text Artifacts

For non-binary artifacts (quizzes, flashcards, reports, mind maps), render the content directly in the conversation rather than saving to a file, unless the user asks for a file.

```python
print(artifact.content)
```

For quizzes, format as numbered questions with lettered choices. For flashcards, format as a Q&A list. For reports, render as markdown.

## Common Scenarios

**"Generate an audio overview of my research"**: Use default notebook, generate `audio_overview` in `mp3`, ask for save location, download.

**"Make a quiz about this notebook"**: Ask difficulty (default: medium), generate, display inline.

**"Create flashcards from my notes"**: Generate flashcards, display all Q&A pairs in the conversation.

**"Give me a summary report"**: Generate report, display as markdown in conversation.

## Error Handling

- Generation timeout: Some artifacts take over 2 minutes — if the script times out, suggest the user check NotebookLM web UI for the result
- `AuthError`: Direct user to re-run setup
- `RateLimitError`: Wait 60 seconds and retry once

## Additional Resources

- **`references/api-reference.md`** — Full artifacts API and all enum values
