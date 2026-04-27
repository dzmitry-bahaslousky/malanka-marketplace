---
name: NotebookLM Setup
description: This skill should be used when the user asks to "set up NotebookLM", "configure NotebookLM", "install notebooklm-py", "authenticate with NotebookLM", "get NotebookLM credentials", "save NotebookLM auth", or "connect to NotebookLM for the first time". Guides through installation of the notebooklm-py Python library and saving Google session credentials to ~/.notebooklm/auth.json.
version: 0.1.0
---

# NotebookLM Setup

This skill guides through installing `notebooklm-py` and saving Google session credentials so the NotebookLM agent can interact with notebooks on the user's behalf.

## Overview

`notebooklm-py` is a Python library that drives NotebookLM via undocumented Google APIs. Authentication uses real browser session cookies — there is no official API key. Credentials are captured once via Playwright and stored at `~/.notebooklm/auth.json`.

## Step 1: Install Dependencies

Run the following to install the library and its Playwright dependency:

```bash
pip install notebooklm-py
playwright install chromium
```

Verify installation:

```bash
python -c "import notebooklm; print('OK')"
```

If the import fails, check that the virtualenv or Python environment is active.

## Step 2: Capture Google Session Credentials

The library authenticates via a Playwright browser storage state file (a JSON file containing Google session cookies).

Run this one-time capture script:

```python
import asyncio
from playwright.async_api import async_playwright

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context()
        page = await context.new_page()
        await page.goto("https://notebooklm.google.com")
        print("Log in to Google in the browser window, then press Enter here...")
        input()
        import os, pathlib
        pathlib.Path("~/.notebooklm").expanduser().mkdir(exist_ok=True)
        await context.storage_state(path=str(pathlib.Path("~/.notebooklm/auth.json").expanduser()))
        print("Credentials saved to ~/.notebooklm/auth.json")
        await browser.close()

asyncio.run(capture())
```

Save this as a temp file and run it:

```bash
python /tmp/nlm_auth.py
```

A real Chromium window will open. Log in to Google, navigate to NotebookLM, then press Enter in the terminal. The session state is saved to `~/.notebooklm/auth.json`.

## Step 3: Verify Authentication

Test that the credentials work:

```python
import asyncio
from notebooklm import NotebookLMClient

async def test():
    async with NotebookLMClient.from_storage("~/.notebooklm/auth.json") as client:
        notebooks = await client.notebooks.list()
        print(f"Found {len(notebooks)} notebooks")
        for nb in notebooks[:5]:
            print(f"  - {nb.title} ({nb.id})")

asyncio.run(test())
```

If this returns a notebook list, setup is complete.

## Step 4: Configure Default Notebook (Optional)

To avoid specifying a notebook on every request, create a project-level settings file at `.claude/notebooklm.local.md`:

```markdown
---
default_notebook_id: "your-notebook-id-here"
default_notebook_name: "My Research"
auth_path: "~/.notebooklm/auth.json"
---

NotebookLM plugin settings for this project.
```

Replace `your-notebook-id-here` with the ID printed by the verification script above. The agent reads this file automatically and uses the default notebook unless told otherwise.

## Credential Refresh

Google session cookies expire. When the agent reports an `AuthError`, re-run Step 2 to capture a fresh session. The old `auth.json` is overwritten automatically.

## Security Notes

- `~/.notebooklm/auth.json` contains live Google session cookies — treat it like a password
- Add `~/.notebooklm/` to your global `.gitignore` to prevent accidental commits
- Do not share `auth.json` with anyone
- The credentials grant full access to the Google account's NotebookLM, not just specific notebooks

## Additional Resources

- **`references/troubleshooting.md`** — Common auth errors and fixes
- **`references/playwright-setup.md`** — Platform-specific Playwright installation notes
