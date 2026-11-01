#!/usr/bin/env python3
"""Talk to Anki through AnkiConnect (stdlib only).

  anki.py map                  how the collection is organized
  anki.py find [--full] TERM [TERM...]  existing cards that mention the terms
  anki.py preview cards.json   validate a draft and open it as an HTML page
  anki.py add cards.json       validate a draft and write it to Anki

cards.json:
  {"deck": "Software Engineering::Docker",
   "cards": [{"front": "...", "back": "<p>...</p>",
              "tags": ["Docker::Registry"], "image": "harbor-card-01.svg"}]}

`image` is optional and relative to cards.json. Its file name becomes the
media file name in Anki, so it has to be unique across the collection.
"""
import base64
import collections
import datetime
import html
import json
import os
import pathlib
import re
import statistics
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

URL = os.environ.get("ANKI_CONNECT_URL", "http://localhost:8765")
MODEL = "Basic"
MAX_FRONT_CHARS = 80
FIND_LIMIT = 100
MAX_SVG_WIDTH = 600


def anki(action, **params):
    body = json.dumps({"action": action, "version": 6, "params": params}).encode()
    try:
        with urllib.request.urlopen(urllib.request.Request(URL, body)) as response:
            reply = json.load(response)
    except urllib.error.URLError:
        sys.exit(f"Cannot reach AnkiConnect at {URL}. Is Anki running with the add-on installed?")
    if reply["error"]:
        raise RuntimeError(f"{action}: {reply['error']}")
    return reply["result"]


def plain(markup):
    return html.unescape(re.sub(r"<[^>]+>", " ", markup)).split()


def plain_text(markup):
    return " ".join(plain(markup))


def notes_for(query):
    ids = anki("findNotes", query=query)
    return anki("notesInfo", notes=ids) if ids else []


def cmd_map():
    decks = sorted(anki("deckNames"))
    notes = notes_for("deck:*")
    tags_of = {note["noteId"]: note["tags"] for note in notes}

    print("DECKS  (cards incl. subdecks | tag roots used | % notes with several tags)")
    for deck in decks:
        cards = len(anki("findCards", query=f'deck:"{deck}"'))
        ids = anki("findNotes", query=f'deck:"{deck}"')
        roots = collections.Counter(t.split("::")[0] for i in ids for t in tags_of.get(i, []))
        chained = sum(len(tags_of.get(i, [])) > 1 for i in ids)
        share = f"{100 * chained // len(ids)}%" if ids else "-"
        top = ", ".join(root for root, _ in roots.most_common(4))
        print(f"{cards:6}  {deck}  | {top or '-'} | {share}")

    literal = collections.Counter(t for note in notes for t in note["tags"])
    print("\nTAGS  (notes carrying exactly this tag; 'empty' = exists but unused)")
    for tag in sorted(anki("getTags")):
        print(f"{literal[tag] or 'empty':>6}  {tag}")

    recent = sorted(notes, key=lambda n: -n["noteId"])[:50]
    if recent:
        backs = [next(iter(reversed(n["fields"].values())))["value"] for n in recent]
        russian = sum(bool(re.search("[а-яА-Я]{3}", " ".join(f["value"] for f in n["fields"].values())))
                      for n in recent)
        print(f"\nLAST {len(recent)} NOTES  newest "
              f"{datetime.date.fromtimestamp(recent[0]['noteId'] / 1000)} | "
              f"{russian} in Russian | median answer {int(statistics.median(len(plain_text(b)) for b in backs))} chars | "
              f"{sum('<img' in b for b in backs)} with images")


def cmd_find(terms):
    full = "--full" in terms
    terms = [term for term in terms if term != "--full"]
    clauses = [clause for term in terms for clause in (f'"{term}"', f'"tag:*{term}*"')]
    found = notes_for(" or ".join(clauses))
    print(f"{len(found)} notes match {terms} in any field or tag")
    for note in found[:FIND_LIMIT]:
        front, *rest = [plain_text(field["value"]) for field in note["fields"].values()]
        answer = " ".join(rest)
        print(f"- {front[:100]}  [{' '.join(note['tags'])}]\n    {answer if full else answer[:110]}")
    if len(found) > FIND_LIMIT:
        print(f"... and {len(found) - FIND_LIMIT} more; use more specific terms to see them")


def svg_problems(path):
    try:
        root = ET.parse(path).getroot()
    except (ET.ParseError, OSError) as error:
        return [f"{path.name}: {error}"]
    problems = []
    names = {element.tag.split("}")[-1] for element in root.iter()}
    if "viewBox" not in root.attrib:
        problems.append(f"{path.name}: no viewBox, it will not scale on a phone")
    if float(root.attrib.get("width", 0)) > MAX_SVG_WIDTH:
        problems.append(f"{path.name}: wider than {MAX_SVG_WIDTH}")
    for banned in ("script", "foreignObject", "image"):
        if banned in names:
            problems.append(f"{path.name}: <{banned}> does not work inside <img>")
    return problems


def load_draft(path):
    path = pathlib.Path(path).resolve()
    draft = json.loads(path.read_text(encoding="utf-8"))
    problems = []
    if not draft.get("deck"):
        problems.append("draft has no deck")
    for number, card in enumerate(draft["cards"], 1):
        if not card.get("front") or not card.get("back"):
            problems.append(f"card {number}: empty front or back")
        if not card.get("tags"):
            problems.append(f"card {number}: no tags")
        if len(plain_text(card.get("front", ""))) > MAX_FRONT_CHARS:
            problems.append(f"card {number}: question over {MAX_FRONT_CHARS} chars, shorten it")
        if card.get("image"):
            problems += svg_problems(path.parent / card["image"])
    images = {pathlib.Path(card["image"]).name for card in draft["cards"] if card.get("image")}
    taken = images & set(anki("getMediaFilesNames", pattern="*"))
    if taken:
        problems.append(f"media names already used in Anki, rename them: {sorted(taken)}")
    if problems:
        sys.exit("Fix the draft first:\n  " + "\n  ".join(problems))
    return path.parent, draft


def cmd_preview(path):
    base, draft = load_draft(path)
    blocks = []
    for number, card in enumerate(draft["cards"], 1):
        picture = ""
        if card.get("image"):
            data = base64.b64encode((base / card["image"]).read_bytes()).decode()
            picture = f'<img src="data:image/svg+xml;base64,{data}">'
        blocks.append(f'<section><h2>{number}. {card["front"]}</h2>{card["back"]}{picture}'
                      f'<small>{html.escape(" ".join(card["tags"]))}</small></section>')
    page = ("<!DOCTYPE html><meta charset=utf-8><title>Anki draft</title><style>"
            "body{font:20px Arial;max-width:680px;margin:2em auto;padding:0 1em;background:#f4f4f4}"
            "section{background:#fff;padding:1em 1.5em;margin:1em 0;text-align:center;border-radius:8px}"
            "h2{font-size:20px;border-bottom:1px solid #ccc;padding-bottom:.6em}"
            "img{max-width:100%;display:block;margin:1em auto}small{color:#777}"
            f'</style><h1>{html.escape(draft["deck"])}</h1>{"".join(blocks)}')
    out = base / "preview.html"
    out.write_text(page, encoding="utf-8")
    if sys.platform == "darwin":
        os.system(f"open '{out}'")
    print(f"{len(blocks)} cards OK, preview: {out}")


def cmd_add(path):
    base, draft = load_draft(path)
    anki("createDeck", deck=draft["deck"])
    added, skipped = [], []
    for card in draft["cards"]:
        back = card["back"]
        if card.get("image"):
            name = pathlib.Path(card["image"]).name
            back += f'<br><img src="{name}" style="max-width:100%">'
        note = {"deckName": draft["deck"], "modelName": MODEL, "tags": card["tags"],
                "fields": {"Front": card["front"], "Back": back}}
        try:
            note_id = anki("addNote", note=note)
        except RuntimeError as error:
            skipped.append(f'{card["front"]}: {error}')
            continue
        if card.get("image"):
            data = base64.b64encode((base / card["image"]).read_bytes()).decode()
            anki("storeMediaFile", filename=pathlib.Path(card["image"]).name, data=data)
        added.append(note_id)
    print(f'Added {len(added)} of {len(draft["cards"])} cards to {draft["deck"]}: {added}')
    for line in skipped:
        print(f"Skipped {line}")


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in ("map", "find", "preview", "add"):
        sys.exit(__doc__)
    command, args = sys.argv[1], sys.argv[2:]
    {"map": lambda: cmd_map(),
     "find": lambda: cmd_find(args),
     "preview": lambda: cmd_preview(args[0]),
     "add": lambda: cmd_add(args[0])}[command]()
