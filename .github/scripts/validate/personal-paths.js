'use strict';

const fs = require('fs');
const path = require('path');
const { ROOT, error } = require('./report');
const { listFiles } = require('./files');

const TEXT_FILE = /\.(md|json|js|mjs|cjs|py|sh|ya?ml|toml|txt)$/i;
const PERSONAL_PATH = /(?:\/Users\/|\/home\/|C:\\Users\\)([A-Za-z][A-Za-z0-9._-]*)/g;
const PLACEHOLDER_USERS = new Set(['example', 'me', 'user', 'username', 'you', 'yourname', 'your-username']);

// The README and plugin files must not contain someone's home directory.
function checkPersonalPaths() {
  const files = [path.join(ROOT, 'README.md'), ...listFiles(path.join(ROOT, 'plugins'))];
  for (const file of files.filter(f => fs.existsSync(f) && TEXT_FILE.test(f))) {
    for (const match of fs.readFileSync(file, 'utf8').matchAll(PERSONAL_PATH)) {
      if (!PLACEHOLDER_USERS.has(match[1].toLowerCase())) error(file, `personal path "${match[0]}"`);
    }
  }
}

module.exports = checkPersonalPaths;
