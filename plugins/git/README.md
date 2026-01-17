# Git Plugin

Comprehensive Git workflow automation with intelligent commit creation, AI-powered code review, and natural language commit search.

## Features

### Commit Command
- **Quick commits** with optional title argument
- **Auto-generated messages** based on staged changes
- **Multi-line support** with auto-generated body
- **Preview & confirm** before committing
- **Edit messages** interactively

### Code Reviewer Agent
- **Autonomous code review** - triggered automatically when you mention reviewing PRs or comparing branches
- **Intelligent branch detection** - automatically compares feature branches to main/master
- **Comprehensive analysis** - examines security, code quality, and best practices across all changed files
- **Severity classification** - categorizes issues as 🔴 Critical, 🟡 Warning, 🔵 Info, or ✅ Good Practice
- **Deep file analysis** - reads actual code for context-aware review
- **Actionable insights** - conversational narrative explaining findings and recommendations

### Commit Search Skill
- **Natural language queries** - ask about commit history conversationally
- **Multi-criteria search** - find commits by message, author, date, file, or branch
- **Interactive exploration** - see summaries first, then dive into diffs on request
- **Comprehensive search options** - supports all git log search capabilities
- **Smart suggestions** - Claude helps construct effective search queries

## Installation

```bash
cc --plugin-dir /Users/jcs/VSCode/malanka-marketpalce/plugins/git
```

Or copy to your project's `.claude/` directory.

## Usage

### Commit Command

**With custom title:**
```
/commit "Add user authentication"
```
Creates commit with your title + auto-generated body from staged changes.

**Auto-generate entire message:**
```
/commit
```
Generates brief one-line commit message from staged changes.

**Workflow:**
1. Stage your files with `git add`
2. Run `/commit` with optional title
3. Review preview (message + staged files)
4. Choose: Commit / Edit message / Cancel
5. Done!

### Code Reviewer Agent

The code review agent activates automatically when you mention reviewing code or comparing branches. Just ask naturally:

**Examples:**
- "Can you review the changes in my branch compared to main?"
- "Please review this PR and let me know if there are any issues"
- "Compare the develop and feature/auth-refactor branches"
- "What changed in the api-integration branch?"
- "Review my code for security issues"

**How it works:**
1. **Detects branches** - If you're on a feature branch, automatically compares to main/master
2. **Reads all changes** - Analyzes every modified, added, or deleted file
3. **Comprehensive review** - Checks for:
   - 🔴 Security vulnerabilities (SQL injection, XSS, hardcoded secrets, etc.)
   - 🟡 Code quality issues (duplication, complexity, error handling)
   - 🔵 Best practices (SOLID principles, design patterns, proper structure)
   - Performance concerns (when significant)
4. **Provides narrative review** - Conversational explanation of findings with specific file references
5. **Actionable recommendations** - Prioritized list of what to fix

**Branch comparison options:**
- Current branch vs. main (automatic)
- Specific branch vs. main: "review changes in feature/new-api"
- Two explicit branches: "compare develop and feature/auth"

### Commit Search Skill

Find commits through natural conversation - no need to remember git log syntax. The skill activates automatically when you ask about commit history.

**Examples:**
- "When did we change the authentication logic?"
- "Show me commits by Sarah from last week"
- "Find commits that modified the API endpoints"
- "What changed in config files recently?"
- "Who worked on the login feature?"

**How it works:**
1. **Ask naturally** - Just describe what you're looking for
2. **Claude constructs search** - Builds appropriate git log command with filters
3. **See summary** - Review commits with hash, date, author, and message
4. **Explore details** - Ask to see diffs for specific commits
5. **Refine search** - Add more criteria if needed

**Search capabilities:**
- **By message**: Find commits mentioning specific topics
- **By author**: See commits from specific developers
- **By date**: Filter to date ranges (last week, specific dates, etc.)
- **By file**: Find changes to specific files or directories
- **By branch**: Compare branches or search specific branches
- **Combined**: Mix multiple criteria for precise results

**Example conversation:**

```
You: "When did we add the dark mode feature?"

Claude: I'll search for commits related to dark mode...
        Found 5 commits:

        abc1234 - 2024-01-15, John: Add dark mode toggle to settings
        def5678 - 2024-01-16, Sarah: Implement dark mode styles
        ghi9012 - 2024-01-17, John: Fix dark mode contrast issues
        jkl3456 - 2024-01-18, Sarah: Add dark mode persistence
        mno7890 - 2024-01-20, John: Update docs for dark mode

        Would you like to see the diff for any of these commits?

You: "Show me the first one"

Claude: [Shows full diff of abc1234]
```

**When to use:**
- Investigating when changes were introduced
- Finding who made specific modifications
- Tracking feature development history
- Debugging by finding when bugs appeared
- Code archaeology and project history exploration

## Requirements

- Git repository initialized
- Files staged for commit (`git add`)

## License

MIT
