// Import net module
const net = require('net');

// Format date/time
function now() {

    let d = new Date();

    return d.getFullYear() + '-'
        + String(d.getMonth() + 1).padStart(2, '0') + '-'
        + String(d.getDate()).padStart(2, '0') + ' '
        + String(d.getHours()).padStart(2, '0') + ':'
        + String(d.getMinutes()).padStart(2, '0');
}

// Create TCP server
const server = net.createServer(function(socket) {

    socket.end(now() + '\n');

});

// Listen on port
server.listen(process.argv[2]);