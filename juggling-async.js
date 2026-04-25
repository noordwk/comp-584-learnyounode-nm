// Import HTTP module
const http = require('http');

// Store results in correct order
let results = [];
let count = 0;

// Function to collect each URL
function getData(index) {

    http.get(process.argv[index + 2], function(response) {

        let body = '';

        response.setEncoding('utf8');

        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {

            results[index] = body;
            count++;

            // When all 3 finished
            if (count === 3) {
                results.forEach(function(item) {
                    console.log(item);
                });
            }

        });

    });

}

// Call for 3 URLs
for (let i = 0; i < 3; i++) {
    getData(i);
}