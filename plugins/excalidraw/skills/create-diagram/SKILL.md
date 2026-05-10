---
name: Create Excalidraw Diagram
description: This skill should be used when the user asks to "draw a diagram", "create a diagram", "visualize this", "make a flowchart", "draw an architecture diagram", "sketch a sequence diagram", "show this as a diagram", "diagram this", "illustrate this", or any request to produce a visual representation of concepts, systems, flows, or relationships. Also triggers when the user asks to "export to Excalidraw" or "open in Excalidraw".
version: 0.1.0
user-invocable: false
---

# Create Excalidraw Diagram

Use the Excalidraw MCP server to render interactive hand-drawn style diagrams directly inside Claude Code. Diagrams stream in element-by-element with draw-on animations.

## Required Workflow

**Always follow this two-step sequence — never skip step 1:**

1. Call `read_me` to retrieve the Excalidraw element format reference and color palettes
2. Call `create_view` with a JSON array of elements constructed from that reference

Skipping `read_me` produces invalid element JSON and a broken diagram. The reference is small and fast to fetch.

## Diagram Types

Choose element compositions based on what the user wants to visualize:

| Diagram type | Core elements to use |
|---|---|
| Flowchart | `rectangle` / `diamond` nodes + `arrow` connectors |
| Sequence diagram | `rectangle` swimlanes + `arrow` messages + `text` labels |
| Architecture diagram | `rectangle` / `ellipse` components + `arrow` connections + `text` labels |
| Mind map | `ellipse` center + `arrow` branches + `text` nodes |
| Timeline | `line` backbone + `rectangle` events + `text` labels |
| ER / class diagram | `rectangle` entities + `line` relationships + `text` labels |

## Element Construction Rules

After calling `read_me`, apply these rules when building elements:

- Every element needs `id` (unique string), `type`, `x`, `y`, `width`, `height`
- Use `strokeColor` and `backgroundColor` from the palette returned by `read_me`; if `read_me` returns no palette, fall back to the color defaults in `references/element-types.md`
- Arrows use `startBinding` / `endBinding` referencing other element `id`s for proper anchoring
- Text elements set `text` and `fontSize`; standalone labels use `type: "text"`
- Group related elements with the same `groupIds` array entry
- Lay out left-to-right or top-to-bottom; leave ~60px gaps between elements

## Handling Large Diagrams

For complex requests with many nodes (>15 elements), prioritize clarity over completeness:

- Render the key structural elements first
- Use consistent spacing (e.g. 200px horizontal, 150px vertical increments)
- Label arrows with short action verbs ("calls", "returns", "triggers")
- If the user wants more detail, add elements in a follow-up `create_view` call

## Exporting

After rendering, offer to export via `export_to_excalidraw` which uploads the diagram to excalidraw.com and returns a shareable URL. Call this only when the user explicitly requests a shareable link or wants to edit the diagram in the full Excalidraw editor.

## Additional Resources

Read **`references/element-types.md`** when:
- Building arrows with `startBinding` / `endBinding` anchor properties
- Attaching text labels to shapes via `containerId` / `boundElements`
- Needing the full base property list to construct a valid element from scratch
- Falling back to default color palettes when `read_me` returns none
