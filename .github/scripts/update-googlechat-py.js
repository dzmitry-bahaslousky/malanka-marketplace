#!/usr/bin/env node
/**
 * Move the google plugin to the newest googlechat-py release tag.
 *
 * The plugin pins googlechat-py to a tag in .mcp.json, so users get a new
 * server only with a new plugin version. This finds the highest vX.Y.Z
 * release, and if its tag differs from the pinned one, rewrites the pin and bumps the
 * plugin's patch version.
 *
 * Usage: node .github/scripts/update-googlechat-py.js
 * Prints what it did. In GitHub Actions it also writes `tag` (empty when
 * already up to date) and `version` to $GITHUB_OUTPUT.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO = 'dzmitry-bahaslousky/googlechat-py';
const PLUGIN = path.join(__dirname, '..', '..', 'plugins', 'google');
const MCP_FILE = path.join(PLUGIN, '.mcp.json');
const MANIFEST_FILE = path.join(PLUGIN, '.claude-plugin', 'plugin.json');
const PIN = /(googlechat-py@)(\S+)( )/;

// Pre-releases count (googlechat-py marks its 0.0.x releases as pre-releases,
// which GitHub's "latest release" endpoint skips); drafts don't.
async function latestTag() {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} listing releases of ${REPO}`);
  const tags = (await res.json())
    .filter(release => !release.draft && /^v\d+\.\d+\.\d+$/.test(release.tag_name))
    .map(release => release.tag_name);
  const key = tag => tag.slice(1).split('.').map(Number);
  tags.sort((a, b) => {
    const [x, y] = [key(a), key(b)];
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  });
  if (!tags.length) throw new Error(`no vX.Y.Z releases found in ${REPO}`);
  return tags[tags.length - 1];
}

function output(values) {
  if (!process.env.GITHUB_OUTPUT) return;
  const lines = Object.entries(values).map(([k, v]) => `${k}=${v}\n`).join('');
  fs.appendFileSync(process.env.GITHUB_OUTPUT, lines);
}

async function main() {
  const mcpText = fs.readFileSync(MCP_FILE, 'utf8');
  const match = mcpText.match(PIN);
  if (!match) throw new Error(`no googlechat-py@<ref> pin found in ${MCP_FILE}`);
  const current = match[2];
  const tag = await latestTag();

  if (current === tag) {
    console.log(`googlechat-py is already at ${tag}`);
    output({ tag: '' });
    return;
  }

  fs.writeFileSync(MCP_FILE, mcpText.replace(PIN, `$1${tag}$3`));

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  const [major, minor, patch] = manifest.version.split('.').map(Number);
  const version = `${major}.${minor}.${patch + 1}`;
  const manifestText = fs.readFileSync(MANIFEST_FILE, 'utf8');
  fs.writeFileSync(MANIFEST_FILE, manifestText.replace(`"version": "${manifest.version}"`, `"version": "${version}"`));

  console.log(`googlechat-py ${current} -> ${tag}; google plugin ${manifest.version} -> ${version}`);
  output({ tag, version });
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
