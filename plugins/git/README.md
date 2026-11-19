# Git Plugin

Comprehensive Git workflow automation with intelligent commit creation, AI-powered code review, and natural language commit search.

## Features

### Commit Command
- **Quick commits** with optional title argument
- **Auto-generated messages** based on staged changes
- **Multi-line support** with auto-generated body
- **Preview & confirm** before committing
- **Edit messages** interactively

### Review Skill
- **Works out what to compare**: a PR/MR link or number from any hosting service, a branch, staged or uncommitted changes
- **Fetches the ticket** named in the PR title or branch name (e.g. `ABC-123`) through your tracker's connector or CLI, and checks the change against its acceptance criteria
- **Diffs from where the branch split off**, so changes merged into the base later don't show up as yours
- **Runs in the background** and never touches your working tree
- **Report**: summary, why, flow through the code, changes grouped by purpose, then issues sorted Critical → Low, each with a failure case and a suggested fix

## Installation

```bash
/plugin install git@malanka-marketplace
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

### Review Skill

```
/git:review                                   # current branch, or uncommitted changes
/git:review --staged                          # staged changes only
/git:review develop                           # current HEAD against develop
/git:review 123                               # PR/MR number on origin
/git:review https://<host>/<project>/<pr-path> # PR/MR link
```

A link to a repository you don't have cloned is cloned into a temporary folder and deleted after the review. If the PR can't be accessed, the skill stops and tells you which tool to install or log in to.

## Requirements

- Git repository initialized
- Files staged for commit (`git add`) for `/commit`
- For PR/MR reviews: access to the PR, usually through the hosting service's CLI

## License

MIT
