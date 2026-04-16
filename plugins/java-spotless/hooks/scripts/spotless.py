#!/usr/bin/env python3
"""
java-linter: PostToolUse hook that runs Spotless formatter after Java file edits.

Project root resolution order:
  1. project_root field in .claude/java-linter.local.md (explicit override)
  2. Auto-detect by walking up from the edited file until gradlew is found
"""
import sys
import json
import os
import subprocess
import re


def load_stdin():
    try:
        return json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        return {}


def find_root_from_settings():
    """Read project_root from .claude/java-linter.local.md in the workspace."""
    project_dir = os.environ.get("CLAUDE_PROJECT_DIR", "")
    if not project_dir:
        return None
    settings_path = os.path.join(project_dir, ".claude", "java-linter.local.md")
    if not os.path.exists(settings_path):
        return None
    try:
        with open(settings_path) as f:
            content = f.read()
        match = re.search(r"^project_root:\s*(.+)$", content, re.MULTILINE)
        if match:
            return match.group(1).strip()
    except OSError:
        pass
    return None


def find_root_auto(file_path):
    """Walk up the directory tree from file_path to find the nearest gradlew."""
    current = os.path.dirname(os.path.abspath(file_path))
    while True:
        if os.path.exists(os.path.join(current, "gradlew")):
            return current
        parent = os.path.dirname(current)
        if parent == current:
            break
        current = parent
    return None


def main():
    data = load_stdin()
    fp = data.get("tool_input", {}).get("file_path", "")

    if not fp.endswith(".java"):
        sys.exit(0)

    root = find_root_from_settings() or find_root_auto(fp)

    if not root:
        # No Gradle project found — skip silently
        sys.exit(0)

    result = subprocess.run(
        ["./gradlew", "spotlessApply", "--quiet"],
        cwd=root,
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        msg = f"java-linter: Spotless failed (exit {result.returncode})\n"
        if result.stderr:
            msg += result.stderr
        if result.stdout:
            msg += result.stdout
        print(msg, file=sys.stderr)
        sys.exit(2)  # exit 2 → stderr fed back to Claude

    sys.exit(0)


if __name__ == "__main__":
    main()
