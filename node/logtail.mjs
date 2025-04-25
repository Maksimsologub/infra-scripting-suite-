#!/usr/bin/env node

import fs from 'fs';
import readline from 'readline';
import chalk from 'chalk';

const file = process.argv[2];

if (!file) {
  console.error("Usage: logtail.mjs <logfile>");
  process.exit(1);
}

const rl = readline.createInterface({
  input: fs.createReadStream(file),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('ERROR')) {
    console.log(chalk.red(`[ERROR] ${line}`));
  } else if (line.includes('WARN')) {
    console.log(chalk.yellow(`[WARN] ${line}`));
  } else if (line.includes('INFO')) {
    console.log(chalk.green(`[INFO] ${line}`));
  } else {
    console.log(line);
  }
});
