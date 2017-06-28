var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
