//'use strict';
var http = require("http");
var indexfile = require("/index.html");
var port = process.env.PORT || 1337;

/*
http.createServer(function (req, res) {
   
}).listen(port);
*/

http
  .createServer(function(req, res) {
    my_website(req, res);
  })
  .listen(port);

function my_website(req, res) {
  if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(indexfile);
      res.end();
  } else if (req.url == "/sampleweb" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>Hello World</p> Sample \n" + req.url);
    res.end();
  } else if (req.url == "/zxc" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    var html =
      "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<title>Kay Yel Pala To</title>" +
      "</head>" +
      "<body>" +
      "<h1>Hehez1</h1>" +
      "</body>" +
      "</html>";
    res.write(html);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This is an Error Page \n");
  }
}
