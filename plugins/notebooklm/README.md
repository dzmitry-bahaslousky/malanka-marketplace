# NotebookLM Plugin for Claude Code

Interact with [Google NotebookLM](https://notebooklm.google.com) directly from Claude Code. Create notebooks, add sources, generate audio overviews, quizzes, flashcards, and chat with your research — all from the terminal.

## Features

- **Notebook management** — Create, list, rename, and delete notebooks
- **Source management** — Add URLs, PDFs, YouTube videos, Google Drive files, and plain text
- **Artifact generation** — Audio overviews (podcast), quizzes, flashcards, mind maps, reports, slide decks, infographics
- **Chat with citations** — Ask questions grounded in your notebook sources with source references

## Prerequisites

- Python 3.10+
- `notebooklm-py` library
- Playwright (for one-time auth setup)
- A Google account with access to NotebookLM

## Installation

```bash
pip install notebooklm-py
playwright install chromium
```

## Authentication Setup

The plugin uses your real Google session cookies captured via Playwright. Run this once:

```bash
# Ask Claude: "Set up NotebookLM" or "Configure NotebookLM auth"
```

Claude will guide you through:
1. Opening a browser window
2. Logging in to Google / NotebookLM
3. Saving credentials to `~/.notebooklm/auth.json`

> **Security note:** `~/.notebooklm/auth.json` contains live Google session cookies. Add `~/.notebooklm/` to your global `.gitignore`.

## Usage

Just talk to Claude naturally:

```
"Add this article to my NotebookLM: https://example.com/paper"
"Create a new notebook called 'Q3 Research'"
"Generate an audio overview of my research notebook"
"Make flashcards from my notes notebook"
"Ask my notebook what the main findings are about climate change"
"List all my notebooks"
```

## Project Default Notebook

To avoid specifying a notebook every time, create `.claude/notebooklm.local.md` in your project:

```markdown
---
default_notebook_id: "your-notebook-id-here"
default_notebook_name: "My Research"
auth_path: "~/.notebooklm/auth.json"
---
```

Or ask Claude: "Set my default notebook to 'My Research'"

## Plugin Architecture

```
notebooklm/
├── .claude-plugin/plugin.json      # Manifest
├── agents/
│   └── notebooklm-assistant.md    # Main agent (all operations)
└── skills/
    ├── setup/                      # Auth + installation guidance
    ├── notebooks/                  # Notebook CRUD
    ├── sources/                    # Source management
    ├── artifacts/                  # Content generation
    └── chat/                       # Q&A with citations
```

The `notebooklm-assistant` agent handles everything — it reads skills contextually based on which operation is needed.

## Credential Refresh

Google session cookies expire periodically. If you see an authentication error:

```
"Re-run NotebookLM auth setup"
```

or ask Claude: "Refresh my NotebookLM credentials"

## Important Caveats

- Uses undocumented Google APIs — may break if Google changes their internal API
- Not suitable for production/automated systems; designed for personal use
- Based on [notebooklm-py](https://github.com/teng-lin/notebooklm-py) by teng-lin
