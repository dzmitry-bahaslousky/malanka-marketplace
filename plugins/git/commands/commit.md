---
name: commit
description: Create a Git commit with optional title, auto-generated body, and preview confirmation
argument-hint: "[optional commit title]"
allowed-tools:
  - Bash
  - AskUserQuestion
---

# Git Commit Command

You are helping the user create a Git commit with intelligent message generation and preview.

## Workflow

Follow these steps in order:

### 1. Validate Git Repository

Run `git status` to check if we're in a Git repository.

- If error (not a git repo): Show the git error and stop
- If no files staged: Show full `git status` output and inform user they need to stage files first, then stop
- If files are staged: Continue to step 2

### 2. Parse Arguments

Check if the user provided a commit title in the arguments:

- **Title provided**: Use it as the commit title
- **No title**: You will auto-generate both title and body in step 3

### 3. Gather the "Why" From the User

Run `git diff --staged` to analyze the changes.

**A diff only shows WHAT changed — not WHY.** The "why" is the most important part of a commit message, and you cannot reliably infer it from the diff alone. Before generating the message:

1. Assess the staged diff: is the motivation **obvious and unambiguous** from the changes themselves?
   - Obvious examples: typo fix in a visible string, removing a clearly dead import, fixing a syntax error.
   - NOT obvious: feature additions, refactors, configuration changes, business-logic edits, dependency bumps, renames, new files.

2. **If the "why" is not obvious, you MUST ask the user before drafting the message.** Use `AskUserQuestion` with a free-form prompt like:

   > "I can see what changed in the diff, but not why. Could you briefly explain the motivation for this commit? (e.g., the problem it solves, the goal it achieves, or the requirement it addresses)"

   Use the user's answer as the basis for the commit body / message. **Never invent or guess the "why."** If the user declines to provide one, generate only the "what" and omit the body rather than fabricate motivation.

3. Once you have the motivation (either obvious from the diff, or provided by the user), draft the message:

**If title was provided by user as argument**:
- Use the provided title as-is
- Build a body (2-4 lines) from the user-supplied "why" (or the obvious motivation), explaining the problem solved, goal achieved, or requirement addressed
- Format as: `title\n\nbody`

**If no title provided**:
- Generate a brief one-line commit message focused on **why** the change exists, not what files changed
- If the user supplied longer reasoning, add a 1-3 line body underneath
- Keep the title concise but meaningful (e.g., "Allow users to log in without re-entering credentials", "Prevent crashes on empty input")

**Message generation guidelines**:
- Use imperative mood ("Add" not "Added", "Fix" not "Fixed")
- **Do NOT use conventional commit prefixes** (no "feat:", "fix:", "bug:", "bugfix:", "chore:", etc.)
- Use natural language (e.g., "Allow password reset via email" not "feat: Add password reset")
- Focus on the **reason** for the change — the problem, requirement, or improvement that motivated it
- Avoid describing the implementation or listing files; that's visible in the diff
- For body: Explain the problem that existed before, what goal this achieves, or why this approach was chosen — sourced from the user's stated motivation, not invented
- **Do NOT add any Claude Code attribution, co-author tags, or tool mentions** (no "Generated with Claude Code", no "Co-Authored-By", no emoji attributions)

### 4. Get Staged Files List

Run `git diff --staged --name-status` to get the list of files that will be committed.

Format the list as:
```
A  src/auth/login.ts
M  src/components/Header.tsx
D  src/utils/old-helper.ts
```

### 5. Show Preview and Get Confirmation

Use AskUserQuestion tool to show the preview and get user decision.

**CRITICAL**: You MUST include the commit message and file list in the question text. The question parameter should contain:

```
Commit Message:
[the actual generated commit message here - show the full message]

Staged Files:
[the actual file list from step 4 - show all files with their status]

Ready to commit?
```

**Example of what to pass to AskUserQuestion**:
```json
{
  "question": "Commit Message:\nAdd Available Plugins section to README\n\nUsers had no way to discover what the git plugin offers without reading source files\n\nStaged Files:\nM  README.md\nM  .gitignore\n\nReady to commit?",
  "header": "Confirm",
  "options": [...]
}
```

**Options**:
1. **Commit** - Proceed with the commit as shown
2. **Edit message** - Let me provide a different commit message
3. **Cancel** - Don't create the commit

### 6. Handle User Response

**If "Commit"**:
- Execute the commit using a heredoc to handle multi-line messages:
  ```bash
  git commit -m "$(cat <<'EOF'
  [commit message here]
  EOF
  )"
  ```
- **IMPORTANT**: Use ONLY the generated commit message without any additional attribution, co-author tags, or tool mentions
- Show the git output
- Confirm success

**If "Edit message"**:
- Use AskUserQuestion to ask: "Please provide your commit message (use \\n for line breaks):"
- Take the user's custom message
- Go back to step 5 (show preview with new message)

**If "Cancel"**:
- Inform user the commit was cancelled
- Stop

## Important Notes

- Always use heredoc syntax for `git commit -m` to properly handle multi-line messages
- Never skip the preview step - user must confirm before committing
- If any git command fails, show the error and stop
- Preserve exact formatting and line breaks in commit messages
- The body should explain **why** the change was made, not what was changed — the diff already shows what
- **The "why" cannot be inferred from a diff.** If it isn't unambiguously obvious, ask the user via AskUserQuestion before drafting the message. Never invent motivation.
- **NEVER add Claude Code attribution, co-author tags, emoji attributions, or any tool mentions to commit messages** - use only the commit message generated from the diff analysis and the user-supplied motivation

## Examples

### Example 1: With title argument
```
User: /git-commit "Add user authentication"

Steps:
1. Check git status ✓
2. Title provided: "Add user authentication"
3. Inspect diff — motivation not obvious; ask user for the "why"
   User: "Required by SOC2 audit — anonymous access to /admin must end."
4. Build body from user's answer; format title + body
5. Show preview with files
6. User confirms
7. Commit
```

### Example 2: Auto-generate everything
```
User: /git-commit

Steps:
1. Check git status ✓
2. No title provided
3. Inspect diff — motivation not obvious; ask user
   User: "Users were getting logged out on every page reload."
4. Generate message: "Persist session across page reloads"
   Body: "Users were logged out on every reload, breaking the SPA experience."
5. Show preview with files
6. User confirms
7. Commit
```

### Example 2b: Obvious "why" from the diff
```
User: /git-commit

Steps:
1. Check git status ✓
2. No title provided
3. Inspect diff — only change is `recieve` → `receive` in a UI string; motivation is self-evident (typo)
4. Skip the "why" question; generate "Fix typo in confirmation banner"
5. Show preview, user confirms, commit
```

### Example 3: No staged files
```
User: /git-commit "Fix bug"

Steps:
1. Check git status
2. No files staged
3. Show git status output
4. Inform: "No files staged for commit. Use 'git add <files>' first."
5. Stop
```
