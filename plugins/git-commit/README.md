# Git Commit Plugin

Streamlined Git commit workflow with intelligent commit message generation and preview.

## Features

- **Quick commits** with optional title argument
- **Auto-generated messages** based on staged changes
- **Multi-line support** with auto-generated body
- **Preview & confirm** before committing
- **Edit messages** interactively

## Installation

```bash
cc --plugin-dir /Users/jcs/VSCode/malanka-marketpalce/plugins/git-commit
```

Or copy to your project's `.claude/` directory.

## Usage

### With custom title
```
/git-commit "Add user authentication"
```
Creates commit with your title + auto-generated body from staged changes.

### Auto-generate entire message
```
/git-commit
```
Generates brief one-line commit message from staged changes.

### Workflow

1. Stage your files with `git add`
2. Run `/git-commit` with optional title
3. Review preview (message + staged files)
4. Choose: Commit / Edit message / Cancel
5. Done!

## Requirements

- Git repository initialized
- Files staged for commit (`git add`)

## License

MIT
