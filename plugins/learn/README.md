# learn

Generate structured learning paths for any topic — with prerequisites, resources, exercises, and self-check questions — and get autonomous tutoring to work through them.

## What it does

- **`/learn:learn <topic>`** — One-shot curriculum generator. Produces a four-stage path (Prerequisites → Foundations → Intermediate → Advanced) where each stage has concepts, recommended resources, hands-on exercises, and self-check questions.
- **`/learn:summarize-course <transcript>`** — Turns a pasted video-course transcript, subtitles, or lesson notes on **any subject** (programming, cooking, history, a language, music, philosophy, anything) into a structured Markdown summary (Overview, Key Concepts, Examples & Demos, Takeaways, Action Items). Prints to the console.
- **`learning-coach` agent** — Autonomous tutor that triggers when you ask to be quizzed, when you express confusion while studying, immediately after a `/learn` path is generated, or when you ask "what should I learn next".

## Usage

### Generate a learning path

```
/learn:learn Rust ownership
/learn:learn Kubernetes networking — to debug a production issue
/learn:learn conversational Spanish — for a trip in two months
/learn:learn category theory
```

The skill handles technical topics, languages, humanities — anything. If the topic is broad, the output will narrow it and say so.

### Summarize a video-course transcript

```
/learn:summarize-course <paste the transcript / subtitles / notes here>
```

The skill auto-detects the course and topic from the transcript when possible, and asks a single clarifying question only if it's genuinely ambiguous. Output is printed to the console — nothing is written to disk.

### Get coaching

The `learning-coach` agent triggers automatically when the conversation is in a learning context. Examples of phrases that trigger it:

- "quiz me on binary search trees"
- "explain monads simply"
- "am I ready to move on from pointers?"
- "wait, are lifetimes and borrows the same thing?" (confusion detected)
- "what should I learn next?"

## Installation

This plugin is part of the `malanka-marketplace`. Install with:

```
/plugin install learn@malanka-marketplace
```

Or, for local development:

```
cc --plugin-dir /Users/jcs/VSCode/malanka-marketpalce/plugins/learn
```

## Design notes

- **Stateless.** The plugin does not save progress between sessions. Each `/learn` invocation is a fresh generation.
- **Anti-hallucination on resources.** The skill is instructed to use WebSearch for fast-moving topics and to describe resource *categories* when it cannot verify a specific title exists. You should still sanity-check recommended resources.
- **Agent restraint.** The `learning-coach` agent is scoped to only trigger in learning contexts — it will not interrupt debugging, coding, or unrelated work.

## Components

```
learn/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── learn/
│   │   └── SKILL.md                 # /learn:learn curriculum generator
│   └── summarize-course/
│       └── SKILL.md                 # /learn:summarize-course video transcript summarizer
├── agents/
│   └── learning-coach.md            # autonomous tutor
└── README.md
```
