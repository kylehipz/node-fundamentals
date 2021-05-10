const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello, Achievers');
  res.end('<h1> Hello world!</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Check http://${hostname}:${port}`);
});
