# Excalidraw Plugin

Create hand-drawn style diagrams with Excalidraw directly from Claude Code, powered by the [Excalidraw MCP server](https://github.com/excalidraw/excalidraw-mcp).

## Features

- Render interactive diagrams that stream in element-by-element with draw-on animations
- Supports flowcharts, sequence diagrams, architecture diagrams, mind maps, timelines, and more
- Export diagrams to excalidraw.com for sharing or further editing

## Installation

```bash
cc --plugin-dir /path/to/plugins/excalidraw
```

Or add to your project's `.claude-plugin/` directory.

## Setup

No API keys or local installation needed. The plugin connects to the hosted MCP server at `https://mcp.excalidraw.com`. An internet connection is required.

Verify the server is connected after enabling the plugin:

```
/mcp
```

You should see `excalidraw` listed.

## Usage

Ask Claude to draw anything:

- "Draw a flowchart for a user login flow"
- "Create a sequence diagram for the payment service"
- "Visualize the microservices architecture"
- "Make a mind map of React hooks"
- "Show this as a diagram"

After rendering, ask Claude to "export to Excalidraw" to get a shareable link.

## MCP Tools

| Tool | Purpose |
|---|---|
| `read_me` | Returns element format reference — called automatically before every diagram |
| `create_view` | Renders the diagram from Excalidraw element JSON |
| `export_to_excalidraw` | Uploads diagram to excalidraw.com, returns shareable URL |
