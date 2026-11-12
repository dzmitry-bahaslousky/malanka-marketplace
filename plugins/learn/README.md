# learn

Skills for learning and understanding topics.

## Skills

### explain-topic

Turns a topic and any material you give it into a published explainer page: simple language, deep content, plenty of illustrations.

- Accepts notes, pasted text, a vault note, a doc, a transcript, or just a topic name
- Moves from the high-level idea down to why it works this way
- Writes in the language you wrote in
- Links official documentation and primary sources for key facts and historical events
- Starts from what you already know and builds the page around your question
- Adds a few "predict first" questions with hidden answers
- Updates the same page when you ask follow-ups

## Usage

```
/learn:explain-topic [topic, pasted material, or file path]
```

It also triggers on requests like "make an explainer of X", "deep dive into X", or "разбери тему X". For a quick "explain X" in the middle of other work, Claude answers in chat and offers the page.

## Installation

```bash
cc --plugin-dir /path/to/plugins/learn
```

Or add to your marketplace and install with `/plugin install learn@your-marketplace`.
