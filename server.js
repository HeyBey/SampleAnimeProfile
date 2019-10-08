//'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

/*
http.createServer(function (req, res) {
   
}).listen(port);
*/

http.createServer(my_website(req, res)).listen(port);

function my_website(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World \n');

    if(req.url == "/test" && req.method == "GET") {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("Sorry Your Page is Unavailable");
    }
  
}