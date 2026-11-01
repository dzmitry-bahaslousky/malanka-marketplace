---
name: explain-topic
description: Build a published Artifact (HTML page) that explains any topic simply but deeply, grounded in the material the user provides — notes, pasted text, a vault note, a doc, a transcript, or just a topic name plus context. Use whenever the user asks to "explain X", "help me understand X", "make an explainer / deep dive / breakdown of X", "объясни X", "разбери тему", or shares material and wants it turned into a clear explanation page — even if they don't say "artifact". Has no fixed structure: moves from the high-level idea down to why it works this way and the ideas behind it, with simple examples and plenty of illustrations. Not for quick one-line answers in chat or for flashcards.
---

# Explain Topic

Turn a topic (and whatever material the user gives) into one explainer page that a smart beginner can read top to bottom and come away really understanding it. The page is **simple in language, deep in content**. Those two goals pull against each other, and handling that pull well is the whole job.

## 1. Gather the source

- Use the user's material as the main source. If they point at notes or files, read them in full. In an Obsidian vault, search the vault for related notes first.
- If the material is thin, fill gaps from your own knowledge, but keep that separate in your head: anything not in their material must be well-established. Don't invent specifics (numbers, dates, API names) to make the page look complete.
- If their material contains something that looks wrong, don't silently fix it or repeat it. Mention it on the page (a short "Note:" callout) and tell the user in chat.
- Ask a question only if the topic is truly ambiguous (e.g. "Raft": the consensus algorithm or the boat?). Otherwise just start.

## 2. Language and voice

- Write in the language the user wrote in (Russian or English). Keep standard technical terms in their usual form and explain each one the first time it appears.
- Plain words, short sentences, active voice. Explain one idea at a time.
- "Simple" means simple *words*, not shallow *content*. Never drop a hard part because it's hard to explain. Find a simpler way to say it.
- Ground each abstract idea in something concrete: an analogy, a small worked example, or a picture. When you use an analogy, say where it stops being true.
- No filler ("In today's world…", "It's important to note…"). Every paragraph should teach something.

## 3. Shape of the explanation

There is no fixed structure. The topic, the material, and what the user is trying to understand decide the sections, their names, their order, and the length. A small concept may be one short flow; a large system may need many sections. Include a part only if it helps this reader understand this topic.

One thing holds on every page: **go from the high-level idea down to the reasons.**

- Start with the big idea: what it is and why it matters. A reader who stops here should still get the gist.
- Go lower step by step: how it works, then why it works this way, then the ideas behind it: what problem forced this design, what constraints shaped it, what would break if it were done differently.
- Each level should rest on the one above, so nothing appears before the reader has what they need to follow it.

Use simple examples throughout. Show each important idea with the smallest example that demonstrates it, with real-looking values, and grow an example as the explanation goes deeper rather than switching to a new one.

Reach for edge cases, misconceptions, tradeoffs, history, or a recap when they deepen understanding of this topic. None of them is required.

Depth check before publishing: could a reader answer "why?" one level below each main claim? If not, add that level.

## 4. Build the artifact

Follow the Artifact tool's own workflow: run `quickstart` (intent `other`), and load `artifact-design` (or use the quickstart's design guidance). Load `artifact-diagramming` by default: this page should be illustrated generously.

Page-specific guidance:
- Use a reading layout: one comfortable text column, clear headings, a sticky or top table of contents when there are many sections.
- Don't hold back on illustrations. Use inline SVG diagrams wherever a picture helps: the big idea, each step of a mechanism, structures, states, before/after, and examples. If a section explains something that has a shape or a flow, it should usually have its own picture. Each one must show the real mechanism, not decorate the page.
- Put tables in for comparisons. Use callouts for misconceptions and "careful!" corner cases.
- Use small interactive bits (a toggle between cases, a step-through, a slider) only when they actually help understanding, not as decoration.
- Title: the topic name (2–4 words). Description: one sentence on what the page explains.

Save the HTML in the scratchpad directory (or where the user asks), publish it, and send the link.

## 5. Reply in chat

Keep it short: the link, 2–3 lines on what the page covers, and anything you flagged (gaps in their material, claims you corrected, parts you filled in from general knowledge). Offer to save a condensed version as a vault note if they're working in Obsidian.
