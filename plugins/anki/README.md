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

## Skills

### `/anki:make-cards`

Give it a topic, page, artifact, file, or pasted text and it drafts the 10-15 questions most worth remembering (more if you ask to go deeper). It reads your collection first, so it skips what you already have, picks the deck and tags that fit, and suggests a new deck only when nothing fits. Answers are plain and written so you understand the idea, and most come with an SVG illustration.

You review the draft on a preview page before anything is written to Anki.

- "make anki cards for Kubernetes networking"
- "turn this page into qqs: ~/notes/chargebacks.md"
- "go deeper on Istio traffic management"

## Card suggestions

Like the Insight blocks of the explanatory output style, the plugin adds a `SessionStart` hook (`hooks/suggest-cards.md`) that asks Claude to watch the conversation for things worth remembering: a mechanism you asked about, a misconception, a gotcha, a tradeoff, a new concept. When one comes up, Claude ends its response with a few suggested card questions:

```
◆ Anki ────────────────────────────────────────
- **Kafka**: Why does Kafka guarantee order only within a partition?
→ /anki:make-cards to turn these into cards
─────────────────────────────────────────────────
```

It skips project-specific details, trivia, and routine work, so most responses have no block. Nothing is written to Anki: run `/anki:make-cards` (or just say "make cards for these") and the skill drafts cards from the suggestions and the discussion around them.

To tune what gets suggested, edit `hooks/suggest-cards.md`. To turn suggestions off, set the plugin's **Suggest Anki cards** option (`suggest_cards`) to `false` in its settings under `/plugin`; the skill and MCP tools keep working. The change applies from the next session.

## Troubleshooting

- **Connection refused**: Anki isn't running, or AnkiConnect isn't installed.
- **CORS / 403**: AnkiConnect's `webCorsOriginList` may need updating in its config (Anki → Add-ons → AnkiConnect → Config).
