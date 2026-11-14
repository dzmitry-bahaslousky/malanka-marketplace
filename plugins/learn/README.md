# learn

Skills for learning and understanding topics.

## Skills

### explain

Explains a concept or a whole topic in simple language without losing depth. It picks one of two forms:

- **Chat answer** (default): a structured explanation of one idea, built up in small steps: what it is in plain words, the problem it solves, what you need to know first, how it works step by step on one small example, and one thing to be careful about. It introduces few new terms and covers less rather than packing more in.
- **Page**: a published explainer page with plenty of illustrations, for big topics or when you ask for one.

Both forms:

- Accept notes, pasted text, a vault note, a doc, a transcript, or just a name
- Start from what you already know and explain the exact part you are stuck on
- Write in the language you wrote in

The page also:

- Moves from the high-level idea down to why it works this way
- Links official documentation and primary sources for key facts and historical events
- Adds a few "predict first" questions with hidden answers
- Updates the same page when you ask follow-ups

## Usage

```
/learn:explain [concept, topic, pasted material, or file path]
```

It also triggers on requests like "explain X", "I don't get X", "объясни X" (chat answer), and "make an explainer of X", "deep dive into X", "разбери тему X" (page). After a chat answer you can ask for "simpler", "deeper", "another example", or the full page.

## Installation

```bash
cc --plugin-dir /path/to/plugins/learn
```

Or add to your marketplace and install with `/plugin install learn@your-marketplace`.
