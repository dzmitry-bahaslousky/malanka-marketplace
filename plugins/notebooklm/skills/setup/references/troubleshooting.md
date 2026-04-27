# NotebookLM Setup Troubleshooting

## AuthError on First Run

**Symptom:** Script raises `AuthError` or prints "Authentication failed"

**Cause:** `auth.json` missing, expired, or corrupted

**Fix:** Re-run the Playwright capture script from Step 2 of the setup skill. Google session cookies expire periodically (typically 1–4 weeks).

---

## `ModuleNotFoundError: No module named 'notebooklm'`

**Fix:**
```bash
pip install notebooklm-py
```

If using a virtualenv, ensure it is activated before running scripts.

---

## `playwright._impl._errors.Error: Executable doesn't exist`

**Fix:**
```bash
playwright install chromium
```

On some systems you may need:
```bash
python -m playwright install chromium
```

---

## Browser Opens But Stays Blank

**Cause:** Playwright chromium launch issue or display problem on headless servers

**Fix:** Run the auth capture on a machine with a display (not a remote SSH session without X forwarding). The browser must be visible to interact with Google's login.

---

## Google Login Loop (Keeps Redirecting)

**Cause:** Google may challenge automated browsers

**Fix:** After the browser opens, complete the full Google sign-in manually including any 2FA prompts. Wait until you see the NotebookLM home page before pressing Enter in the terminal.

---

## `auth.json` Is Empty or `{}`

**Cause:** Storage state was saved before login completed

**Fix:** Delete `~/.notebooklm/auth.json` and re-run the capture script. Make sure to see the NotebookLM notebook list in the browser before pressing Enter.

---

## RateLimitError Immediately After Auth

**Cause:** Google rate-limiting rapid API calls

**Fix:** Wait 60 seconds before retrying. Avoid running multiple notebook operations in quick succession.

---

## `NOTEBOOKLM_AUTH_JSON` Environment Variable Alternative

Instead of a file, credentials can be passed via environment variable (useful for CI/CD):

```bash
export NOTEBOOKLM_AUTH_JSON=$(cat ~/.notebooklm/auth.json)
```

Then in Python:
```python
import os, json
from notebooklm import NotebookLMClient, AuthTokens

auth_data = json.loads(os.environ["NOTEBOOKLM_AUTH_JSON"])
client = NotebookLMClient(AuthTokens(**auth_data))
```
