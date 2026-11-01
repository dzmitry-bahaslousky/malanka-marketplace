# Illustrations for answers

A card's picture carries the idea, so the reader should get it in about three seconds. Draw the one thing that makes the answer click, not a summary of the topic.

## Pick the shape from the idea

| The idea is about | Draw |
|---|---|
| Steps or a request moving through a system | Left-to-right boxes with arrows |
| State changing over time | Before → after panels |
| Why one option beats another | Two side-by-side mini diagrams |
| What contains what | Nested boxes |
| Who talks to whom | Boxes plus labelled arrows |
| Something failing | The normal path, with the broken step in red |

Use at most about six boxes. Short labels only, because the answer already has the sentences. If you need a legend, the drawing is too complicated.

## Rules that keep it working in Anki

The file is loaded through `<img>`, on desktop and on phones, so:

- Keep everything inside the file: no `<script>`, `<foreignObject>`, `<image>`, external fonts or external CSS. They are blocked or ignored inside `<img>`.
- Set `viewBox` and a `width` of at most 576. Phones scale the picture down, so text smaller than 12px becomes unreadable.
- Paint a full background rect. It keeps the drawing legible in Anki's night mode.
- Escape `&` and `<` in labels as `&amp;` and `&lt;`.
- Budget about 7px per character at 13px (Menlo: 7.5px). Make a box at least that wide plus 16px of padding, or the text spills out.

## Template

Copy this style so new pictures match the existing cards. Colors mean something: blue is the part to look at, red is what breaks or disappears, grey is everything else.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 576 112" width="576" height="112"><style>
text{font-family:-apple-system,Helvetica,Arial,sans-serif;font-size:13px;fill:#12303d}
.m{font-family:Menlo,monospace;font-size:12px}.l{font-size:12px;fill:#4a6572}.ct{text-anchor:middle}
.n{fill:#edf2f3;stroke:#4a6572;stroke-width:1.2}.n.key{fill:#d2e8ef;stroke:#0a6c8c}
.n.gone{fill:#f6dfd9;stroke:#bf3f28;stroke-dasharray:4 3}
.edge{fill:none;stroke:#4a6572;stroke-width:1.3;marker-end:url(#ar)}
.edge.key{stroke:#0a6c8c;stroke-width:2;marker-end:url(#arOn)}
.edge.no{stroke:#bf3f28;stroke-dasharray:4 3;marker-end:url(#arNo)}
</style><defs>
<marker id="ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><polygon fill="#4a6572" points="0,0 8,4 0,8"/></marker>
<marker id="arOn" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><polygon fill="#0a6c8c" points="0,0 8,4 0,8"/></marker>
<marker id="arNo" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><polygon fill="#bf3f28" points="0,0 8,4 0,8"/></marker>
</defs><rect x="-8" y="-8" width="576" height="112" fill="#f8fbfb"/>
  <text class="l" x="4" y="14">Before</text>
  <rect class="n" x="4" y="24" width="150" height="40"/><text class="ct" x="79" y="49">grey box</text>
  <path class="edge key" d="M160 44H204"/><text class="l ct" x="182" y="36">step</text>
  <text class="l" x="210" y="14">After</text>
  <rect class="n key" x="210" y="24" width="150" height="40"/><text class="ct" x="285" y="49">the point</text>
</svg>
```

Adjust the `viewBox`, `height` and background rect together when the drawing needs more room. With the `-8` origin, the visible bottom edge is `height - 8`, so set `height` to the lowest element's y plus 16 or the bottom gets cut off.

## Check it by looking at it

Text overflow and overlapping arrows only show up once rendered. On macOS, turn each file into a PNG and read that image:

```bash
qlmanage -t -s 1000 -o <png-dir> <file>.svg
```

The PNG is a square with the drawing at the top and white space below, so that white space is normal. A drawing whose bottom ends abruptly against the background edge is clipped.

Check two things: that it's readable, and that it shows what the answer says. Rendering catches layout errors, but only comparing the picture with the answer catches a drawing that's tidy and wrong.
