# Git Plugin

Comprehensive Git workflow automation with intelligent commit creation and AI-powered code review.

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

## Requirements

- Git repository initialized
- Files staged for commit (`git add`)

## License

MIT
