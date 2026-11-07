#!/usr/bin/env node
/**
 * Validate the marketplace and every plugin in it.
 *
 * Claude Code skips malformed plugin files without an error (a skill with no
 * description never loads, a bad hooks.json key is ignored), so these checks
 * turn silent failures into a failing run.
 *
 * Usage: node scripts/validate.js
 * Prints every problem as "ERROR: <file> - <message>" and exits 1 if any.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MARKETPLACE_NAME = 'malanka-marketplace';
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SEMVER = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/;
const TEXT_FILE = /\.(md|json|js|mjs|cjs|py|sh|ya?ml|toml|txt)$/i;
const PERSONAL_PATH = /(?:\/Users\/|\/home\/|C:\\Users\\)([A-Za-z][A-Za-z0-9._-]*)/g;
const PLACEHOLDER_USERS = new Set(['example', 'me', 'user', 'username', 'you', 'yourname', 'your-username']);

const errors = [];
const rel = file => path.relative(ROOT, file).split(path.sep).join('/');
const error = (file, message) => errors.push(`ERROR: ${rel(file)} - ${message}`);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    error(file, fs.existsSync(file) ? `invalid JSON: ${err.message}` : 'missing');
    return null;
  }
}

// Top-level frontmatter keys only. A key whose value is a YAML list is marked
// with `sequence: true` so callers can reject lists where a string is required.
function readFrontmatter(file) {
  const content = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const fields = {};
  let last = null;
  for (const line of match[1].split(/\r?\n/)) {
    if (/^\s+-\s/.test(line) && last) { fields[last].sequence = true; continue; }
    if (/^\s/.test(line) || !line.includes(':') || line.trim().startsWith('#')) continue;
    const key = line.slice(0, line.indexOf(':')).trim();
    const value = line.slice(line.indexOf(':') + 1).trim().replace(/^["']|["']$/g, '');
    if (fields[key]) error(file, `duplicate frontmatter key: ${key}`);
    fields[key] = { value, sequence: value.startsWith('[') };
    last = key;
  }
  return fields;
}

function requireFields(file, fields, names) {
  if (!fields) return error(file, 'missing frontmatter (--- block at top of file)');
  for (const name of names) {
    if (!fields[name] || (!fields[name].value && !fields[name].sequence)) error(file, `missing frontmatter field: ${name}`);
  }
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });
}

function checkSkills(pluginDir) {
  const skillsDir = path.join(pluginDir, 'skills');
  if (!fs.existsSync(skillsDir)) return;
  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = path.join(skillsDir, entry.name, 'SKILL.md');
    if (!fs.existsSync(file)) { error(path.dirname(file), 'skill folder has no SKILL.md'); continue; }
    requireFields(file, readFrontmatter(file), ['name', 'description']);
  }
}

function checkMarkdownDir(pluginDir, sub, required) {
  for (const file of listFiles(path.join(pluginDir, sub)).filter(f => f.endsWith('.md'))) {
    const fields = readFrontmatter(file);
    requireFields(file, fields, required);
    if (sub === 'agents' && fields && fields.tools && fields.tools.sequence) {
      error(file, 'tools must be a comma-separated string, not a YAML list');
    }
  }
}

function checkHooks(pluginDir) {
  const file = path.join(pluginDir, 'hooks', 'hooks.json');
  if (!fs.existsSync(file)) return;
  const config = readJson(file);
  if (!config) return;
  if (!config.hooks || typeof config.hooks !== 'object') return error(file, 'top-level "hooks" object is required');
  for (const [event, groups] of Object.entries(config.hooks)) {
    if (!Array.isArray(groups)) { error(file, `${event} must be an array`); continue; }
    groups.forEach((group, i) => {
      if (!group || !Array.isArray(group.hooks)) return error(file, `${event}[${i}].hooks must be an array`);
      group.hooks.forEach((hook, j) => {
        const label = `${event}[${i}].hooks[${j}]`;
        if (!hook || typeof hook.type !== 'string') return error(file, `${label} is missing "type"`);
        if (hook.type === 'command' && (typeof hook.command !== 'string' || !hook.command.trim())) {
          error(file, `${label} is missing "command"`);
        }
      });
    });
  }
}

function checkMcp(pluginDir) {
  const file = path.join(pluginDir, '.mcp.json');
  if (!fs.existsSync(file)) return;
  const config = readJson(file);
  if (config && (!config.mcpServers || typeof config.mcpServers !== 'object')) {
    error(file, 'top-level "mcpServers" object is required');
  }
}

function checkPlugin(entry, pluginDir) {
  const manifestFile = path.join(pluginDir, '.claude-plugin', 'plugin.json');
  const manifest = readJson(manifestFile);
  if (manifest) {
    if (manifest.name !== entry.name) error(manifestFile, `name "${manifest.name}" does not match marketplace entry "${entry.name}"`);
    if (!SEMVER.test(manifest.version || '')) error(manifestFile, 'needs a "version" like "1.2.3" (updates are tracked by version)');
    if (entry.version && manifest.version && entry.version !== manifest.version) {
      error(manifestFile, `version ${manifest.version} differs from marketplace entry version ${entry.version}`);
    }
    if (typeof manifest.hooks === 'string' && manifest.hooks.replace(/^\.\//, '') === 'hooks/hooks.json') {
      error(manifestFile, 'remove "hooks": hooks/hooks.json is loaded automatically, declaring it causes a duplicate-hooks error');
    }
    if ('agents' in manifest) error(manifestFile, 'remove "agents": agents/ is found automatically');
  }
  checkSkills(pluginDir);
  checkMarkdownDir(pluginDir, 'agents', ['name', 'description', 'tools', 'model']);
  checkMarkdownDir(pluginDir, 'commands', ['description']);
  checkHooks(pluginDir);
  checkMcp(pluginDir);
}

function checkPersonalPaths(files) {
  for (const file of files.filter(f => TEXT_FILE.test(f))) {
    for (const match of fs.readFileSync(file, 'utf8').matchAll(PERSONAL_PATH)) {
      if (!PLACEHOLDER_USERS.has(match[1].toLowerCase())) error(file, `personal path "${match[0]}"`);
    }
  }
}

function main() {
  const marketplaceFile = path.join(ROOT, '.claude-plugin', 'marketplace.json');
  const marketplace = readJson(marketplaceFile);
  if (!marketplace) return;
  if (!Array.isArray(marketplace.plugins)) return error(marketplaceFile, '"plugins" must be an array');

  const readmeFile = path.join(ROOT, 'README.md');
  const readme = fs.existsSync(readmeFile) ? fs.readFileSync(readmeFile, 'utf8') : '';
  const seen = new Set();
  const listedDirs = new Set();

  for (const entry of marketplace.plugins) {
    if (!entry || !KEBAB.test(entry.name || '')) { error(marketplaceFile, `plugin name "${entry && entry.name}" must be kebab-case`); continue; }
    if (seen.has(entry.name)) error(marketplaceFile, `duplicate plugin name "${entry.name}"`);
    seen.add(entry.name);
    if (!readme.includes(`${entry.name}@${MARKETPLACE_NAME}`)) {
      error(readmeFile, `no install line for "${entry.name}" (expected "/plugin install ${entry.name}@${MARKETPLACE_NAME}")`);
    }
    if (typeof entry.source !== 'string') continue; // external repo: nothing local to check
    const pluginDir = path.resolve(ROOT, entry.source);
    listedDirs.add(pluginDir);
    if (!fs.existsSync(pluginDir)) { error(marketplaceFile, `"${entry.name}" source ${entry.source} does not exist`); continue; }
    checkPlugin(entry, pluginDir);
  }

  const pluginsRoot = path.join(ROOT, 'plugins');
  for (const entry of fs.existsSync(pluginsRoot) ? fs.readdirSync(pluginsRoot, { withFileTypes: true }) : []) {
    const dir = path.join(pluginsRoot, entry.name);
    if (entry.isDirectory() && !listedDirs.has(dir)) error(dir, 'folder is not listed in marketplace.json');
  }

  checkPersonalPaths([readmeFile, ...listFiles(pluginsRoot)].filter(f => fs.existsSync(f)));
}

main();
if (errors.length > 0) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found`);
  process.exit(1);
}
console.log('Marketplace is valid');
