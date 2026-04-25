// Import required modules
const fs = require('fs');
const path = require('path');

// Read folder contents
fs.readdir(process.argv[2], function(err, files) {

    if (err) {
        return console.error(err);
    }

    // Loop through each file
    files.forEach(function(file) {

        // Check matching extension
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file);
        }

    });
});