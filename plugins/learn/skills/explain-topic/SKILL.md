---
name: explain-topic
description: Build a published Artifact (HTML page) that explains any topic simply but deeply, grounded in the material the user provides — notes, pasted text, a vault note, a doc, a transcript, or just a topic name plus context. Use when the user asks for an explainer, deep dive, breakdown, or page about a topic ("make an explainer of X", "deep dive into X", "help me really understand X", "разбери тему X", "сделай разбор X"), or shares material and wants it turned into a clear explanation — even if they don't say "artifact". For a plain "explain X" / "объясни X" asked in the middle of other work (a function, an error, a quick concept), answer in chat and offer this page instead of building it. Has no fixed structure: moves from the high-level idea down to why it works this way and the ideas behind it, with simple examples and plenty of illustrations. Not for quick one-line answers in chat or for flashcards.
---

# Explain Topic

Turn a topic (and whatever material the user gives) into one explainer page that this reader can read top to bottom and come away really understanding it. The page is **simple in language, deep in content**. Those two goals pull against each other, and handling that pull well is the whole job.

## 1. Gather the source

- Use the user's material as the main source. If they point at notes or files, read them in full. In an Obsidian vault, search the vault for related notes first.
- If the material is thin, fill gaps from your own knowledge, but keep that separate in your head: anything not in their material must be well-established. Don't invent specifics (numbers, dates, API names) to make the page look complete.
- If their material contains something that looks wrong, don't silently fix it or repeat it. Mention it on the page (a short "Note:" callout) and tell the user in chat.
- Ask a question only if the topic is truly ambiguous (e.g. "Raft": the consensus algorithm or the boat?). Otherwise just start.
- If the question turns out to be small (one fact, one function, one error), answer it in chat and offer the page. Don't build a page for it.

## 2. Know the reader

Before writing, work out two things from the user's message, their material, and the conversation so far:

- **What they already know.** Their notes and wording show it: the terms they use correctly, the parts they skip over, the parts they got wrong or left as questions. Don't explain what they clearly have. Start where their understanding stops.
- **What they are trying to answer.** A person preparing for an interview, debugging a system, and reading out of curiosity need different pages on the same topic. Build the page around their question.

If nothing shows their level, write for a smart beginner: someone bright who has not met this topic before.

## 3. Language and voice

- Write in the language the user wrote in (Russian or English). Keep standard technical terms in their usual form and explain each one the first time it appears.
- Plain words, short sentences, active voice. Explain one idea at a time.
- "Simple" means simple *words*, not shallow *content*. Never drop a hard part because it's hard to explain. Find a simpler way to say it.
- Ground each abstract idea in something concrete: an analogy, a small worked example, or a picture. When you use an analogy, say where it stops being true.
- No filler ("In today's world…", "It's important to note…"). Every paragraph should teach something.

## 4. Shape of the explanation

There is no fixed structure. The topic, the material, and what the user is trying to understand decide the sections, their names, their order, and the length. A small concept may be one short flow; a large system may need many sections. Include a part only if it helps this reader understand this topic.

One thing holds on every page: **go from the high-level idea down to the reasons.**

- Start with the big idea: what it is and why it matters. A reader who stops here should still get the gist.
- Go lower step by step: how it works, then why it works this way, then the ideas behind it: what problem forced this design, what constraints shaped it, what would break if it were done differently.
- Each level should rest on the one above, so nothing appears before the reader has what they need to follow it.

Use simple examples throughout. Show each important idea with the smallest example that demonstrates it, with real-looking values, and grow an example as the explanation goes deeper rather than switching to a new one.

Reach for edge cases, misconceptions, tradeoffs, history, or a recap when they deepen understanding of this topic. None of them is required.

**Make the reader think, not only read.** At the few points where the explanation turns (just before a mechanism is revealed, or before a surprising result), ask the reader to predict what happens, and hide the answer until they open it. Two to four such questions suit most pages; a very short page may need none. Ask only questions whose answer the page has prepared the reader to reason out. Don't ask them to recall a term.

**When the topic is too big for one page** ("explain Kubernetes"), don't cover everything thinly. Pick one spine question, the one this reader most needs answered, and explain it fully. End the page with a short "Not covered here" list that names the parts you left out, so the reader knows the map is larger.

## 5. Link official sources

When the page states a specific fact (a number, a date, a guarantee, a rule of how the thing behaves) or tells an interesting event from its history, link the official source so the reader can check it and go deeper. Not every sentence needs a link. General explanations and your own analogies don't.

- **Official only.** That means the project's or vendor's own documentation, the specification or standard (RFCs, W3C/WHATWG, ISO, language specs), the original paper by the authors, or a primary announcement (release notes, the authors' own post or talk). No third-party blogs, tutorials, Medium, Stack Overflow, or Wikipedia.
- **Verify every link before you use it.** Find it with a search or fetch, open it, and make sure it says what you cite it for. Link to the exact section (an anchor) when you can. Never write a URL from memory without checking it. If you can't find an official source for a claim, leave the link out. Don't use a weaker source instead.
- **On the page:** put a small inline link right next to the claim it supports, and add a short "Sources & further reading" list at the end. Give each entry its title and one line on what the reader will get from it.
- **If you have no way to search or fetch the web,** publish the page without links and without the sources list, and say so in chat. Don't add links you could not open.

## 6. Build the artifact

Follow the Artifact tool's own workflow: run `quickstart` (intent `other`), and load `artifact-design` (or use the quickstart's design guidance). Load `artifact-diagramming` by default: this page should be illustrated generously.

Page-specific guidance:
- Use a reading layout: one comfortable text column, clear headings, a sticky or top table of contents when there are many sections.
- Don't hold back on illustrations. Use inline SVG diagrams wherever a picture helps: the big idea, each step of a mechanism, structures, states, before/after, and examples. If a section explains something that has a shape or a flow, it should usually have its own picture. Each one must show the real mechanism, not decorate the page.
- Put tables in for comparisons. Use callouts for misconceptions and "careful!" corner cases.
- Use small interactive bits (a toggle between cases, a step-through, a slider) only when they actually help understanding, not as decoration.
- Put each "predict first" question in a `<details>` element: the question in the `<summary>`, the answer and its reason inside. Make it look different from a callout so the reader sees it is something to do.
- Title: the topic name (2–4 words). Description: one sentence on what the page explains.

Save the HTML in the scratchpad directory (or where the user asks).

## 7. Check before publishing

Read the finished page once as the reader from section 2, and fix what you find:

- **Depth.** Could the reader answer "why?" one level below each main claim? If not, add that level.
- **Order.** Is every term explained at or before its first use? Does any section lean on an idea that comes later?
- **Examples.** Recompute every worked example by hand or with a quick script. Check that values carried from one step to the next still match. Wrong numbers in an example are the most common error on these pages, and the one that confuses readers most.
- **Pictures.** Does each diagram show what the text beside it says, with the same names, values, and order of steps?
- **Reader.** Does the page start where this reader's understanding stops, and answer the question they came with?

Then publish it and send the link.

## 8. Reply in chat

Keep it short: the link, 2–3 lines on what the page covers, and anything you flagged (gaps in their material, claims you corrected, parts you filled in from general knowledge, claims you could not find an official source for, parts of a big topic you left out). Offer to save a condensed version as a vault note if they're working in Obsidian.

## 9. Follow-ups

When the user asks to go deeper on a part, fix something, or add a section, update the same page so the link stays the same. Publish a new page only when they ask about a different topic.
