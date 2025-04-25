#!/usr/bin/env node

import fetch from 'node-fetch';

const urls = [
  'https://google.com',
  'https://httpstat.us/503',
  'https://fake.openai.com'
];

const logStatus = async (url) => {
  const start = Date.now();
  try {
    const res = await fetch(url, { timeout: 5000 });
    const duration = Date.now() - start;
    if (res.ok) {
      console.log(`✅ ${url} → ${res.status} in ${duration}ms`);
    } else {
      console.log(`❌ ${url} → ${res.status} in ${duration}ms`);
    }
  } catch (err) {
    console.log(`⚠️  ${url} → Timeout or Error: ${err.message}`);
  }
};

const monitor = async () => {
  console.log(`[${new Date().toISOString()}] Running site checks...`);
  for (const url of urls) {
    await logStatus(url);
  }
};

// Run every 60 seconds
setInterval(monitor, 60 * 1000);
monitor(); // run immediately on start
