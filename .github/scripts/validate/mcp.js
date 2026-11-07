'use strict';

const fs = require('fs');
const path = require('path');
const { error } = require('./report');
const { readJson } = require('./files');

// .mcp.json needs a top-level mcpServers object.
function checkMcp(entry, pluginDir) {
  const file = path.join(pluginDir, '.mcp.json');
  if (!fs.existsSync(file)) return;
  const config = readJson(file);
  if (config && (!config.mcpServers || typeof config.mcpServers !== 'object')) {
    error(file, 'top-level "mcpServers" object is required');
  }
}

module.exports = checkMcp;
