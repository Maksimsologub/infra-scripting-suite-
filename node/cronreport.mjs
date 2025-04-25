#!/usr/bin/env node

import cron from 'node-cron';
import fs from 'fs';

const logFile = 'cronjob.log';

cron.schedule('* * * * *', () => {
  const timestamp = new Date().toISOString();
  const message = `[${timestamp}] Task ran\n`;
  fs.appendFileSync(logFile, message);
  console.log(`✅ Task executed and logged at ${timestamp}`);
});
