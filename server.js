var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var friendsList = [{
	name: "Origin Master",
	phone: "732-234-5678",
	email: "origin@aol.com",
	uniqueId: "73111"
},{
  name: "Davey D",
  phone: "732-342-9876",
  email: "davey@aol.com",
  uniqueId: "72211"
}
];


var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var PORT = 8080;

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
