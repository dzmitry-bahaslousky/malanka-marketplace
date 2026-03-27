# java-linter

Automatically runs [Spotless](https://github.com/diffplug/spotless) formatter on Java files after every `Edit` or `Write` in Claude Code.

## Features

- **Zero-config auto-detection** — finds the Gradle project root by walking up the directory tree from the edited file
- **Explicit override** — pin a specific project root via `.claude/java-linter.local.md`
- **Silent on non-Java files** — no overhead for other file types
- **Error feedback** — Spotless failures are surfaced back to Claude Code

## Installation

```bash
/plugin install java-linter@malanka-marketplace
```

Or locally:

```bash
cc --plugin-dir /path/to/plugins/java-linter
```

## Configuration

By default the hook auto-detects the Gradle project root (looks for `gradlew` walking up from the edited file). No configuration required for most projects.

To override, create `.claude/java-linter.local.md` in your workspace:

```markdown
---
project_root: /absolute/path/to/your/gradle/project
---
```

Add this file to `.gitignore` to keep it local:

```
.claude/*.local.md
```

## Requirements

- Python 3 (standard library only)
- Gradle wrapper (`gradlew`) in the project root
- Spotless plugin configured in the project's `build.gradle`

## How it works

On every `Edit` or `Write` tool call:

1. Checks if the modified file ends in `.java` — skips otherwise
2. Resolves the project root (settings override → auto-detect → skip if not found)
3. Runs `./gradlew spotlessApply --quiet`
4. On failure, exits with code 2 so Claude Code sees the Gradle error output

## Troubleshooting

Ask: *"How do I configure the java-linter plugin?"* and the built-in skill will guide you.

For debug logs: `claude --debug`
