
require('./js/keypressHandler').initialize();
const httpHandler = require('./js/httpHandler');

const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);
server.listen(8080, '127.0.0.1')

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
console.log('also listening on 8080');
