// Import modules
const fs = require('fs');
const path = require('path');

// Export function so program.js can use it
module.exports = function(folder, ext, callback) {

    // Read folder contents
    fs.readdir(folder, function(err, files) {

        if (err) {
            return callback(err);
        }

        // Filter files by extension
        let filtered = files.filter(function(file) {
            return path.extname(file) === '.' + ext;
        });

        // Return results
        callback(null, filtered);

    });

};