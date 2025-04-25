#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: touchgen.js file1 file2 ...");
  process.exit(1);
}
args.forEach(file => {
    fs.writeFile(file, '', (err) => {
      if (err) {
        console.error(`Failed to create ${file}:`, err.message);
      } else {
        console.log(`Created: ${file}`);
      }
    });
  });
  