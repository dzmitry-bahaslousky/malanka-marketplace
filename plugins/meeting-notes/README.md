# meeting-notes

Transform meeting transcripts into structured notes with a single command.

## Features

- Extracts **Key Discussion Points**, **Decisions**, **Action Items**, **Questions**, **Parking Lot**, and **Follow-up** sections
- Accepts pasted transcripts or file paths
- Outputs clean markdown to the console — paste directly into Obsidian or any editor

## Usage

```
/meeting-notes:summarize [paste transcript or provide file path]
```

**Inline transcript:**
```
/meeting-notes:summarize "Today we agreed to launch on the 20th. Sarah will prepare the release notes. John raised a question about rollback strategy but we ran out of time."
```

**From file:**
```
/meeting-notes:summarize /path/to/transcript.txt
```

## Output Structure

```markdown
# Meeting Notes
**Date:** ...
**Attendees:** ...

## Key Discussion Points
## Decisions
## Action Items
## Questions
## Parking Lot
## Follow-up
```

## Installation

```bash
cc --plugin-dir /path/to/plugins/meeting-notes
```

Or add to your marketplace and install with `/plugin install meeting-notes@your-marketplace`.
