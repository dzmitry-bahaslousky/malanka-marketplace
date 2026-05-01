---
name: topic-to-questions
description: Generate high-quality Anki questions from a topic the user provides. Triggers when the user says "create anki questions about X", "generate flashcards for topic Y", "make me anki cards on Z", "study anki on <topic>", "I want to memorize <topic>", or otherwise asks for cards built from a subject area. Use this skill whenever the starting point is a topic/concept and the cards still need to be invented, not just formatted from existing notes. Covers both what to ask (question selection) and how to phrase it (card formulation), and ends by writing approved cards via the `anki-mcp` `addNote` tool.
version: 0.1.0
---

# Topic → Anki Questions

Turn a topic into a vetted set of Anki cards. Two halves: **deciding what to ask** (question selection from the topic) and **how to phrase each card** (formulation rules grounded in spaced-repetition research, especially Wozniak's *Twenty Rules of Formulating Knowledge*).

> **Hard guardrail**: Never call the `anki-mcp` `addNote` tool until the user has reviewed the proposed cards and explicitly approved them. Draft → review → approve → write. No exceptions.

---

## When this skill applies

The user gives you a **topic** ("Postgres MVCC", "the French Revolution", "JS event loop") rather than a finished list of facts. Your job is to convert that topic into a question set that genuinely teaches it — not a pile of trivia.

If the user pastes raw study notes and just wants them turned into cards verbatim, you can skip the topic-decomposition steps below and jump to the formulation rules.

---

## Part 1 — Question Selection

### 1. Scope the topic with the user

Before generating anything, briefly confirm:

- **Depth**: introductory, working knowledge, or expert?
- **Purpose**: exam prep, professional use, general curiosity? This affects which Bloom levels matter.
- **Volume**: rough target (e.g., ~15 cards, ~50 cards). Better to ask than to dump 80 cards on someone who wanted 10.
- **Prior knowledge**: what does the user already know? Skip prerequisites they've mastered; include them if shaky.
- **Deck / tags**: which Anki deck, and any tags to apply.

One short message with these questions is fine. Don't interrogate.

### 2. Decompose the topic before writing any card

Build a quick outline first:

1. **Core vocabulary** — terms a learner must recognize before anything else makes sense.
2. **Foundational facts** — definitions, key dates, formulas, signatures.
3. **Mechanisms / relationships** — *how* and *why* things work; cause/effect; comparisons.
4. **Applications / edge cases** — scenarios, failure modes, "when would you use X over Y".

Cover them **in that order**. Cards from later layers assume earlier layers — if a learner can't define a term, they can't reason about it.

### 3. Aim for a Bloom's-taxonomy mix

Recognition-only decks fail learners in practice: they pass reviews but can't use the knowledge. Mix levels deliberately:

| Bloom level | Tests | Card style |
|---|---|---|
| Remember | Recall a fact | Basic Q/A, cloze |
| Understand | Explain in own words, distinguish similar concepts | "Why does X cause Y?", "How does X differ from Y?" |
| Apply | Use the idea in a scenario | "Given <situation>, what happens?" |
| Analyze / Evaluate | Compare, judge, troubleshoot | "Why pick X over Y when…?" |

A reasonable default for a working-knowledge deck: ~40% remember, ~35% understand, ~20% apply, ~5% analyze. Adjust to purpose. For pure vocabulary or language learning, recall-heavy is correct — don't force higher Bloom levels where they don't fit.

### 4. Prefer "why" and "how" over "what" when both fit

"What is a B-tree?" tests definition recall. "Why does Postgres prefer B-trees over hash indexes for range queries?" tests the same vocabulary *plus* understanding, and the answer naturally rehearses the definition. When a why/how question subsumes a what question without becoming a wall of text, prefer it. Don't take this too far — if the honest test is "does the user know this term", a definition card is the right card.

---

## Part 2 — Card Formulation

These rules govern how each individual card is phrased. They come from Piotr Wozniak's *[Twenty Rules of Formulating Knowledge](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge)*, which is the foundational reference for spaced-repetition card design.

### Minimum-information principle (the most important rule)

Each card tests **one** piece of information. Simpler cards = faster reviews = better retention. If a card has "and" in the question, split it.

- ❌ "What are the three main React hooks and what do they do?"
- ✅ Three separate cards, each on one hook.

### Don't memorize what you don't understand

If the user can't explain the concept in plain language, cards won't help. Pause and explain or break the topic down first.

### Use cloze deletion liberally

Fill-in-the-blank turns prose into cards almost mechanically and is often the best default.

- `The capital of {{c1::France}} is {{c2::Paris}}.`
- Multiple clozes per card are fine **if they share context**.

### Combat interference — make similar items distinct

Near-identical cards confuse the learner.

- ❌ "Capital of Guyana?" + "Capital of Suriname?"
- ✅ "Capital of Guyana (the only English-speaking country in South America)?"

### Avoid sets and enumerations

Lists are memory killers.

- ❌ "List the 7 principles of X"
- ✅ Seven separate cards, or a cloze that hides one item at a time inside a sentence with context.

### Optimize wording — short, active, unambiguous

- ❌ "In the context of programming, considering the various paradigms, what would you say is the main characteristic that defines the functional approach?"
- ✅ "Functional programming's main defining characteristic?"

A card with multiple valid answers will fail review even when the learner knows the material. Add enough context to make exactly one answer correct.

### Refer to other memories — build connections

Connect new knowledge to what the user already knows. Analogies and references to prior cards/concepts strengthen retention.

- `Like REST but with a {{c1::single endpoint}}: GraphQL.`

### Personalize and use examples

Personal context dramatically improves retention. Reference the user's projects, interests, or experiences when you know them.

- ❌ Generic: "TypeScript interface definition?"
- ✅ Personal: "TypeScript interface (like the `User` type in your project)?"

### Use imagery when the topic is visual

Geography, anatomy, architecture, diagrams, UI screenshots. If `anki-mcp` exposes a media tool (e.g., `storeMediaFile`), attach images after the user provides or approves a source.

### Pick the right card type

- **Basic (front/back)** — definitions, single facts, focused why/how prompts.
- **Reverse / bidirectional** — when both directions are useful (term ↔ definition, foreign word ↔ translation). Skip the reverse when the back is a long explanation; the reverse becomes useless.
- **Cloze deletion** — facts embedded in a sentence, multi-part facts that share context, formulas/code with a missing piece. Reach for cloze before basic Q/A when the fact lives naturally inside a sentence.
- **Multiple choice** — sparingly. Useful for genuinely confusable items ("which is *not* a side effect of X?"). Bad as a default: tests recognition, not recall, and good distractors are hard to write.
- **Image occlusion** — for visual material when supported.

---

## Part 3 — Draft → Review → Approve → Write

Present the draft set as a **numbered list** the user can edit by reference. Group by the layers from Part 1 §2 so structure is visible:

```
**Core vocabulary**
1. [cloze] A {{c1::B-tree}} is a self-balancing tree optimized for ordered access.
2. [basic] Q: What does MVCC stand for? — A: Multi-Version Concurrency Control

**Mechanisms**
3. [basic] Q: Why does Postgres use MVCC instead of locking for reads?
   A: Readers see a snapshot rather than blocking on writers, so reads never wait for writes.
…
```

For each card show: card type, front, back (or full cloze text), and any tags. Keep it scannable.

Then ask: *"Want me to add these as-is, edit any first, or generate more in a particular area?"* Iterate until the user approves. **Only then** call `anki-mcp` `addNote` for each card. Apply the deck and tags from §1. Confirm completion with a count and the deck name.

---

## Pre-flight checklist

Run through this before showing cards to the user:

- [ ] Prerequisites covered before advanced cards?
- [ ] Bloom mix matches the user's stated purpose?
- [ ] Each card atomic (one fact, one question)?
- [ ] No two cards confusably similar without distinguishing context?
- [ ] Cloze used where the fact lives inside a sentence?
- [ ] Reverse cards only where the back is short and reverse direction is genuinely useful?
- [ ] Every card phrased so exactly one answer is correct?
- [ ] No "and"-style compound questions slipped through?

Fix any issues before presenting — don't make the user catch your bugs.
