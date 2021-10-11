#!/usr/bin/env node

let { run } = require('gogen')

run(
  [__dirname, ...process.argv.slice(2)],
  'Usage: npx postcss-plugin-boilerplate <directory>',
  { boolean: ['install', 'npm'] }
)
