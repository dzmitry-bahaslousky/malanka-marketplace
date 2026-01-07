---
name: Git Commit Search
description: This skill should be used when the user asks to "find commits", "search commit history", "when was this changed", "who modified", "what changed in file", "show commits by author", "find commits in date range", "search git history", "when did this break", or mentions searching through git commit history by message, author, date, or file path.
version: 0.1.0
---

# Git Commit Search

## Overview

Searching git commit history effectively requires understanding various git log options and search strategies. Use this skill to help users find specific commits by message content, author, date range, file path, or branch.

The goal is to provide an interactive experience: present commit summaries first, then offer detailed diffs when users want to explore specific changes.

## When to Use This Skill

Activate this skill when users need to:

- Find commits by message keywords or content changes
- Identify who made specific modifications
- Locate commits within date ranges
- Search for changes to particular files or directories
- Investigate when bugs were introduced
- Track feature development history
- Explore branch-specific commit history

## Search Strategies

### Search by Message Content

Use `git log --grep` to search commit messages:

```bash
git log --grep="authentication" --oneline
```

**Options:**
- `--grep="pattern"` - Search commit messages for pattern
- `-i` - Case-insensitive search
- `--all` - Search across all branches
- `--regexp-ignore-case` - Ignore case in regular expressions

**Advanced message search:**
```bash
# Multiple patterns (OR)
git log --grep="auth" --grep="login" --oneline

# Multiple patterns (AND)
git log --grep="auth" --grep="login" --all-match --oneline

# Regular expressions
git log --grep="fix.*bug" --oneline
```

### Search by Code Content

Find commits that added or removed specific code:

```bash
# Search for commits that added/removed "function authenticate"
git log -S "function authenticate" --oneline

# Search with regex for content changes
git log -G "function.*auth" --oneline
```

**Difference between -S and -G:**
- `-S "string"` - Find commits where the number of occurrences of the string changed
- `-G "pattern"` - Find commits where the pattern appears in added/removed lines

### Search by Author

Find commits by specific authors:

```bash
# Exact author name
git log --author="John Doe" --oneline

# Partial match (case-insensitive)
git log --author="john" --oneline

# Multiple authors
git log --author="john\|jane" --oneline

# Committer vs author
git log --committer="jenkins" --oneline
```

### Search by Date Range

Find commits within time periods:

```bash
# After a specific date
git log --since="2024-01-01" --oneline

# Before a specific date
git log --until="2024-12-31" --oneline

# Date range
git log --since="2 weeks ago" --until="1 week ago" --oneline

# Relative dates
git log --since="yesterday" --oneline
git log --since="3 days ago" --oneline
git log --after="2024-01-15" --before="2024-01-20" --oneline
```

**Date format options:**
- ISO format: `2024-01-15`
- Relative: `2 weeks ago`, `yesterday`, `3 days ago`
- Specific: `Jan 15 2024`

### Search by File or Directory

Find commits that modified specific files:

```bash
# Single file
git log --oneline -- path/to/file.js

# Multiple files
git log --oneline -- file1.js file2.js

# Directory
git log --oneline -- src/auth/

# File pattern
git log --oneline -- "*.md"

# Follow file renames
git log --follow --oneline -- README.md
```

**Important:** Use `--` before file paths to separate them from other arguments.

### Search by Branch

Find commits specific to branches:

```bash
# Commits on branch not in main
git log main..feature-branch --oneline

# Commits in main not on branch
git log feature-branch..main --oneline

# Commits in either branch but not both
git log main...feature-branch --oneline

# All commits on specific branch
git log feature-branch --oneline
```

## Combining Search Criteria

Combine multiple search criteria for precise results:

```bash
# Commits by author in date range
git log --author="john" --since="1 week ago" --oneline

# Commits by message pattern affecting specific file
git log --grep="fix" --oneline -- src/auth.js

# Code changes by author in date range
git log -S "authenticate" --author="sarah" --since="2024-01-01" --oneline

# Commits on branch by author with message pattern
git log feature-branch --author="john" --grep="refactor" --oneline
```

## Presenting Results

### Initial Summary

Present commit results in a concise summary format:

```bash
# Compact one-line format with hash and message
git log --oneline

# Include author and date
git log --pretty=format:"%h - %an, %ar : %s"

# With relative dates
git log --pretty=format:"%h - %s (%cr) <%an>"
```

**Format placeholders:**
- `%h` - Abbreviated commit hash
- `%H` - Full commit hash
- `%an` - Author name
- `%ae` - Author email
- `%ar` - Author date, relative
- `%ad` - Author date
- `%cr` - Committer date, relative
- `%s` - Commit message subject
- `%b` - Commit message body

### Interactive Approach

Follow this pattern when helping users search commits:

1. **Understand intent** - Clarify what user is searching for
2. **Construct query** - Build appropriate git log command with search criteria
3. **Execute search** - Run git log and capture results
4. **Present summary** - Show commits in concise format (hash, date, author, message)
5. **Offer details** - Ask if user wants to see diffs for specific commits
6. **Show diffs** - Use `git show <hash>` for detailed changes when requested

### Viewing Commit Details

When user wants to explore specific commits:

```bash
# Full commit details with diff
git show <commit-hash>

# Diff only (no commit metadata)
git show <commit-hash> --no-notes

# Stats summary
git show <commit-hash> --stat

# Specific file in commit
git show <commit-hash> -- path/to/file

# Compact diff
git show <commit-hash> --oneline --stat
```

## Useful Display Options

### Limiting Results

Control output volume:

```bash
# Limit to N commits
git log -n 10 --oneline

# Limit to first/last commits
git log -5 --oneline  # Last 5 commits
```

### Formatting Output

Enhance readability:

```bash
# Show graph for branch visualization
git log --graph --oneline --all

# Decorated output with branch/tag names
git log --decorate --oneline

# Full commit details
git log --pretty=full

# Custom format
git log --pretty=format:"%C(yellow)%h%Creset %C(blue)%an%Creset: %s"
```

### File Change Statistics

Show what changed:

```bash
# List files changed in each commit
git log --name-only --oneline

# Show status (added/modified/deleted)
git log --name-status --oneline

# Show statistics
git log --stat --oneline

# Short stat
git log --shortstat --oneline
```

## Best Practices

### Start Broad, Then Narrow

Begin with broader searches and refine:

1. Search by topic or area: `git log --grep="auth" --oneline`
2. Add author filter: `git log --grep="auth" --author="john" --oneline`
3. Add date range: `git log --grep="auth" --author="john" --since="1 month ago" --oneline`

### Use Appropriate Granularity

Match detail level to user needs:

- **Quick lookup**: `--oneline` format
- **Investigation**: `--stat` for file changes
- **Deep dive**: `git show <hash>` for full diffs

### Verify Search Scope

Ensure searching the right scope:

- Add `--all` to search all branches
- Specify branch explicitly for branch-specific searches
- Use `--` before file paths to avoid ambiguity

### Handle Large Result Sets

Manage many results effectively:

1. **Count first**: Use `git log <criteria> | wc -l` to check result count
2. **Limit initially**: Add `-n 20` to see first 20 results
3. **Refine criteria**: Add more filters if too many results
4. **Paginate**: Present in batches if user needs to review many commits

## Common Patterns

### "When did we change X?"

```bash
# Code content changed
git log -S "X" --oneline -- path/to/file

# Message mentions X
git log --grep="X" --oneline
```

### "Who worked on this file?"

```bash
# All authors
git log --pretty=format:"%an" -- path/to/file | sort | uniq

# With commit counts
git shortlog -sn -- path/to/file
```

### "What changed last week?"

```bash
git log --since="1 week ago" --oneline --stat
```

### "Find the commit that broke X"

```bash
# Search for relevant changes
git log -S "X" --oneline

# Interactive approach: show candidates, let user explore
git log --grep="X" --since="when it started breaking" --oneline
```

### "Show me commits between releases"

```bash
# Between tags
git log v1.0..v2.0 --oneline

# Between dates
git log --since="2024-01-01" --until="2024-02-01" --oneline
```

## Workflow Integration

When user asks about commit history:

1. **Parse request** - Identify search criteria (author, date, message, file, etc.)
2. **Build command** - Construct git log with appropriate flags
3. **Execute** - Run command and capture output
4. **Format results** - Present in readable format with essential details
5. **Interactive exploration** - Offer to show diffs or additional details for specific commits
6. **Follow-up** - Refine search if results too broad or too narrow

**Example conversation flow:**

User: "When did we change the authentication logic?"

Response approach:
1. Search for commits: `git log -S "authenticate" --grep="auth" --oneline -- src/auth/`
2. Present summary: "Found 12 commits related to authentication changes over the past 3 months"
3. Show top results with hash, date, author, message
4. Ask: "Would you like to see the diff for any specific commit?"
5. If yes: `git show <hash>` for selected commits

## Edge Cases and Troubleshooting

### No Results Found

If search returns nothing:

- Verify search pattern case sensitivity (add `-i` flag)
- Check if searching correct branch (add `--all` for all branches)
- Try broader search terms
- Verify file paths are correct (use `git ls-files` to check)

### Too Many Results

If search returns too many commits:

- Add more specific filters (author, date range, file path)
- Use more specific search patterns
- Limit results with `-n` flag
- Narrow date range

### Performance Issues

For large repositories:

- Limit search scope to specific branches or date ranges
- Use `--` with specific file paths instead of searching entire repo
- Consider using `-S` instead of `-G` for string searches (faster)

## Summary

Effective commit searching combines understanding git log options with an interactive approach that starts with summaries and progressively provides details. Focus on constructing precise queries using appropriate filters, presenting results clearly, and offering to dive deeper when users need more information.
