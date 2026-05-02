# yt-dlp Plugin

A simple, single-skill Claude Code plugin for downloading videos, audio, playlists, subtitles, and metadata from YouTube and any other site supported by [yt-dlp](https://github.com/yt-dlp/yt-dlp).

## What it does

One skill — `/yt-dlp:download` — that interprets natural-language intent and runs the right `yt-dlp` invocation for you.

| You say… | It does… |
|---|---|
| `/yt-dlp:download <URL>` | Best-quality video, merged streams |
| "rip the mp3 from \<URL\>" | Audio-only, MP3, best quality |
| "download this playlist \<URL\>" | Counts entries, asks before downloading all |
| "get subtitles from \<URL\>" | All available subtitle tracks, no video |
| "what formats does \<URL\> have?" | Lists yt-dlp `-F` output |
| "download \<URL\> in 1080p" | Caps resolution at 1080p |

Default output location: `~/Downloads/`. Override by passing a path as the second argument.

## Prerequisites

- **`yt-dlp`** — the plugin checks for it on every run. If missing, it prints install instructions and stops (it will not auto-install).
  - macOS: `brew install yt-dlp`
  - Cross-platform: `pipx install yt-dlp`
- **`ffmpeg`** — required for audio extraction and merging hi-res video+audio. The plugin only nags you about it if your specific request needs it.
  - macOS: `brew install ffmpeg`

## Install

From the malanka-marketplace:

```
/plugin install yt-dlp@malanka-marketplace
```

## Usage

### Slash command

```
/yt-dlp:download <URL> [intent] [output-path]
```

Examples:

```
/yt-dlp:download https://youtube.com/watch?v=abc
/yt-dlp:download https://youtube.com/watch?v=abc audio
/yt-dlp:download https://youtube.com/watch?v=abc 1080p ~/Movies
```

### Conversational

Just ask naturally — the skill triggers on phrases like:

- "download this video: https://…"
- "get the audio from https://…"
- "show me the formats for https://…"
- "grab subtitles from https://…"

## Safety defaults

- **Never overwrites** existing files (`--no-overwrites`).
- **Never auto-downloads playlists** when you share a URL that just happens to contain `list=` — only when you explicitly say "playlist".
- **Confirms playlist downloads** by counting entries first and asking before downloading all of them.

## License

MIT
