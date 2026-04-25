// Import modules
const http = require('http');
const fs = require('fs');

// Create server
http.createServer(function(req, res) {

    // Stream file contents to browser
    fs.createReadStream(process.argv[3]).pipe(res);

}).listen(process.argv[2]);