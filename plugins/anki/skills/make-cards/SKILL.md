---
name: make-cards
description: Turn a topic, artifact, page, article, doc, note, or pasted text into a focused set of simple, illustrated Anki cards that fit the user's existing collection, with the right deck, tags, and new deck suggestions. Use whenever the user wants Anki cards, flashcards, or questions to memorize something, for example "make anki cards for X", "qqs on this page", "add this to anki", "turn this article into flashcards", "сделай карточки по X", or shares material and asks what to remember from it, even if they only say "qqs".
---

# Make Anki cards

Turn whatever the user gives you into the 10-15 questions most worth remembering, with answers that make the idea truly understood, each helped by a picture, placed where they belong in the collection.

All Anki access goes through `scripts/anki.py` in this skill's base directory (commands below), so it works whether or not the `anki-mcp` tools are loaded. Anki has to be running.

## Keep the chat clean: draft in a fork

Steps 1-6 produce a lot of output the user never needs afterwards: collection lookups, card answers read in full, pictures, preview fixes. Run them in a fork of this conversation, so the chat keeps only the summary and the decision.

- **Start the fork.** If the Agent tool offers `subagent_type: "fork"`, call it with a prompt like: "Run steps 1-6 of the anki:make-cards skill (base directory: `<this skill's base directory>`) on `<the material, or: the ◆ Anki suggestions in this conversation>`. Stop after the preview. Don't ask the user anything. Return only the step 6 summary and the path to cards.json." Pass along anything the user said about scope, deck, or count. A fork, unlike a fresh subagent, sees this conversation, which the material often is. Tell the user in one line that the draft is being made and the preview page will open.
- **Show the result.** When the fork reports back, give the user its summary as is and ask whether to add the cards.
- **Edits.** Send the requested changes to the same fork with `SendMessage`, so it keeps what it learned about the collection, and show the updated summary.
- **Approval.** Run step 7 yourself in this chat with the `cards.json` path the fork returned.
- **No fork available** (no Agent tool, or no `fork` type): do every step inline, as written below.

If you are the fork, do steps 1-6 and end with the summary; the step 6 instruction to ask for approval is the main chat's job.

## 1. Read the material

Work from what the user provided: read the file, page, artifact, or pasted text in full. If they named no material but this conversation has `◆ Anki` suggestion blocks, the material is those suggestions plus the discussion around them. Use the ones the user picked, or all of them if they didn't pick. The suggested questions are seeds: rework, merge, or replace them like any other draft, and add the questions they leave out. If they gave only a topic name, use what you know, and look it up when it is recent or version-specific. Facts on these cards get drilled for years, so a wrong one is expensive: when you are unsure of a detail, verify it or leave it out.

Don't ask scoping questions up front. The draft is the question: it's cheaper for the user to react to real cards than to answer a questionnaire.

## 2. Learn the collection

```bash
python3 scripts/anki.py map
python3 scripts/anki.py find "term" "other term"
```

`map` shows the decks, every tag, which tags each deck uses, and what recent cards look like. `find` searches questions, answers, and tags, and prints each match with the start of its answer; add `--full` to read whole answers once the terms are narrow, which you need to judge a close duplicate or a wrong card. Pass a handful of specific terms rather than generic words like "service". Older cards are mostly Russian but keep English technical terms, so English terms usually find them; add a Russian word when the concept has no English term. Deck and tag names can differ (`Message Brokers` vs `MessageBrokers`), so take tag names from `map`.

From these, decide:

- **Skip what's already there.** Drop any question an existing card already answers, even if it's worded differently, and replace it with the next most useful one. A generic card, like "What is a circuit breaker?", doesn't cover a question specific to one tool. Tell the user how many you dropped and name a few. This matters most when a tag already has many cards: then look for what's missing rather than the basics.
- **Report wrong cards.** If an existing card contradicts what you've verified, list it in the summary with what's wrong. Don't edit it: changing a card is the user's decision, and it's outside this task.
- **Deck.** Use the most specific existing deck that fits. Decks here are broad areas, and the fine detail lives in tags, so don't propose a new deck for what a tag can express.
- **New deck suggestion.** Propose one only when the topic fits no existing deck, or when it's a clearly separate area that will keep growing (for example a non-engineering subject doesn't belong under `Software Engineering`). Give the full path (a top-level name is fine for a new area), a one-line reason, and the closest existing alternative, so the user can choose. Follow the existing naming style, and put the suggested deck in the draft so the preview shows the real plan.
- **Tags.** Reuse existing tags. Use the deepest one that fits, and copy how sibling cards in that branch are tagged: some branches list the whole chain (`Docker`, `Docker::Registry`, `Docker::Registry::Harbor`), others just the leaf (`AWS::Lambda`). `find` shows real examples. In a branch with no children yet, use the whole chain. Add a new tag only as a child of an existing branch when several cards share a subject no tag covers, and mark it `(new)` in the draft. Empty tags in `map` are ones the user prepared earlier, so prefer them when they fit, even with no deck behind them or in another language.

## 3. Choose the questions

Default to the 10-15 that matter most. That's a ceiling, so a short source may only deserve 6. Go past 15 only when the user asks to go deeper, for more, or names a number; with "deeper", favour the mechanisms, edge cases, and failure modes that were left out. Even for "all the questions", stop at about 30 in one batch and name what you left out: a big batch is a big daily review load, and the user can always ask for the rest.

To choose, ask: *if the user remembered only these, would they understand the topic and be able to use it?* Prefer the core idea, why something works this way, how options differ, when to pick which, and what goes wrong. Skip trivia, version numbers, and exhaustive lists: they cost reviews without building understanding.

Order the set so basics come before what depends on them.

## 4. Write the cards

Each card is a Basic note (front and back) testing one idea.

**Front:** a short, specific question with one right answer, ideally under 70 characters and with no filler. "Why doesn't deleting images free disk space in Harbor?" beats "What can you tell me about Harbor storage?". The answer is the point that opens the back, so if you can't state that point in a sentence, narrow the question.

**Back:** the point to recall first, then the explanation that makes it stick.

- Open with the point: what the user has to say to count the card as recalled, as one bold sentence in its own `<p>`. Don't label it ("Answer:", "Key point:"); it is simply the first line. A paragraph only feels familiar on review, while a point can be checked in seconds: either the user said it or they didn't.
- One point is the default. Two or three are fine only as a chain, where each follows from the one before ("the database changes, so scans must be repeated"), because a chain is recalled as one thought. Points that don't depend on each other ("three benefits of X") go on separate cards: recalling two of three has no honest grade.
- Put the reason inside the point when there is one: "X, because Y" tests understanding, a bare "X" tests wording.
- Below the point, explain the idea the way you would to a smart friend who's new to this. This part is read when the point was missed, so there's no length limit: use as many words as the idea needs to make sense, and no more. A picture helps, but the words should work on their own.
- Use a concrete example or an everyday analogy in the explanation when that's what makes the idea click.
- Use plain words. Define or avoid jargon. If a technical term is needed, say what it means in passing.
- Wrap text in `<p>`, code in `<code>`. For "X vs Y" questions, a small `<table>` under the point often beats sentences. If it holds the whole explanation, it replaces the picture rather than sitting beside one that says the same thing.

```
Front: Why can an image with a clean scan become vulnerable later?
Back:  <p><b>The image never changes, but the vulnerability database does, so scans have to be repeated on a schedule.</b></p>
       <p>A scan compares the software inside the image with the list of flaws known that day. New flaws (CVEs) are found later in software that was already there. It's like a medicine that passed inspection last year: the pills are the same, but a new study has since found a side effect. Scanning only on push checks each image once and never again.</p>
```

**Language:** English, like all of the user's cards since mid-2025, unless they ask otherwise or write the request in Russian.

## 5. Illustrate the answers

Give a card a picture by default. Skip one only when a drawing would just repeat the words, such as an acronym or a single fact, and tell the user which cards went without. Aim for at least two thirds illustrated.

Read `references/illustrations.md` before drawing: it has the shape to use for each kind of idea, a template that matches the existing cards, and the limits of images in Anki.

Save each picture beside the draft as `<topic>-card-NN.svg`, where `NN` is the card's number. Media names must be unique in the whole collection, so make `<topic>` specific (`kafka-rebalance`, not `kafka`). For a large set, generating the files with a small throwaway script is fine.

## 6. Show the draft and wait

Write the draft to a working folder (not the repo):

```json
{"deck": "Software Engineering::K8s",
 "cards": [{"front": "...", "back": "<p>...</p>", "tags": ["K8s"], "image": "k8s-card-01.svg"}]}
```

Then run:

```bash
python3 scripts/anki.py preview <folder>/cards.json
```

This validates the draft, including whether the picture names are free, and opens a page showing every card with its picture, since pictures can't be seen in a terminal. Fix anything it reports.

In chat, give a compact summary:

```
Deck: Software Engineering::K8s (existing)
Tags: K8s, K8s::Networking (new)
New deck idea: none
Already covered, dropped: 3 ("What is a Pod?", ...)
Wrong existing cards: none
No picture: #4, #9

1. Why does a Pod get its own IP?
2. ...
```

Then ask whether to add them. Don't write to Anki until the user approves, because cards land in their daily reviews and syncs, and deleting them later is on them. Apply any edits they request and show the changes.

## 7. Add to Anki

```bash
python3 scripts/anki.py add <folder>/cards.json
```

This creates the deck if needed and stores the pictures. Report how many cards went in, the deck, and anything skipped. A card is skipped when its front duplicates an existing note; say so rather than forcing it in.
