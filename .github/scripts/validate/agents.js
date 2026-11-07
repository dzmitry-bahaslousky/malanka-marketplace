'use strict';

const path = require('path');
const { error } = require('./report');
const { readFrontmatter, requireFields, listMarkdown } = require('./files');

// Agent files need full frontmatter, and `tools` must be a string.
function checkAgents(entry, pluginDir) {
  for (const file of listMarkdown(path.join(pluginDir, 'agents'))) {
    const fields = readFrontmatter(file);
    requireFields(file, fields, ['name', 'description', 'tools', 'model']);
    if (fields && fields.tools && fields.tools.sequence) {
      error(file, 'tools must be a comma-separated string, not a YAML list');
    }
  }
}

module.exports = checkAgents;
