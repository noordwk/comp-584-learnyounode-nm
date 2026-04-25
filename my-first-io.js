// Import filesystem module
const fs = require('fs');

// Read file contents as text
const text = fs.readFileSync(process.argv[2], 'utf8');

// Split by newline and subtract 1
const lines = text.split('\n').length - 1;

// Print line count
console.log(lines);