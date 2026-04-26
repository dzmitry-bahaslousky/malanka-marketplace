# note-taker

Transform meeting transcripts into structured notes with a single command.

## Features

- Extracts **Key Discussion Points**, **Decisions**, **Action Items**, **Questions**, **Parking Lot**, and **Follow-up** sections
- Accepts pasted transcripts or file paths
- Outputs clean markdown to the console — paste directly into Obsidian or any editor

## Usage

```
/note-taker:meeting-notes [paste transcript or provide file path]
```

**Inline transcript:**
```
/note-taker:meeting-notes "Today we agreed to launch on the 20th. Sarah will prepare the release notes. John raised a question about rollback strategy but we ran out of time."
```

**From file:**
```
/note-taker:meeting-notes /path/to/transcript.txt
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
cc --plugin-dir /path/to/plugins/note-taker
```

Or add to your marketplace and install with `/plugin install note-taker@your-marketplace`.
