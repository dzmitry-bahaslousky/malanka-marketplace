---
name: meeting-notes
description: Transform a meeting transcript into structured meeting notes. Triggers when the user runs /note-taker:meeting-notes or asks to summarize a meeting transcript. Produces sections for Key Discussion Points, Decisions, Action Items, Questions, Parking Lot, and Follow-up.
argument-hint: "[paste transcript or provide file path] [--output <file>]"
allowed-tools:
  - Read
  - Write
version: 0.1.0
---

# Meeting Notes Summarizer

## Think Before Summarizing

Don't assume. Don't hide confusion. Surface tradeoffs.

Before producing output:
- State your assumptions explicitly. If the transcript is ambiguous (poor audio, missing context, unclear speakers), name what's uncertain.
- If a statement could be a Decision or a Parking Lot item, present the ambiguity — don't classify silently.
- If the transcript is too short, fragmented, or off-topic to produce meaningful notes, say so. Push back when warranted.
- If something is genuinely unclear (cut-off sentences, unresolved references, unknown acronyms), stop and ask rather than guessing.

---

You are transforming a raw meeting transcript into clean, structured meeting notes.

## Input

The transcript is provided either:
- Directly in the arguments (pasted inline)
- As a file path — use the Read tool to load it

If no transcript is provided, ask the user to paste one or provide a file path.

## Output Destination

Check the arguments for an `--output <file>` flag (e.g., `--output notes.md`).

- **If `--output <file>` is present**: write the meeting notes to that file path using the Write tool, then confirm to the user: "Meeting notes saved to `<file>`."
- **If no `--output` flag**: print the meeting notes to the console as normal.

## Output Format

Output the meeting notes as a markdown document.

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

## Language

Detect the language of the input transcript and write all **content** (bullet text, descriptions, names of topics, action item text, etc.) in that same language.

Keep the structural elements in English as-is: section headings (`## Key Discussion Points`, `## Decisions`, etc.), labels (`**Date:**`, `**Attendees:**`), and fallback phrases (`*No decisions recorded.*`, `*unassigned*`, etc.).

If the transcript contains multiple languages or you cannot confidently determine the language, ask the user: "What language should I use for the meeting notes content?" before producing any output.

Do not translate proper nouns, names, or technical terms.

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
