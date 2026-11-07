'use strict';

const path = require('path');
const { error } = require('./report');
const { readJson } = require('./files');

const SEMVER = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/;

// .claude-plugin/plugin.json must exist, match its marketplace entry and not
// declare paths that Claude Code already loads on its own.
function checkManifest(entry, pluginDir) {
  const file = path.join(pluginDir, '.claude-plugin', 'plugin.json');
  const manifest = readJson(file);
  if (!manifest) return;
  if (manifest.name !== entry.name) error(file, `name "${manifest.name}" does not match marketplace entry "${entry.name}"`);
  if (!SEMVER.test(manifest.version || '')) error(file, 'needs a "version" like "1.2.3" (updates are tracked by version)');
  if (entry.version && manifest.version && entry.version !== manifest.version) {
    error(file, `version ${manifest.version} differs from marketplace entry version ${entry.version}`);
  }
  if (typeof manifest.hooks === 'string' && manifest.hooks.replace(/^\.\//, '') === 'hooks/hooks.json') {
    error(file, 'remove "hooks": hooks/hooks.json is loaded automatically, declaring it causes a duplicate-hooks error');
  }
  if ('agents' in manifest) error(file, 'remove "agents": agents/ is found automatically');
}

module.exports = checkManifest;
