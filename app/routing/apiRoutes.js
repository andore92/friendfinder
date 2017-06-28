var express = require('express');

var api = express.Router();

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

api.get('/friends', function(req, res) {
        res.json(friendsList);
});

module.exports = api
