
const fs = require('fs');
const http = require('http');

const content = fs.readFileSync('index.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if(req.url === '/') {
        // send the index.html file
        res.write(content);
    }
    else if(req.url === '/login') {
        // send the login.html file
        res.write('Login page');
    }
    else {
        // send a 404 error
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});