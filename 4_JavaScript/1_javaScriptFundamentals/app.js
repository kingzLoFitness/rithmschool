const http = require('http');

const hostname = '127.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World");
});

server.listen(port, hostname, () => {
    console.log("Server running at http://${hostname}:${port}/");
});

/**
 * Now Lets Start Typing 
 * Looks like this tape will come in handy
 * 
 * and this way of commenting will be interesting
 * 
 *  */