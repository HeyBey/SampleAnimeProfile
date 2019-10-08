//'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

/*
http.createServer(function (req, res) {
   
}).listen(port);
*/

http.createServer(my_website(req, res)).listen(port);

function my_website(req, res) {
   
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World \n');
    }
  
  
}