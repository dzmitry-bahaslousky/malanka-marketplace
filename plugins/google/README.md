# Google Plugin

Google tools for Claude Code. It starts with Google Chat, through the [googlechat-py](https://github.com/dzmitry-bahaslousky/googlechat-py) MCP server.

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

## Updating googlechat-py

`.mcp.json` pins googlechat-py to one commit, so users get a new server version only with a new plugin version. To update, change the commit in `.mcp.json` and bump `version` in `plugin.json`.
