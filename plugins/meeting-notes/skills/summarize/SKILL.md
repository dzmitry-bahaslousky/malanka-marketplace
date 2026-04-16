---
name: summarize
description: Transform a meeting transcript into structured meeting notes. Triggers when the user runs /meeting-notes:summarize or asks to summarize a meeting transcript. Produces sections for Key Discussion Points, Decisions, Action Items, Questions, Parking Lot, and Follow-up.
argument-hint: "[paste transcript or provide file path]"
allowed-tools:
  - Read
version: 0.1.0
---

# Meeting Notes Summarizer

You are transforming a raw meeting transcript into clean, structured meeting notes.

## Input

The transcript is provided either:
- Directly in the arguments (pasted inline)
- As a file path — use the Read tool to load it

If no transcript is provided, ask the user to paste one or provide a file path.

## Output Format

Output the meeting notes as a markdown document, printed to the console. Do not save to any file.

Use this exact structure:

```
# Meeting Notes
**Date:** [extract from transcript if mentioned, otherwise leave blank]
**Attendees:** [extract names mentioned in the transcript]

---

## Key Discussion Points
- [Concise bullet summarizing each major topic discussed]
- [Focus on substance, not who said what]

## Decisions
- [Each concrete decision made, stated clearly]
- [If none, write: *No decisions recorded.*]

## Action Items
- [ ] [Task description] — *[Owner if mentioned, otherwise unassigned]*
- [ ] ...

## Questions
- [Open questions raised but not resolved]
- [If none, write: *No open questions.*]

## Parking Lot
- [Topics deferred, tabled, or flagged for later]
- [If none, write: *Nothing parked.*]

## Follow-up
- [Next steps, scheduled follow-up meetings, deadlines mentioned]
- [If none, write: *No follow-up items.*]
```

## Guidelines

- **Be concise**: Each bullet should be one clear sentence. Avoid filler.
- **Preserve meaning**: Do not alter the substance of decisions or action items.
- **Infer owners carefully**: Only assign an action item to a person if it is explicitly stated or strongly implied in the transcript. Use *unassigned* otherwise.
- **Separate concerns**: A "Decision" is something resolved. A "Question" is still open. A "Parking Lot" item is intentionally deferred.
- **No attribution in bullets**: Do not write "John said..." — just capture the point itself.
- **Date/Attendees**: Extract only if clearly stated. Do not guess.

## Example

**Input transcript excerpt:**
> "So we agreed to go with Postgres for the new service. Sarah will set up the schema by Friday. There's still an open question about whether we need read replicas — we'll revisit that next week. Also, the mobile team brought up API rate limiting but we didn't have time to discuss it."

**Expected output excerpt:**
```
## Decisions
- Postgres selected as the database for the new service.

## Action Items
- [ ] Set up database schema — *Sarah* (by Friday)

## Questions
- Do we need read replicas for the new service?

## Parking Lot
- API rate limiting for the mobile team (not discussed, deferred).
```
