// Import HTTP module
const http = require('http');

// Send GET request
http.get(process.argv[2], function(response) {

    // Convert buffer to text
    response.setEncoding('utf8');

    // Print each data chunk
    response.on('data', function(data) {
        console.log(data);
    });

});