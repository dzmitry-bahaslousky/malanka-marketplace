#!/usr/bin/env node
/**
 * Validate the marketplace and every plugin in it.
 *
 * Claude Code skips malformed plugin files without an error (a skill with no
 * description never loads, a bad hooks.json key is ignored), so these checks
 * turn silent failures into a failing run.
 *
 * Usage: node .github/scripts/validate.js
 * Prints every problem as "ERROR: <file> - <message>" and exits 1 if any.
 *
 * Each check lives in its own module under validate/. To add a per-plugin
 * check, export a function (entry, pluginDir) and add it to PLUGIN_CHECKS.
 */

'use strict';

const { errors } = require('./validate/report');
const checkMarketplace = require('./validate/marketplace');
const checkManifest = require('./validate/manifest');
const checkSkills = require('./validate/skills');
const checkAgents = require('./validate/agents');
const checkCommands = require('./validate/commands');
const checkHooks = require('./validate/hooks');
const checkMcp = require('./validate/mcp');
const checkPersonalPaths = require('./validate/personal-paths');

const PLUGIN_CHECKS = [checkManifest, checkSkills, checkAgents, checkCommands, checkHooks, checkMcp];

if (checkMarketplace((entry, pluginDir) => PLUGIN_CHECKS.forEach(check => check(entry, pluginDir)))) {
  checkPersonalPaths();
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found`);
  process.exit(1);
}
console.log('Marketplace is valid');
