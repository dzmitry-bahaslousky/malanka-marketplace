'use strict';

const fs = require('fs');
const path = require('path');
const { ROOT, error } = require('./report');
const { readJson } = require('./files');

const MARKETPLACE_NAME = 'malanka-marketplace';
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// Checks marketplace.json entries, README install lines and unlisted plugin
// folders, calling checkPlugin(entry, pluginDir) for every local plugin.
// Returns false when marketplace.json is unusable and nothing else can be checked.
function checkMarketplace(checkPlugin) {
  const marketplaceFile = path.join(ROOT, '.claude-plugin', 'marketplace.json');
  const marketplace = readJson(marketplaceFile);
  if (!marketplace) return false;
  if (!Array.isArray(marketplace.plugins)) {
    error(marketplaceFile, '"plugins" must be an array');
    return false;
  }

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
  return true;
}

module.exports = checkMarketplace;
