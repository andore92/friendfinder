var express = require("express");
var path = require("path");

var htmlRoutes = require('./app/routing/htmlRoutes');

var PORT = 8080;

var app = express();

app.use('/', htmlRoutes);

// app.get("/", function(req, res) {
// 		  res.sendFile(path.join(__dirname, "home.html"));
// 		});

// 		app.get("/survey", function(req, res) {
// 		  res.sendFile(path.join(__dirname, "survey.html"));
// 		});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
