#!/usr/bin/env node

const Hidstream = require('../../').Hidstream;

const HONEYWELL = 3118;
const VOYAGER_1450G = 3233;

const scanner = new Hidstream({
  vid: HONEYWELL,
  pid: VOYAGER_1450G,
});

function closeScanner() {
  scanner.close();
}

// Close scanner when script is exiting is stopped.
process.on('exit', closeScanner);

// Close scanner on ctrl+c event
process.on('SIGINT', closeScanner);

// Can not use scanner.pipe(process.stdout);
scanner.on('data', (data) => {
  console.log(data); // easily consumed data format!
});