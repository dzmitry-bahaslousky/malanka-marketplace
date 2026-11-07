'use strict';

const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const errors = [];

const rel = file => path.relative(ROOT, file).split(path.sep).join('/');
const error = (file, message) => errors.push(`ERROR: ${rel(file)} - ${message}`);

module.exports = { ROOT, errors, error };
