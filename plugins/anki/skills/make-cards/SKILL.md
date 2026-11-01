---
name: make-cards
description: Turn a topic, artifact, page, article, doc, note, or pasted text into a focused set of simple, illustrated Anki cards that fit the user's existing collection, with the right deck, tags, and new deck suggestions. Use whenever the user wants Anki cards, flashcards, or questions to memorize something, for example "make anki cards for X", "qqs on this page", "add this to anki", "turn this article into flashcards", "сделай карточки по X", or shares material and asks what to remember from it, even if they only say "qqs".
---

# Make Anki cards

Turn whatever the user gives you into the 10-15 questions most worth remembering, with answers that make the idea truly understood, each helped by a picture, placed where they belong in the collection.

All Anki access goes through `scripts/anki.py` in this skill's base directory (commands below), so it works whether or not the `anki-mcp` tools are loaded. Anki has to be running.

## 1. Read the material

Work from what the user provided: read the file, page, artifact, or pasted text in full. If they gave only a topic name, use what you know, and look it up when it is recent or version-specific. Facts on these cards get drilled for years, so a wrong one is expensive: when you are unsure of a detail, verify it or leave it out.

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

**Front:** a short, specific question with one right answer, ideally under 70 characters and with no filler. "Why doesn't deleting images free disk space in Harbor?" beats "What can you tell me about Harbor storage?".

**Back:** explain the idea the way you would to a smart friend who's new to this.

- Understanding comes first, so there's no length limit: use as many words as the idea needs to make sense, and no more. Start with the point itself, then explain it. A picture helps, but the words should work on their own.
- Use plain words. Define or avoid jargon. If a technical term is needed, say what it means in passing.
- Give the reason, not just the fact: "because..." is what makes it stick.
- Use a concrete example or an everyday analogy when that's what makes the idea click.
- Wrap text in `<p>`, code in `<code>`. For "X vs Y" questions, a small `<table>` often beats sentences. If it holds the whole answer, it replaces the picture rather than sitting beside one that says the same thing.

```
Front: Why can an image with a clean scan become vulnerable later?
Back:  <p>The image can't change, but the vulnerability database does. New CVEs appear for software already inside it, so you need scheduled scans as well as scan-on-push.</p>
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
