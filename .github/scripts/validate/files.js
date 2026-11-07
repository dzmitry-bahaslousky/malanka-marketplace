'use strict';

const fs = require('fs');
const path = require('path');
const { error } = require('./report');

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    error(file, fs.existsSync(file) ? `invalid JSON: ${err.message}` : 'missing');
    return null;
  }
}

// Top-level frontmatter keys only. A key whose value is a YAML list is marked
// with `sequence: true` so callers can reject lists where a string is required.
function readFrontmatter(file) {
  const content = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const fields = {};
  let last = null;
  for (const line of match[1].split(/\r?\n/)) {
    if (/^\s+-\s/.test(line) && last) { fields[last].sequence = true; continue; }
    if (/^\s/.test(line) || !line.includes(':') || line.trim().startsWith('#')) continue;
    const key = line.slice(0, line.indexOf(':')).trim();
    const value = line.slice(line.indexOf(':') + 1).trim().replace(/^["']|["']$/g, '');
    if (fields[key]) error(file, `duplicate frontmatter key: ${key}`);
    fields[key] = { value, sequence: value.startsWith('[') };
    last = key;
  }
  return fields;
}

function requireFields(file, fields, names) {
  if (!fields) return error(file, 'missing frontmatter (--- block at top of file)');
  for (const name of names) {
    if (!fields[name] || (!fields[name].value && !fields[name].sequence)) error(file, `missing frontmatter field: ${name}`);
  }
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });
}

const listMarkdown = dir => listFiles(dir).filter(f => f.endsWith('.md'));

module.exports = { readJson, readFrontmatter, requireFields, listFiles, listMarkdown };
