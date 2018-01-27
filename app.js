// server 1 (7000)
const http = require('http');

const PORT1 = 7000;

const handleRequest1 = (req, res) =>

res.end('The way you do that JS gets me going baby!', + req.url);

const server1 = http.createServer(handleRequest1);

server1.listen(PORT1, () =>
	console.log('Server is listening on: ' + PORT1));

// ======================================================
// server 2 (7500)

const PORT2 = 7500;

const handleRequest2 = (req, res) =>

res.end('You code is bad and you should feel bad!', + req.url);

const server2 = http.createServer(handleRequest2);

server2.listen(PORT2, () =>
	console.log('Server is listening on: ' + PORT2));