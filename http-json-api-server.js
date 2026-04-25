// Import modules
const http = require('http');
const url = require('url');

// Create server
http.createServer(function(req, res) {

    // Parse URL
    let parsed = url.parse(req.url, true);

    let date = new Date(parsed.query.iso);

    let result;

    // First route
    if (parsed.pathname === '/api/parsetime') {

        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

    } else if (parsed.pathname === '/api/unixtime') {

        result = {
            unixtime: date.getTime()
        };
    }

    // JSON response
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }

}).listen(process.argv[2]);