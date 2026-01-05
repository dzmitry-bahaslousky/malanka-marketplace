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

### 3. Generate Commit Message

Run `git diff --staged` to analyze the changes.

Based on whether a title was provided:

**If title was provided by user**:
- Use the provided title as-is
- Analyze the staged diff to generate a descriptive body (2-4 lines explaining what changed)
- Format as: `title\n\nbody`

**If no title provided**:
- Generate a brief, descriptive one-line commit message
- NO body needed
- Keep it concise but informative (e.g., "Add user authentication feature", "Fix login validation bug")

**Message generation guidelines**:
- Use imperative mood ("Add" not "Added", "Fix" not "Fixed")
- **Do NOT use conventional commit prefixes** (no "feat:", "fix:", "bug:", "bugfix:", "chore:", etc.)
- Use natural language (e.g., "Add user authentication" not "feat: Add user authentication")
- Be specific about what changed
- Focus on the "what" and "why", not the "how"
- For body: Mention key files/components affected

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

Present the information clearly:

**Question format**:
```
Commit Message:
[generated message]

Staged Files:
[file list from step 4]

Ready to commit?
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
- The body should provide context that isn't obvious from the diff itself

## Examples

### Example 1: With title argument
```
User: /git-commit "Add user authentication"

Steps:
1. Check git status ✓
2. Title provided: "Add user authentication"
3. Generate body from git diff --staged
4. Show preview with files
5. User confirms
6. Commit
```

### Example 2: Auto-generate everything
```
User: /git-commit

Steps:
1. Check git status ✓
2. No title provided
3. Generate one-line message: "Implement JWT-based authentication system"
4. Show preview with files
5. User edits message
6. Show preview again
7. User confirms
8. Commit
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
