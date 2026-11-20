# Google Plugin

Google tools for Claude Code:

- **Google Chat**, through the [googlechat-py](https://github.com/dzmitry-bahaslousky/googlechat-py) MCP server.
- **NotebookLM**, through the `notebooklm` skill and the [notebooklm-py](https://github.com/teng-lin/notebooklm-py) command-line tool.

> ⚠️ googlechat-py uses Google Chat's private web API, the one chat.google.com itself uses. It is not official and can break whenever Google changes it. Check that your organization allows this before relying on it.

## Prerequisites

- [`uv`](https://docs.astral.sh/uv/): the MCP server is fetched and run on demand with `uvx`
- Google Chrome: used only to sign in

## Installation

```
/plugin install google@malanka-marketplace
```

## Setup

Run `/google:chat-setup`, or ask Claude to set up Google Chat. It checks that `uv` and Chrome are installed, offers to install `uv` if it is missing, signs you in, and lists a few chats to confirm it works.

## Sign in

Ask Claude to sign in to Google Chat. It calls the server's `sign_in` tool, Chrome opens chat.google.com, you sign in as usual, and the window closes by itself. Do the same when the session expires.

The login is saved in `~/.config/googlechat-mcp`, shared with the `gchat` and `googlechat-mcp` command-line tools if you also installed them.

## Google Chat

By default Claude can only read: list chats, read threads, search messages, list members and files.

To also let Claude send, reply, react, and edit or delete your own messages, turn on **Google Chat write tools** in the plugin's settings (`/plugin` → google → configure), then restart Claude Code.

> ⚠️ Messages Claude reads are written by other people. A message can try to trick Claude into posting or deleting something as you. With write tools on, keep Claude Code's approval prompts on for them.

## Verifying

Run `/mcp` and check that `googlechat` is connected. Then ask Claude something like:

- "List my 10 most recent Google Chat spaces"
- "Search Google Chat for 'release'"

## NotebookLM

The `notebooklm` skill lets Claude create notebooks, add sources (links, YouTube, PDFs, text), chat with them, and generate audio overviews, quizzes, flashcards, reports and more. It runs the `notebooklm` command-line tool.

> ⚠️ notebooklm-py uses NotebookLM's private web API. Like googlechat-py, it is not official and can break whenever Google changes it.

Setup, once:

```bash
pip install notebooklm-py
notebooklm login    # opens a browser to sign in to Google
notebooklm list     # checks that sign-in worked
```

The login is saved in `~/.notebooklm/`. It holds live Google session cookies, so keep that folder out of git. When the session expires, run `notebooklm login` again.

Then ask Claude, for example:

- "Create a notebook called 'Q3 Research' and add https://example.com/paper"
- "Generate an audio overview of my research notebook"
- "Make flashcards from my notes notebook"

## Updating googlechat-py

`.mcp.json` pins googlechat-py to a release tag, so users get a new server version only with a new plugin version. Every Monday the `Update googlechat-py` workflow checks for a newer release (pre-releases count, drafts don't) and opens a pull request that moves the pin and bumps `version` in `plugin.json`. To update by hand, run `node .github/scripts/update-googlechat-py.js`.
