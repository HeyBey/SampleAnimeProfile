//'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var name = "ryan";

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World \n' + name);
}).listen(port);

