// Import filesystem module
const fs = require('fs');

// Read file asynchronously
fs.readFile(process.argv[2], 'utf8', function(err, data) {

    // If error happens, print it
    if (err) {
        return console.error(err);
    }

    // Count lines
    const lines = data.split('\n').length - 1;

    // Print result
    console.log(lines);
});