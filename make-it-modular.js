// Import custom module
const mymodule = require('./mymodule');

// Call module function
mymodule(process.argv[2], process.argv[3], function(err, files) {

    if (err) {
        return console.error(err);
    }

    // Print each matching file
    files.forEach(function(file) {
        console.log(file);
    });

});