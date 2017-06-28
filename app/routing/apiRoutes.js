var express = require('express');
var friendsList = require('../data/friends')

var api = express.Router();



api.get('/friends', function(req, res) {
    res.json(friendsList);
});

api.post('/friends', function(req, res){
	
	var newUser = req.body
	var newUserScoresArr = newUser.scores
	var compareUsersArr = []
	
	for (var i=0; i<friendsList.length; i++){
		
		var totalDifference = 0;
		
		for (var x=0; x<friendsList[i].scores[x]; x++){
			totalDifference += Math.abs(parseInt(newUserScoresArr[x]) - parseInt(friendsList[i].scores[x]));
		}

		compareUsersArr[i] = totalDifference;
	}
		
	var matchScore = compareUsersArr[0];
	var matchIndex = 0;

	for (var i=0; i<compareUsersArr.length; i++) {
		if(compareUsersArr[i] < matchScore) {
				matchScore = compareUsersArr[i];
				matchIndex = i;
			}
	}
	friendsList.push(newUser);

	res.json(friendsList[matchIndex]);
});

module.exports = api
