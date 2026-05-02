---
name: download
description: Download videos, audio, playlists, or subtitles from YouTube and other yt-dlp-supported sites, or inspect formats/metadata. Triggers on /yt-dlp:download and on phrases like "download this video", "rip the mp3 from", "get subtitles", "show formats for", "download this playlist".
argument-hint: "<URL> [intent: video|audio|playlist|subs|info|<resolution>] [output-path]"
allowed-tools:
  - Bash
  - AskUserQuestion
version: 0.2.0
---

# yt-dlp Download

Single skill that wraps `yt-dlp` for the most common downloading tasks. Interpret what the user wants, map it to the correct flags, and run it.

## Workflow

Follow these steps in order. Do not skip the pre-flight check.

### 1. Pre-flight: Verify `yt-dlp` is installed

Run this check first, every time:

```bash
command -v yt-dlp >/dev/null 2>&1 && yt-dlp --version
```

- **If the command succeeds**: continue to step 2.
- **If `yt-dlp` is not found**: print the install guide below and **stop**. Do not attempt to install it for the user.

```
yt-dlp is not installed.

Install it with one of:

  macOS (Homebrew, recommended):
    brew install yt-dlp

  pipx (cross-platform, isolated):
    pipx install yt-dlp

  pip (last resort):
    python3 -m pip install --user --upgrade yt-dlp

Then re-run your request.

Reference: https://github.com/yt-dlp/yt-dlp#installation
```

`ffmpeg` is also recommended (needed for audio extraction and merging hi-res video+audio streams). Only mention `ffmpeg` if the user's request requires it (audio, or a resolution that needs stream merging) AND `command -v ffmpeg` fails. Install hint: `brew install ffmpeg`.

### 2. YouTube auth resolution

YouTube serves a server-side bot challenge to unauthenticated requests, returning `Sign in to confirm you're not a bot`. This step makes the skill learn the user's preferred auth once and reuse it forever after. **Skip this step entirely** if the URL host is anything other than `youtube.com`, `www.youtube.com`, `m.youtube.com`, `youtu.be`, or `youtube-nocookie.com` — leave `YOUTUBE_AUTH_FLAGS` unset.

State path: `AUTH_CONF="$HOME/.config/yt-dlp/youtube-auth.conf"`

1. **If `$AUTH_CONF` exists and is non-empty**: read its single line into `YOUTUBE_AUTH_FLAGS` (e.g. `YOUTUBE_AUTH_FLAGS=$(cat "$AUTH_CONF")`). Do not prompt. Proceed to step 3.

2. **If it does not exist or is empty**: ask the user **once** with `AskUserQuestion`:
   - Question: `"YouTube requires authentication to avoid its bot challenge. How should yt-dlp authenticate? (Saved once at ~/.config/yt-dlp/youtube-auth.conf — reused for every future YouTube download.)"`
   - Header: `"YouTube auth"`
   - Four explicit options:
     - `"Chrome / Chromium / Brave / Edge"` — description: `"Use yt-dlp's chrome keyword. Works for Chrome itself; for Brave/Edge/Vivaldi you can edit the conf file later to swap the keyword."`
     - `"Firefox"` — description: `"Use yt-dlp's firefox keyword. Most reliable on macOS — no Keychain decryption involved."`
     - `"Safari"` — description: `"Use yt-dlp's safari keyword. Built-in macOS browser, no Keychain prompt needed."`
     - `"cookies.txt file"` — description: `"Path to a manually-exported cookies.txt (e.g. via the 'Get cookies.txt LOCALLY' extension). Use this if your browser's keystore can't be decrypted (Arc, custom profiles)."`
   - The auto-provided **"Other"** option lets the user type any yt-dlp-supported browser keyword (`brave`, `edge`, `vivaldi`, `opera`, `whale`, `chromium`) or a profile-qualified form (`chrome:Profile 2`).

3. **Translate the answer to a flag string**:
   - `"Chrome / Chromium / Brave / Edge"` → `--cookies-from-browser chrome`
   - `"Firefox"` → `--cookies-from-browser firefox`
   - `"Safari"` → `--cookies-from-browser safari`
   - `"cookies.txt file"` → ask the user in plain text: `"Reply with the absolute path to your cookies.txt file:"`. Read their next message as the path. Expand `~` to `$HOME` (`PATH_EXPANDED="${RAW_PATH/#\~/$HOME}"`). Verify the file exists with `[ -f "$PATH_EXPANDED" ]` — if not, tell the user the path is invalid and ask again. Save as `--cookies "$PATH_EXPANDED"`.
   - **"Other"** (free-text): if the typed string starts with `/` or `~`, treat as a cookies file path (expand and verify as above) and save as `--cookies <expanded-path>`. Otherwise treat as a yt-dlp browser keyword and save as `--cookies-from-browser <typed-string>`.

4. **Persist the chosen flag string as a single line** to `$AUTH_CONF`. Create the directory first:
   ```bash
   mkdir -p "$(dirname "$AUTH_CONF")"
   printf '%s\n' "$CHOSEN_FLAGS" > "$AUTH_CONF"
   ```
   Set `YOUTUBE_AUTH_FLAGS="$CHOSEN_FLAGS"` for the current run.

5. Report briefly: `"Saved YouTube auth choice to ~/.config/yt-dlp/youtube-auth.conf — will reuse for future YouTube downloads. Edit or delete that file to change."`

### 3. Parse the request

Extract from the user's message and arguments:

- **URL** — required. If no URL is present, ask the user for one and stop.
- **Intent** — see the mapping table below. If ambiguous, default to `video`.
- **Output path** — optional. If the user provided one, use it. Otherwise default to `~/Downloads/` (do NOT ask — silent default).
- **Resolution / format hint** — only if the user mentioned one (e.g. "1080p", "4k", "best", "worst").

### 4. Intent → flag mapping

| User intent | yt-dlp flags | Notes |
|---|---|---|
| Default / "video" / "download" | `-f "bv*+ba/b"` | Best video + best audio merged. Requires ffmpeg for separate streams. |
| "audio" / "mp3" / "rip the audio" | `-x --audio-format mp3 --audio-quality 0` | Extract audio as MP3 at best quality. Requires ffmpeg. |
| "playlist" / URL with `list=` AND user said "playlist" | `--yes-playlist` | See step 5 — confirm count first. |
| Single video from playlist URL | `--no-playlist` | Default when the URL has `list=` but user did NOT say "playlist". |
| "subtitles" / "subs" / "captions" | `--write-subs --sub-langs "en.*" --skip-download` | Downloads English `.vtt` files. Use `--sub-langs all` only if user explicitly asks for all languages. Add `--write-auto-subs` for auto-generated. |
| "info" / "metadata" / "what's the title" | `--print "%(title)s" --print "%(uploader)s" --print "%(duration_string)s" --print "%(view_count)s views" --print "%(upload_date)s"` | No download. One `--print` per line — yt-dlp does not interpret `\n` inside a single template. For raw JSON, use `--dump-json` instead. |
| "formats" / "what formats" / "list formats" | `-F` | Lists available formats; no download. |
| Specific resolution e.g. "1080p" | `-f "bv*[height<=1080]+ba/b[height<=1080]"` | Substitute the requested height. Cap at requested or below. |
| "best" | `-f "bv*+ba/b"` | Same as default. |
| "worst" / "smallest" | `-f "worstvideo+worstaudio/worst"` | Worst quality, smallest file. |

**Always include these baseline flags:**

- `-o "$OUTPUT/%(title)s.%(ext)s"` — simple filename template. Expand `~` to `$HOME` first; `~` does NOT expand inside double quotes. Use `OUTPUT="${OUTPUT/#\~/$HOME}"` or just write `"$HOME/Downloads"` directly.
- `--no-overwrites` — don't clobber existing files.
- `--no-mtime` — use download time as file mtime (avoids confusing finder dates).

### 5. Playlist safety check

If intent is `playlist` (set in step 3 — only when the user said "playlist" or similar):

1. Get the count first:
   ```bash
   yt-dlp --flat-playlist --skip-download --print "%(playlist_index)s" "<URL>" 2>/dev/null | wc -l | tr -d ' '
   ```
2. Use `AskUserQuestion` to confirm:
   - Question: `"This playlist has N videos. Download all of them to <output-path>?"`
   - Header: `"Confirm playlist"`
   - Options: `"Download all"`, `"First 10 only"`, `"Cancel"`
3. If `"First 10 only"`, add `--playlist-end 10` to the command.
4. If `"Cancel"`, stop.

Skip this confirmation step for non-playlist downloads.

### 6. Build and run the command

Construct the command from the chosen flags. Use `mkdir -p` to ensure the output path exists, then run yt-dlp.

Example shape (do not just paste this — assemble from steps above). Expand `~` to `$HOME` before quoting. Append `$YOUTUBE_AUTH_FLAGS` **unquoted** so the flag and its argument tokenize correctly; for non-YouTube URLs the variable is empty and contributes nothing:

```bash
mkdir -p "$HOME/Downloads"
yt-dlp <flags> $YOUTUBE_AUTH_FLAGS -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "<URL>"
```

Stream the output so the user sees progress.

### 7. Report results

After the command finishes:

- **Success**: state what was downloaded and where (`Downloaded to ~/Downloads/<filename>`). For info/formats requests, just show the output.
- **Failure**: show the yt-dlp error verbatim, then a one-line interpretation if the cause is obvious (e.g. "Video is private/age-restricted/region-blocked", "ffmpeg not installed — needed for audio extraction"). Do not retry automatically.
- **Failure: YouTube bot-detection / stale auth**: if stderr contains `Sign in to confirm you` OR `Use --cookies-from-browser or --cookies`:
  1. Tell the user: `"Saved YouTube auth at ~/.config/yt-dlp/youtube-auth.conf is no longer accepted by YouTube (cookies likely expired or keystore changed)."`
  2. Delete the saved auth: `rm -f "$AUTH_CONF"`.
  3. Re-run **step 2 (YouTube auth resolution)** to re-prompt the user, then retry the original yt-dlp command **once** with the new `$YOUTUBE_AUTH_FLAGS`.
  4. If the retry fails with the same error, surface the second failure verbatim and stop. Do **not** loop further.

## Examples

> **Note on YouTube auth in examples.** Examples 1–7 below assume step 2 (YouTube auth resolution) has already been completed in a previous session — i.e. `~/.config/yt-dlp/youtube-auth.conf` exists, and `$YOUTUBE_AUTH_FLAGS` is silently appended to every yt-dlp command for YouTube URLs. The auth flag is omitted from the example commands for readability. Example 8 walks through the first-run flow where the conf file does not yet exist.

### Example 1 — Default video download (slash invocation)

```
User: /yt-dlp:download https://youtube.com/watch?v=dQw4w9WgXcQ
```

1. `command -v yt-dlp` ✓
2. URL parsed, intent = video (default), output = `~/Downloads/`
3. Not a playlist URL → skip playlist check
4. Run: `mkdir -p ~/Downloads && yt-dlp -f "bv*+ba/b" -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "https://youtube.com/watch?v=dQw4w9WgXcQ"`
5. Report: `Downloaded to ~/Downloads/Never Gonna Give You Up.mp4`

### Example 2 — Audio extraction (conversational)

```
User: rip the mp3 from https://youtube.com/watch?v=abc123
```

1. `command -v yt-dlp` ✓
2. Intent = audio (user said "mp3")
3. `command -v ffmpeg` ✓ (silent — only mention if missing)
4. Run: `yt-dlp -x --audio-format mp3 --audio-quality 0 -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "https://youtube.com/watch?v=abc123"`
5. Report: `Downloaded audio to ~/Downloads/<title>.mp3`

### Example 3 — Playlist with confirmation

```
User: download this playlist https://youtube.com/playlist?list=PLxyz
```

1. `command -v yt-dlp` ✓
2. Intent = playlist
3. Run count: `yt-dlp --flat-playlist --skip-download --print "%(playlist_index)s" "..." | wc -l` → 47
4. Ask via AskUserQuestion: `"This playlist has 47 videos. Download all to ~/Downloads/?"` with `Download all` / `First 10 only` / `Cancel`
5. User picks "First 10 only"
6. Run: `yt-dlp --yes-playlist --playlist-end 10 -f "bv*+ba/b" -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "..."`
7. Report: `Downloaded 10 videos to ~/Downloads/`

### Example 4 — Format inspection (no download)

```
User: what formats does https://youtube.com/watch?v=abc have?
```

1. `command -v yt-dlp` ✓
2. Intent = formats
3. Run: `yt-dlp -F "https://youtube.com/watch?v=abc"`
4. Show the format table verbatim. Do not summarize unless asked.

### Example 5 — Subtitles only

```
User: get subtitles from https://youtube.com/watch?v=abc
```

1. `command -v yt-dlp` ✓
2. Intent = subtitles
3. Run: `yt-dlp --write-subs --sub-langs "en.*" --skip-download -o "$HOME/Downloads/%(title)s.%(ext)s" "https://youtube.com/watch?v=abc"`
4. If no manual subtitles exist, yt-dlp will say so. In that case, ask the user: "No manual subtitles available. Download auto-generated captions instead?" and if yes, re-run with `--write-auto-subs`.

### Example 6 — Specific resolution

```
User: download https://youtube.com/watch?v=abc in 1080p
```

1. Intent = video at ≤1080p
2. Run: `yt-dlp -f "bv*[height<=1080]+ba/b[height<=1080]" -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "https://youtube.com/watch?v=abc"`

### Example 7 — Custom output path

```
User: /yt-dlp:download https://youtube.com/watch?v=abc ~/Music/podcasts
```

1. Intent = video (default), output = `~/Music/podcasts`
2. `mkdir -p "$HOME/Music/podcasts" && yt-dlp ... -o "$HOME/Music/podcasts/%(title)s.%(ext)s" ...`

### Example 8 — First-run YouTube auth prompt

```
User: /yt-dlp:download https://www.youtube.com/watch?v=iuUh9ycqYxo
```

1. `command -v yt-dlp` ✓
2. URL host = `www.youtube.com` → run YouTube auth resolution. `~/.config/yt-dlp/youtube-auth.conf` does not exist.
3. AskUserQuestion with the four options ("Chrome / Chromium / Brave / Edge", "Firefox", "Safari", "cookies.txt file"). User picks "Firefox".
4. Save: `mkdir -p ~/.config/yt-dlp && printf '%s\n' '--cookies-from-browser firefox' > ~/.config/yt-dlp/youtube-auth.conf`. Set `YOUTUBE_AUTH_FLAGS='--cookies-from-browser firefox'`.
5. Tell user: `"Saved YouTube auth choice to ~/.config/yt-dlp/youtube-auth.conf — will reuse for future YouTube downloads. Edit or delete that file to change."`
6. Continue: parse request → intent = video (default), output = `~/Downloads/`. Not a playlist URL.
7. Run: `mkdir -p ~/Downloads && yt-dlp -f "bv*+ba/b" --cookies-from-browser firefox -o "$HOME/Downloads/%(title)s.%(ext)s" --no-overwrites --no-mtime "https://www.youtube.com/watch?v=iuUh9ycqYxo"`
8. Report: `Downloaded to ~/Downloads/<title>.mp4`

A subsequent `/yt-dlp:download <other-youtube-url>` in any future session reads the conf file directly, skips the prompt, and runs immediately with the same `--cookies-from-browser firefox` appended.

## Guidelines

- **Never auto-install** `yt-dlp` or `ffmpeg`. Always print install instructions and stop.
- **Never overwrite existing files** — `--no-overwrites` is non-negotiable.
- **Quote URLs** in shell commands — they often contain `&`, `?`, `=` that the shell will mangle.
- **Quote output paths** too — `~` expansion works unquoted, but spaces in custom paths break unquoted args. Prefer `"$HOME/Downloads"` style or quote the whole `-o` argument.
- **Don't add `--no-warnings`** — warnings often explain why a download is degraded.
- **Don't summarize `-F` output** unless the user asks — the table is the answer.
- **Don't fetch metadata "just to be helpful"** before downloading. It doubles the network round-trips. Only fetch metadata when intent = info/formats, or when counting playlist entries.
- **If the user passes auth flags directly** in their request (`--cookies-from-browser …` or `--cookies …`), those override the saved `youtube-auth.conf` for that single run only. Do **not** rewrite or delete the conf file based on a one-off command-line flag.
- **Other pass-through flags** the user provides (rate limits, format selectors, etc.) are still respected as before — assume they know what they're doing.
