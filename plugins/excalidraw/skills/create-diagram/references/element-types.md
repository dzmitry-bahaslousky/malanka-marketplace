# Excalidraw Element Types Reference

This reference supplements what `read_me` returns. Load it when constructing complex elements or debugging invalid JSON.

## Base Element Properties (all types)

```json
{
  "id": "unique-string",
  "type": "rectangle|ellipse|diamond|arrow|line|text|freedraw|image",
  "x": 100,
  "y": 100,
  "width": 160,
  "height": 60,
  "angle": 0,
  "strokeColor": "#1e1e1e",
  "backgroundColor": "transparent",
  "fillStyle": "solid|hachure|cross-hatch|dots|dashed|zigzag",
  "strokeWidth": 2,
  "strokeStyle": "solid|dashed|dotted",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "frameId": null,
  "roundness": null,
  "seed": 12345,
  "version": 1,
  "versionNonce": 0,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1,
  "link": null,
  "locked": false
}
```

## Shape Elements

### rectangle / ellipse / diamond

All three share the base properties above. Shapes can contain bound text by setting `boundElements`:

```json
{
  "type": "rectangle",
  "boundElements": [{"type": "text", "id": "label-id"}]
}
```

The matching text element uses `containerId`:

```json
{
  "type": "text",
  "containerId": "shape-id",
  "text": "Label",
  "fontSize": 16,
  "fontFamily": 1,
  "textAlign": "center",
  "verticalAlign": "middle",
  "width": 160,
  "height": 60
}
```

## Arrow / Line Elements

```json
{
  "type": "arrow",
  "points": [[0, 0], [200, 0]],
  "startBinding": {
    "elementId": "source-id",
    "focus": 0,
    "gap": 8
  },
  "endBinding": {
    "elementId": "target-id",
    "focus": 0,
    "gap": 8
  },
  "startArrowhead": null,
  "endArrowhead": "arrow",
  "elbowed": false
}
```

- `points` are relative to the element's `x`/`y` origin
- `focus` ranges -1 to 1 (0 = center of target edge)
- `gap` is pixels of space before touching the target shape
- Set `startArrowhead` / `endArrowhead` to `"arrow"`, `"bar"`, `"circle"`, `"triangle"`, or `null`

## Text Element (standalone)

```json
{
  "type": "text",
  "text": "My Label",
  "fontSize": 20,
  "fontFamily": 1,
  "textAlign": "left",
  "verticalAlign": "top",
  "containerId": null,
  "originalText": "My Label",
  "lineHeight": 1.25
}
```

`fontFamily`: 1 = Virgil (handwritten), 2 = Helvetica, 3 = Cascadia

## Common Layout Patterns

### Horizontal flow (left → right)

Start at x=100, increment x by `(width + gap)`. Keep y constant per row.

```
x=100  x=360  x=620
[A] -> [B] -> [C]
```

### Vertical flow (top → bottom)

Start at y=100, increment y by `(height + gap)`. Keep x constant per column.

### Grid layout

Use a base `x0`, `y0` and calculate positions as `x0 + col * (width + gapX)`, `y0 + row * (height + gapY)`.

## Color Palettes

Always prefer colors from the `read_me` response. Common defaults:

| Purpose | strokeColor | backgroundColor |
|---|---|---|
| Default shape | `#1e1e1e` | `transparent` |
| Highlighted box | `#1e1e1e` | `#a5d8ff` |
| Warning / orange | `#e67700` | `#fff3bf` |
| Success / green | `#2f9e44` | `#d3f9d8` |
| Muted / gray | `#868e96` | `#f1f3f5` |

## Minimal Valid Element Array

```json
[
  {
    "id": "box1",
    "type": "rectangle",
    "x": 100, "y": 100, "width": 160, "height": 60,
    "angle": 0,
    "strokeColor": "#1e1e1e", "backgroundColor": "transparent",
    "fillStyle": "solid", "strokeWidth": 2, "strokeStyle": "solid",
    "roughness": 1, "opacity": 100,
    "groupIds": [], "frameId": null, "roundness": null,
    "seed": 1, "version": 1, "versionNonce": 0,
    "isDeleted": false, "boundElements": null,
    "updated": 1, "link": null, "locked": false
  }
]
```

Pass this array JSON-stringified as the `elements` argument to `create_view`.
