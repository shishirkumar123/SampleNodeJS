const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header content type to plain text
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello, World!"
    res.end('Hello, World!\n');
});

// Define the port the server will listen to
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
