// Import modules
//loads Node.js HTTP module
const http = require('http');

// Create the web server
http.createServer(function(req, res) {

    //checks if client used POST
    if (req.method === 'POST') {

        let body = '';

        //Node receives request data in chunks
        req.on('data', function(chunk) {
            body += chunk;
        });

        //runs after it received all data
        //then process the final text
        req.on('end', function() {

            // Convert lowercase to uppercase
            res.end(body.toUpperCase());

        });
    }
//uses command-line argument
}).listen(process.argv[2]);
