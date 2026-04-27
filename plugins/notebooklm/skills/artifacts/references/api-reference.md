# NotebookLM Artifacts API Reference

## Enums

```python
from notebooklm.enums import ArtifactType, AudioFormat, QuizDifficulty, VideoStyle

# ArtifactType values
ArtifactType.audio_overview
ArtifactType.quiz
ArtifactType.flashcards
ArtifactType.mind_map
ArtifactType.slides
ArtifactType.infographic
ArtifactType.report
ArtifactType.data_table

# AudioFormat values
AudioFormat.mp3
AudioFormat.wav

# QuizDifficulty values
QuizDifficulty.easy
QuizDifficulty.medium
QuizDifficulty.hard
```

## `client.artifacts.generate(notebook_id, artifact_type, format=None)`

Generates an artifact. Blocks until complete (may take 30–120 seconds for audio).

```python
from notebooklm.enums import ArtifactType, AudioFormat, QuizDifficulty

# Audio overview
artifact = await client.artifacts.generate(
    notebook_id="abc123",
    artifact_type=ArtifactType.audio_overview,
    format=AudioFormat.mp3
)

# Quiz
artifact = await client.artifacts.generate(
    notebook_id="abc123",
    artifact_type=ArtifactType.quiz,
    format=QuizDifficulty.medium
)

# Text artifacts (no format needed)
artifact = await client.artifacts.generate(
    notebook_id="abc123",
    artifact_type=ArtifactType.flashcards
)
```

## Artifact Object Fields

```python
artifact.id       # str — unique identifier
artifact.type     # str — matches ArtifactType value
artifact.content  # str | None — text content for non-binary artifacts
artifact.url      # str | None — download URL for binary artifacts
```

## `client.artifacts.download(artifact_id, path)`

Downloads a binary artifact (audio, video) to disk.

```python
await client.artifacts.download(artifact_id=artifact.id, path="/path/to/output.mp3")
```

## Typical Generation Times

| Artifact | Typical Time |
|----------|-------------|
| Audio overview | 60–120 seconds |
| Quiz | 5–15 seconds |
| Flashcards | 5–10 seconds |
| Mind map | 10–20 seconds |
| Report | 15–30 seconds |
| Slides | 10–20 seconds |
| Infographic | 15–25 seconds |

## Notes

- `format` is required for `audio_overview` and `quiz`; optional or ignored for others
- Text artifacts expose content via `artifact.content`; binary artifacts need `download()`
- Notebook must have at least one source for generation to succeed
- Generation may fail with `RPCError` if the notebook content is insufficient
