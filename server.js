//'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

/*
http.createServer(function (req, res) {
   
}).listen(port);
*/

http.createServer(function (req, res) {
    my_website(req, res);
}).listen(port);

function my_website(req, res) {

    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World \n' + req.url);
    }
    else if (req.url == "/sample" && req.method == "GET") {
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World Sample \n' + req.url);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error Page Does \n');
    }
       
  
  
}