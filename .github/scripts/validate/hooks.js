'use strict';

const fs = require('fs');
const path = require('path');
const { error } = require('./report');
const { readJson } = require('./files');

// hooks/hooks.json: { hooks: { <Event>: [ { hooks: [ { type, command } ] } ] } }
function checkHooks(entry, pluginDir) {
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

module.exports = checkHooks;
