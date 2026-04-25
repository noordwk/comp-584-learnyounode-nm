// Import modules
const http = require('http');

// Create server
http.createServer(function(req, res) {

    if (req.method === 'POST') {

        let body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {

            // Convert to uppercase
            res.end(body.toUpperCase());

        });
    }

}).listen(process.argv[2]);