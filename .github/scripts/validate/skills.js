'use strict';

const fs = require('fs');
const path = require('path');
const { error } = require('./report');
const { readFrontmatter, requireFields } = require('./files');

// Every skills/<name>/ folder needs a SKILL.md with a name and a description.
function checkSkills(entry, pluginDir) {
  const skillsDir = path.join(pluginDir, 'skills');
  if (!fs.existsSync(skillsDir)) return;
  for (const dirent of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const file = path.join(skillsDir, dirent.name, 'SKILL.md');
    if (!fs.existsSync(file)) { error(path.dirname(file), 'skill folder has no SKILL.md'); continue; }
    requireFields(file, readFrontmatter(file), ['name', 'description']);
  }
}

module.exports = checkSkills;
