---
name: explain
description: Explain a concept, term, or topic in simple words without losing depth. Use whenever the user wants to understand something ("explain X", "what is X", "I don't get X", "why does X work this way", "объясни X", "не понимаю X"), including when they are stuck on one idea while reading or reviewing. Gives a short structured answer in chat. Builds an illustrated Artifact page instead when they ask for an explainer, deep dive, or breakdown ("разбери тему X"), or share material to turn into one. Not for flashcards.
---

# Explain

Explain something so that this reader really understands it. The explanation is **simple in language, deep in content**. Those two goals pull against each other, and handling that pull well is the whole job.

Sections 1 to 4 apply to every explanation. Then follow section 5 for a chat answer or section 6 for a page.

## 1. Pick the form

- **Chat answer** (default): one concept, term, step, or "why" question. Most requests are this, especially a question asked in the middle of reading, reviewing, or other work.
- **Page**: the user asks for a page, explainer, deep dive, or breakdown; or shares material and wants it turned into an explanation; or the topic has several parts that depend on each other and would not fit on one screen of chat.

When a plain "explain X" turns out to be big, give the chat answer for its core idea and offer the page. Don't build a page the user didn't ask for.

## 2. Gather the source

- Use the user's material as the main source. If they point at notes or files, read them in full. In an Obsidian vault, search the vault for related notes first.
- If the user is stuck on a specific passage, phrase, or step, explain that exact thing. Don't restart the whole topic from zero.
- If the material is thin, fill gaps from your own knowledge, but keep that separate in your head: anything not in their material must be well-established. Don't invent specifics (numbers, dates, API names) to make the explanation look complete.
- If their material contains something that looks wrong, don't silently fix it or repeat it. Say so.
- Ask a question only if the topic is truly ambiguous (e.g. "Raft": the consensus algorithm or the boat?), or you can't tell which part they are stuck on. Otherwise just start.

## 3. Know the reader

Before writing, work out two things from the user's message, their material, and the conversation so far:

- **What they already know.** Their notes and wording show it: the terms they use correctly, the parts they skip over, the parts they got wrong or left as questions. Don't explain what they clearly have. Start where their understanding stops.
- **What they are trying to answer.** A person preparing for an interview, debugging a system, and reading out of curiosity need different explanations of the same topic. Build the explanation around their question.

If nothing shows their level, write for a smart beginner: someone bright who has not met this topic before.

## 4. Language and voice

- Write in the language the user wrote in (Russian or English). Keep standard technical terms in their usual form and explain each one the first time it appears.
- Plain words, short sentences, active voice. Explain one idea at a time.
- "Simple" means simple *words*, not shallow *content*. Never drop a hard part because it's hard to explain. Find a simpler way to say it.
- Ground each abstract idea in something concrete: an analogy, a small worked example, or a picture. When you use an analogy, say where it stops being true.
- Show each important idea with the smallest example that demonstrates it, with real-looking values. Grow one example as the explanation goes deeper rather than switching to a new one.
- No filler ("In today's world…", "It's important to note…"). Every paragraph should teach something.

## 5. Chat answer

A chat answer is a short path the reader walks. It starts at something they already know and reaches the idea in small steps. The usual way it fails is by being a compressed summary: every sentence is correct, but each one carries three ideas and two new terms, so the reader gets lost in the second paragraph. When you have to choose, cover less and explain it fully.

Use this shape, in this order. Give each part a short bold label in the user's language so the reader can see the path at a glance.

1. **In short.** One or two sentences in everyday words, with no new terms. A reader who stops here should still get the gist.
2. **The problem.** A concrete situation where things go wrong without this idea. The reader should want the solution before they see it.
3. **What you need first.** Anything the idea rests on that the reader may not know, one line each. Skip this part when there is nothing.
4. **How it works.** One small example with real-looking values, walked through as a numbered list. Each step adds exactly one new thing and follows from the step before it.
5. **Careful.** One common misconception, or the place where the idea or your analogy stops being true.

End with one line that offers the next move: simpler, deeper, another example, a part you left out, or a full page.

### Keep it easy to follow

- **Cover less, not denser.** Explain the core idea only. Leave out variants, optimizations, edge cases, and history, and name them in the last line as things you can explain next. Never leave out a step the core idea needs.
- **Don't squeeze.** Most answers fit on one screen, but a longer answer that the reader can follow is better than a short one they can't. Make an answer shorter by covering less, never by packing more into each sentence.
- **One idea per sentence.** Keep paragraphs to three sentences at most. Write anything that happens in order as a numbered list, not as a paragraph.
- **At most three new terms.** Describe everything else in plain words, even when a proper term exists. Put each new term in bold where it first appears and say what it means in that same sentence, using only everyday words. Never explain a term with another term the reader hasn't met. After that, always use the same word for the same thing.
- **Assume less.** Using a term doesn't prove the reader understands it. When you can't tell whether they know something, explain it in one line. An extra line costs them a few seconds; a missing step loses them.
- **Don't jump.** Between two steps the reader should never have to ask "wait, why?". If a step depends on a fact, state the fact. Words like "simply", "just", and "obviously" usually mark a skipped step, so when you write one, put the step in.
- **Show the shape.** Add a small table for a comparison, or a small text diagram for a flow or structure, when the thing has that shape.

### Check before sending

Read the answer once as someone who has never met the topic, and fix what you find:

- Is any term used before it is explained, or explained with another unexplained term?
- Does any sentence carry more than one idea?
- Is there a step where you would ask "wait, why?"
- Recompute the example. Values carried from one step to the next must match.

## 6. Page

Turn the topic into one explainer page that this reader can read top to bottom.

### Shape

There is no fixed structure. The topic, the material, and what the user is trying to understand decide the sections, their names, their order, and the length. A small concept may be one short flow; a large system may need many sections. Include a part only if it helps this reader understand this topic.

One thing holds on every page: **go from the high-level idea down to the reasons.**

- Start with the big idea: what it is and why it matters. A reader who stops here should still get the gist.
- Go lower step by step: how it works, then why it works this way, then the ideas behind it: what problem forced this design, what constraints shaped it, what would break if it were done differently.
- Each level should rest on the one above, so nothing appears before the reader has what they need to follow it.

Reach for edge cases, misconceptions, tradeoffs, history, or a recap when they deepen understanding of this topic. None of them is required.

If the user's material contains something that looks wrong, mention it on the page (a short "Note:" callout) and tell the user in chat.

**Make the reader think, not only read.** At the few points where the explanation turns (just before a mechanism is revealed, or before a surprising result), ask the reader to predict what happens, and hide the answer until they open it. Two to four such questions suit most pages; a very short page may need none. Ask only questions whose answer the page has prepared the reader to reason out. Don't ask them to recall a term.

**When the topic is too big for one page** ("explain Kubernetes"), don't cover everything thinly. Pick one spine question, the one this reader most needs answered, and explain it fully. End the page with a short "Not covered here" list that names the parts you left out, so the reader knows the map is larger.

### Link official sources

When the page states a specific fact (a number, a date, a guarantee, a rule of how the thing behaves) or tells an interesting event from its history, link the official source so the reader can check it and go deeper. Not every sentence needs a link. General explanations and your own analogies don't.

- **Official only.** That means the project's or vendor's own documentation, the specification or standard (RFCs, W3C/WHATWG, ISO, language specs), the original paper by the authors, or a primary announcement (release notes, the authors' own post or talk). No third-party blogs, tutorials, Medium, Stack Overflow, or Wikipedia.
- **Verify every link before you use it.** Find it with a search or fetch, open it, and make sure it says what you cite it for. Link to the exact section (an anchor) when you can. Never write a URL from memory without checking it. If you can't find an official source for a claim, leave the link out. Don't use a weaker source instead.
- **On the page:** put a small inline link right next to the claim it supports, and add a short "Sources & further reading" list at the end. Give each entry its title and one line on what the reader will get from it.
- **If you have no way to search or fetch the web,** publish the page without links and without the sources list, and say so in chat. Don't add links you could not open.

### Build the artifact

Follow the Artifact tool's own workflow: run `quickstart` (intent `other`), and load `artifact-design` (or use the quickstart's design guidance). Load `artifact-diagramming` by default: this page should be illustrated generously.

Page-specific guidance:
- Use a reading layout: one comfortable text column, clear headings, a sticky or top table of contents when there are many sections.
- Don't hold back on illustrations. Use inline SVG diagrams wherever a picture helps: the big idea, each step of a mechanism, structures, states, before/after, and examples. If a section explains something that has a shape or a flow, it should usually have its own picture. Each one must show the real mechanism, not decorate the page.
- Put tables in for comparisons. Use callouts for misconceptions and "careful!" corner cases.
- Use small interactive bits (a toggle between cases, a step-through, a slider) only when they actually help understanding, not as decoration.
- Put each "predict first" question in a `<details>` element: the question in the `<summary>`, the answer and its reason inside. Make it look different from a callout so the reader sees it is something to do.
- Title: the topic name (2–4 words). Description: one sentence on what the page explains.

Save the HTML in the scratchpad directory (or where the user asks).

### Check before publishing

Read the finished page once as the reader from section 3, and fix what you find:

- **Depth.** Could the reader answer "why?" one level below each main claim? If not, add that level.
- **Order.** Is every term explained at or before its first use? Does any section lean on an idea that comes later?
- **Examples.** Recompute every worked example by hand or with a quick script. Check that values carried from one step to the next still match. Wrong numbers in an example are the most common error on these pages, and the one that confuses readers most.
- **Pictures.** Does each diagram show what the text beside it says, with the same names, values, and order of steps?
- **Reader.** Does the page start where this reader's understanding stops, and answer the question they came with?

Then publish it and send the link.

### Reply in chat

Keep it short: the link, 2–3 lines on what the page covers, and anything you flagged (gaps in their material, claims you corrected, parts you filled in from general knowledge, claims you could not find an official source for, parts of a big topic you left out). Offer to save a condensed version as a vault note if they're working in Obsidian.

## 7. Follow-ups

- **After a chat answer:** "simpler", "deeper", or "another example" reworks the same explanation and keeps the same example where it can. Don't start over. If the user asks for the page, build it from what the chat answer already established.
- **After a page:** when the user asks to go deeper on a part, fix something, or add a section, update the same page so the link stays the same. Answer a small question about the page in chat. Publish a new page only when they ask about a different topic.
