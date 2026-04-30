# Anki Plugin

Bridges Claude Code to [Anki](https://apps.ankiweb.net/) via the [`@ankimcp/anki-mcp-server`](https://www.npmjs.com/package/@ankimcp/anki-mcp-server) MCP server, letting Claude create decks, add cards, search your collection, and more.

## Prerequisites

1. **Anki desktop** installed and running — https://apps.ankiweb.net/
2. **AnkiConnect add-on** installed in Anki (code `2055492159`) — https://ankiweb.net/shared/info/2055492159
   - In Anki: `Tools → Add-ons → Get Add-ons…` → paste `2055492159` → restart Anki
   - AnkiConnect exposes an HTTP API on `http://localhost:8765` that this plugin talks to
3. **Node.js** (for `npx`) — the MCP server is fetched on demand via `npx -y @ankimcp/anki-mcp-server`

Anki must be running whenever you use this plugin.

## Installation

From the `malanka-marketplace`:

```
/plugin install anki@malanka-marketplace
```

## Configuration

The MCP server reads `ANKI_CONNECT_URL` from its environment (defaults to `http://localhost:8765`). Override it in `.mcp.json` only if you've changed AnkiConnect's port or host.

## Verifying

After install, run `/mcp` in Claude Code and confirm `anki-mcp` is connected. Then ask Claude something like:

- "List my Anki decks"
- "Add a card to the 'Spanish' deck: front 'hola', back 'hello'"
- "Show me cards due for review today"

## Troubleshooting

- **Connection refused**: Anki isn't running, or AnkiConnect isn't installed.
- **CORS / 403**: AnkiConnect's `webCorsOriginList` may need updating in its config (Anki → Add-ons → AnkiConnect → Config).
