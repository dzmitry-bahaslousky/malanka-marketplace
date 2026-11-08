# CLAUDE.md

Claude Code plugin marketplace. `.claude-plugin/marketplace.json` lists the plugins; each one lives in `plugins/<name>/`.

## Validate

```bash
node .github/scripts/validate.js
```

CI runs the same command on every push and pull request. Each check is a module in `.github/scripts/validate/`.

## Adding or changing a plugin

1. Create `plugins/<name>/.claude-plugin/plugin.json` with `name` and `version`.
2. Add skills (`skills/<skill>/SKILL.md`), agents (`agents/*.md`), commands (`commands/*.md`), hooks (`hooks/hooks.json`) or MCP servers (`.mcp.json`) as needed.
3. Add an entry to `.claude-plugin/marketplace.json` with `"source": "./plugins/<name>"`.
4. Add a row with `/plugin install <name>@malanka-marketplace` to the plugin table in `README.md`.
5. Bump `version` in `plugin.json` on every change to an existing plugin.
6. Run the validator.

## Plugin manifest rules

Claude Code often fails quietly on these: a plugin is skipped, a skill never loads, or the error is vague. Don't remove a validator check without reading the reason here first.

| Rule | Why | Enforced by |
|---|---|---|
| Every plugin has `plugin.json` with a semver `version` | Installed plugins are cached by version. Without one, the cache keys on the repo's commit hash, so every commit to the repo looks like a new release of that plugin | validator |
| Bump `version` whenever a plugin changes | Updates are tracked by version; a change without a bump may never reach installed users | nobody: check it in review |
| `plugin.json` `name` matches the marketplace entry | The entry name is what users install; a mismatch breaks install | validator |
| Don't declare `"hooks": "./hooks/hooks.json"` | That file is loaded automatically; declaring it too causes "Duplicate hooks file detected" | validator |
| Don't add an `"agents"` field | `agents/` is found by folder name; ECC hit `agents: Invalid input` with it. Learned from ECC, may be outdated | validator |
| Hook commands reference files as `${CLAUDE_PLUGIN_ROOT}/...` | Installed plugins run from a versioned cache folder, not from this checkout | nobody: check it in review |
| Hooks exit 0 on their own errors, unless they are a safety check | A broken reminder must not block the user's work | nobody: check it in review |
| A plugin only uses files inside its own folder | Each plugin is copied into its own cache folder; paths into another plugin don't exist after install | nobody: check it in review |
| A plugin-root `.mcp.json` starts its servers for every user | Ship one only if everyone who installs the plugin should run those servers | nobody: check it in review |
| Skill `description` says *when* to use the skill | It is the only part always in context, so it decides whether the skill ever loads | validator checks it exists; wording is on you |
| Agent `tools` is a comma-separated string, not a YAML list | Lists are rejected | validator |
| No personal paths (`/Users/<name>`, `/home/<name>`) in shipped files | They break on every other machine | validator |
