# Malanka Marketplace

A plugin marketplace for Claude Code, providing a curated collection of plugins for enhanced development workflows.

## Overview

This marketplace serves as a centralized catalog for distributing Claude Code plugins. Plugins can be added to this marketplace and distributed to teams and communities via GitHub.

## Available Plugins

### Git Plugin

Enhanced Git workflow automation with intelligent commit generation, code review, and branch management.

**Commands:**
- `/commit [optional title]` - Create Git commits with auto-generated messages based on staged changes. Includes interactive preview and editing before committing.
- `/clean-branches` - Safely delete merged local branches with interactive selection and protection for current/default branches.

**Agents:**
- `code-reviewer` - Autonomous code review agent that analyzes pull requests, compares branches, and identifies security vulnerabilities, code quality issues, and best practice violations. Triggered by requests like "review this PR" or "compare branches".

**Skills:**
- `Git Commit Search` - Search git history using natural language queries. Find commits by message content, author, date range, or file path. Provides progressive disclosure: summaries first, detailed diffs on request.

**Installation:**
```bash
/plugin install git@malanka-marketplace
```

## Installation

### For Users

Add this marketplace to your Claude Code installation:

```bash
# If hosted on GitHub at odzmitry-bahaslouskywner/malanka-marketplace
/plugin marketplace add dzmitry-bahaslousky/malanka-marketplace

# Or using full URL
/plugin marketplace add https://github.com/dzmitry-bahaslousky/malanka-marketplace.git
```

Once added, you can install plugins from this marketplace:

```bash
# List available plugins
/plugin list

# Install a specific plugin
/plugin install plugin-name@malanka-marketplace

# Update marketplace catalog
/plugin marketplace update
```

## Directory Structure

```
malanka-marketplace/
├── .claude-plugin/
│   └── marketplace.json          # Marketplace catalog
├── plugins/                       # Plugin storage directory
│   └── (plugins will be added here)
└── README.md                      # This file
```

## Adding Plugins to This Marketplace

### Option 1: Plugins in Same Repository (Recommended for Small Collections)

1. Create your plugin in the `plugins/` directory:

```bash
mkdir -p plugins/my-plugin/.claude-plugin
# Add your plugin files
```

2. Add the plugin entry to `.claude-plugin/marketplace.json`:

```json
{
  "plugins": [
    {
      "name": "my-plugin",
      "source": "./plugins/my-plugin",
      "description": "Brief description of what the plugin does",
      "version": "1.0.0",
      "author": {
        "name": "Your Name"
      },
      "category": "productivity",
      "keywords": ["keyword1", "keyword2"]
    }
  ]
}
```

### Option 2: Reference External GitHub Repositories (Recommended for Large Plugins)

Add plugin entries that reference external repositories:

```json
{
  "plugins": [
    {
      "name": "external-plugin",
      "source": {
        "source": "github",
        "repo": "owner/plugin-repo"
      },
      "description": "Plugin hosted in separate repository",
      "version": "2.0.0"
    }
  ]
}
```

### Option 3: Reference Other Git Repositories

```json
{
  "plugins": [
    {
      "name": "gitlab-plugin",
      "source": {
        "source": "url",
        "url": "https://gitlab.com/team/plugin.git"
      },
      "description": "Plugin from GitLab"
    }
  ]
}
```

## Plugin Entry Schema

### Required Fields

- `name`: Kebab-case identifier (e.g., "my-plugin")
- `source`: Path or repository reference

### Optional Metadata Fields

- `description`: Brief description
- `version`: Semantic version (e.g., "1.0.0")
- `author`: `{ "name": "...", "email": "..." }`
- `homepage`: Documentation URL
- `repository`: Source code URL
- `license`: SPDX identifier (MIT, Apache-2.0, etc.)
- `keywords`: Array of search tags
- `category`: Plugin category
- `tags`: Additional searchability tags

### Optional Component Paths

- `commands`: Custom command file paths
- `agents`: Custom agent file paths
- `hooks`: Hook configuration object
- `mcpServers`: MCP server configurations
- `lspServers`: LSP server configurations

## Validation

Validate your marketplace structure:

```bash
# Using Claude Code
/plugin validate .

# Or using CLI
claude plugin validate .
```

## Publishing Workflow

1. **Create plugins** in `plugins/` directory or reference external repos
2. **Update** `.claude-plugin/marketplace.json` with plugin entries
3. **Validate** marketplace structure
4. **Commit and push** to GitHub
5. **Users add** your marketplace via `/plugin marketplace add owner/repo`
6. **Users install** plugins via `/plugin install plugin-name@malanka-marketplace`

## Resources

- [Claude Code Plugin Documentation](https://code.claude.com/docs/en/plugins)
- [Plugin Marketplace Documentation](https://code.claude.com/docs/en/plugin-marketplaces)
- [Plugin Development Guide](https://code.claude.com/docs/en/plugin-development)

## License

MIT License - see [LICENSE](LICENSE) file for details
