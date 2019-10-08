//'use strict';
var http = require("http");
//Loading file system module
var fs = require("fs");
var url = require("url");
//Loading express module
var express = require("express");
// express function to app
var app = express();
var port = process.env.PORT || 1337;

//Using App get function
app.get("/", (req,res) => {
 res.send("test");
});



//Temporary Commented
/*
http.createServer(function(req, res) {
    my_website(req, res);
  }).listen(port);

function my_website(req, res) {
  if (req.url == "/" && req.method == "GET") {

    fs.readFile("./index.html", function(err, html) {
      if (err) {
        throw err;
      } else {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      }
    });
   } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This is an Error Page \n");
  }
}
*/
