'use strict';

const path = require('path');
const { readFrontmatter, requireFields, listMarkdown } = require('./files');

// Command files need a description.
function checkCommands(entry, pluginDir) {
  for (const file of listMarkdown(path.join(pluginDir, 'commands'))) {
    requireFields(file, readFrontmatter(file), ['description']);
  }
}

module.exports = checkCommands;
