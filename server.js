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

//To serve static file
app.use("/webfiles", express.static("public"));

//Using App get function
app.get("/", (req,res,next) => {
   fs.readFile("./index.html", function(err, html) {
    if (err) {
      next(err);
    } else 
    {    
      res.set({
        "Content-Type":"text/html"
      });
      res.send(html);
      res.end();
    }
  });
});

app.get("/special", function(req ,res){
  res.set({
    "Content-Type":"text/html"
  });
  res.locals.text = "test";
  res.send(res.locals.text);
  res.end();
});


/*
app.get("/profile", (req, res, next)=>{
  res.send("Here is your profile");
});
*/

//Express Listening to Port
app.listen(port, () => {
  console.log("Sample Anime Profile Listening on: " + port);
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
