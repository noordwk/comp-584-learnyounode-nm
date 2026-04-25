// Import HTTP module
const http = require('http');

// Send request
http.get(process.argv[2], function(response) {

    let body = '';

    response.setEncoding('utf8');

    // Collect data pieces
    response.on('data', function(chunk) {
        body += chunk;
    });

    // When complete
    response.on('end', function() {

        // Print length
        console.log(body.length);

        // Print full content
        console.log(body);
    });

});