---
name: learn
description: Generate a structured learning path for any topic the user wants to learn. Triggers when the user runs /learn:learn, asks for a curriculum, study plan, roadmap, learning path, or says "how should I learn X", "teach me X", "where do I start with X" on any subject (technical or non-technical). Produces prerequisites, foundations, intermediate, and advanced stages — each with concepts, recommended resources, hands-on exercises, and self-check questions.
argument-hint: "<topic to learn> [goal: why you want to learn it]"
allowed-tools:
  - WebSearch
  - WebFetch
version: 0.1.0
---

# Learning Path Generator

## Think Before Generating

Don't assume. Don't invent. Surface uncertainty.

Before producing output:

- **Scope the topic.** If the topic is broad ("machine learning", "history"), narrow it in the output header: e.g., "machine learning → practical supervised ML for tabular data" — and say explicitly that you narrowed it. Record the narrowing decision in the Assumptions line of the output. If it's genuinely ambiguous and you cannot narrow it sensibly, ask the user one clarifying question before generating.
- **Don't fabricate resources.** If you don't know whether a specific book, course, or paper exists, do NOT invent a title. Either: (a) use WebSearch to find real current resources, or (b) describe the kind of resource to look for ("the official language reference", "a seminal introductory textbook by a well-known author in the field") without naming a specific title you can't verify.
- **Ground fast-moving topics in a search.** If the topic involves a framework, library, API, or tooling released or substantially changed in the last 3 years, run at least one WebSearch before naming specific versions, URLs, or course titles.
- **Respect the user's goal, if stated.** If the arguments include a goal ("to pass the CKA", "out of curiosity", "to debug production"), let that goal reshape the emphasis — exam-focused paths look different from curiosity-driven ones.
- **If a stage genuinely doesn't exist for this topic, say so.** Not every topic has four meaningful stages. A narrow topic ("Python f-strings") might collapse into one stage with subsections. Don't pad.

---

Generate a structured learning path for a topic the user wants to understand. The output is a one-shot, self-contained curriculum — not a conversation.

## Input

The user provides:

- A **topic** (required) — anything: programming, math, ML, a language, history, a craft, a framework.
- An optional **goal** — why they want to learn it (exam, job, project, curiosity).

If no topic is provided, ask: "What topic would you like a learning path for?"

## Process

1. **Interpret the topic.** Determine if it's narrow (one concept) or broad (a whole field). Narrow as needed and flag it.
2. **Assess whether Claude's training data suffices.** For fast-moving topics (new frameworks, recent papers, current tooling), use WebSearch to ground your resource recommendations in what actually exists today. For stable topics (classical physics, C programming, medieval history), Claude's knowledge is usually enough.
3. **Construct the path.** Fill in Prerequisites → Foundations → Intermediate → Advanced. Omit a stage if it doesn't apply and say why.
4. **Populate each stage** with: Concepts, Resources, Exercises, Self-check questions.
5. **Output the full path in one response.** Do not ask follow-up questions after generating (that's the `learning-coach` agent's job).

## Output Format

Output the learning path as a single markdown document using this exact structure:

```
# Learning path: <topic>

*<One-sentence framing of what the path covers and, if narrowed, what it excludes. If a goal was given, reflect it here.>*

**Assumptions:** <Any assumptions you made, AND any narrowing decision — e.g., "Narrowed 'machine learning' to 'practical supervised ML for tabular data'. Assumes the learner is comfortable reading code but new to Rust." If none, write: *No assumptions made.*>

---

## 1. Prerequisites

*What you should be comfortable with before starting. Skip this stage if the topic genuinely has no prerequisites.*

### Concepts
- <Concept 1 — one-line description of why it matters>
- <Concept 2 — ...>

### Resources
- <Named resource OR described-category resource. If named, it must be a resource you're confident exists.>

### Exercises
- <One or two concrete things to try / build / practice>

### Self-check
- <Question you should be able to answer before moving on>
- <2-3 questions total>

---

## 2. Foundations

*The core ideas of the topic. If you only learn this stage, you'll have a working mental model.*

### Concepts
...

### Resources
...

### Exercises
...

### Self-check
...

---

## 3. Intermediate

*Building fluency. Nuances, common pitfalls, and the ideas that separate beginners from practitioners.*

<Same four subsections>

---

## 4. Advanced

*The edges of the topic. Internals, research-level questions, or expert-only tooling.*

<Same four subsections>

---

## Next steps

- <1-3 concrete suggestions for what to do after finishing the path — a capstone project, a related topic, a community to join>

## Caveats

- <Any caveats the learner should know: topic is fast-moving, resources may be outdated, prerequisites vary by goal, etc.>
- <Remove this section if there are no meaningful caveats>
```

## Guidelines

- **Order matters.** Each stage should build on the previous one. If a concept depends on another, it must appear after that other concept.
- **Be specific, not generic.** "Learn async/await" is weak. "Understand how async/await desugars into a state machine, and when that model leaks (e.g., blocking in an async context)" is useful.
- **Name real resources when you can.** Prefer well-known canonical resources: official documentation, seminal textbooks, widely-cited papers, respected courses. If you're not confident a specific resource exists, describe the category instead.
- **Exercises should be verifiable.** "Think about X" is not an exercise. "Implement a linked list and write tests for push/pop" is.
- **Self-check questions should test understanding, not recall.** "What is a monad?" is recall. "Why doesn't `List` + `fmap` give you everything `List` + `flatMap` gives you?" is understanding.
- **Keep it lean.** Two strong exercises per stage beat five weak ones. Three self-check questions is plenty.
- **Don't number concepts/resources/exercises.** Use bullets — the reader may skip around.

## Language

Detect the language of the topic and user's arguments, and write the path **content** (descriptions, bullet text, concept explanations) in that language. Keep structural headings (`## Foundations`, `### Self-check`) in English as-is.

Do not translate technical terms, proper nouns, or names of books/tools/people.

## What Makes a Good Path (Examples)

**Good:** For "Rust ownership", the Foundations stage covers move vs. copy, borrowing rules, and lifetimes *as a trio* — because understanding one in isolation is misleading.

**Good:** For "Kubernetes networking", the Prerequisites stage explicitly lists Linux namespaces and iptables — because someone who skips these will be confused by every K8s network diagram.

**Bad:** For "React", listing "Learn React hooks" as a bullet. Too vague — break into useState, useEffect, custom hooks, and the rules of hooks, each with a reason.

**Bad:** For "history of the Roman Empire", generating the path in four equal-sized stages. History topics often need a different structure (chronological, thematic); respect the shape of the topic.

## After Generating

End the output with a natural offer: mention that the `learning-coach` agent in this plugin can quiz the user on any stage, explain a concept in more depth, or suggest what to tackle after the path. Do not elaborate — just a one-sentence pointer so the user knows the next move.
