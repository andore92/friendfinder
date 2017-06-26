var express = require("express");
var path = require("path");


module.exports = (function() {

		var app = express.Router();

		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname, "home.html"));
		});

		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(__dirname, "survey.html"));
		});

})