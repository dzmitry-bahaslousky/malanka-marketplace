---
name: chat-setup
description: Set up Google Chat for Claude Code — install what the googlechat MCP server needs, sign in, and check it works. Use when the user wants to set up, connect, or sign in to Google Chat, when the googlechat MCP server is not connected or its tools are missing, or when a Google Chat tool reports "Not signed in" or "Session expired".
---

# Google Chat setup

This plugin's `googlechat` MCP server (from [googlechat-py](https://github.com/dzmitry-bahaslousky/googlechat-py)) is started with `uvx`, which downloads and runs it on demand. It signs in with the user's own Google session through Google Chrome. So the user needs two things installed, `uv` and Chrome, and must sign in once.

Work through the steps in order and stop at the first one that is already fine for the rest of the chain: if the tools are there, go straight to step 3.

## 1. Is the server running?

Look for tools named `mcp__plugin_google_googlechat__*` (for example `mcp__plugin_google_googlechat__list_spaces`).

- **Present** → go to step 3.
- **Missing** → the server failed to start. Go to step 2.

## 2. Install what is missing

Check both, then fix what is missing:

```bash
uv --version
```

| Platform | Chrome check |
|---|---|
| macOS | `ls -d "/Applications/Google Chrome.app" ~/Applications/"Google Chrome.app" 2>/dev/null` |
| Linux | `command -v google-chrome google-chrome-stable` |
| Windows | `Test-Path "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"` |

**`uv` missing** — ask before installing, then use one of:

- macOS with Homebrew: `brew install uv`
- macOS or Linux: `curl -LsSf https://astral.sh/uv/install.sh | sh`
- Windows: `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`

The installer may put `uv` in a folder that is not yet on `PATH` (it prints which). Claude Code must be able to find `uvx` when it starts the server, so tell the user to open a new terminal or restart Claude Code if `uvx --version` fails there.

**Chrome missing** — do not install it yourself. Tell the user to install Google Chrome from https://www.google.com/chrome/. Chromium or other browsers do not work: sign-in uses the installed Google Chrome.

**Then reconnect.** Ask the user to run `/mcp` and reconnect `plugin:google:googlechat`, or restart Claude Code. The first start downloads and builds the server, so it can take a minute; if it times out, reconnect once more (the second start uses the cache).

If both are installed and the server still fails, ask the user to open `/mcp`, select `plugin:google:googlechat`, and share the error it shows.

## 3. Sign in

Call `mcp__plugin_google_googlechat__sign_in`. Before calling it, tell the user:

- If a saved session exists, it refreshes silently and no window opens.
- Otherwise a Chrome window opens on chat.google.com. They sign in as usual, and the window closes by itself. The tool waits up to 10 minutes.

The login is saved in `~/.config/googlechat-mcp` and is shared with the `gchat` and `googlechat-mcp` command-line tools.

## 4. Check it works

Call `mcp__plugin_google_googlechat__list_spaces` with `page_size` 5 and show the user the chat names. If it works, setup is done.

## 5. Tell the user about write tools

By default Claude can only read: list chats, read threads, search, list members and files. Look for `mcp__plugin_google_googlechat__send_message`:

- **Missing** → write tools are off. To let Claude send, reply, react, and edit or delete their own messages, the user turns on **Google Chat write tools** in `/plugin` → google → configure, then restarts Claude Code.
- **Present** → write tools are on. Warn once: messages Claude reads are written by other people and can try to trick Claude into posting or deleting as the user, so keep approval prompts on for these tools.

## Troubleshooting

| Problem | Fix |
|---|---|
| `Not signed in` or `Session expired` | Call `sign_in` again (step 3) |
| `Chrome could not be started or controlled` | Chrome is missing, or another sign-in window is still open. Close it and retry |
| Sign-in window closed or timed out | Call `sign_in` again and finish signing in within 10 minutes |
| Errors on one feature only, others work | Google probably changed its private API. Report it at https://github.com/dzmitry-bahaslousky/googlechat-py/issues |
| User wants to sign out | Ask first, then delete the saved login: `rm -rf ~/.config/googlechat-mcp/cookies.json ~/.config/googlechat-mcp/browser-profile` |
