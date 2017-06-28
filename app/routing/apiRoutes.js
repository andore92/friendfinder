var express = require('express');
var friendsList = require('../data/friends')

var api = express.Router();



api.get('/friends', function(req, res) {
    res.json(friendsList);
});

api.post('/friends', function(req, res){
	// store data from the reqest as newUser
	var newUser = req.body
	// stores the scores array from that user in a new variable
	var newUserScoresArr = newUser.scores
	// empty array being set up to dump our totalDifference values into so we can find
	// our cloest match
	var compareUsersArr = []
	
	// for loop that loops over our array from friends.js
	for (var i=0; i<friendsList.length; i++){
		// variable setting our totalDifference value to 0
		var totalDifference = 0;
		// for loop that will loop over the array of scores that is in each object of the friends list array.
		// each time the loop iterates, we compare the score at the current index on the array newUserScoresArr
		// to the scores array at the current index of friendsList, then subtract between the two. 
		// having this inside Math.abs() will ensure we always receive a postive number
		for (var x=0; x<friendsList[i].scores[x]; x++){
			totalDifference += Math.abs(parseInt(newUserScoresArr[x]) - parseInt(friendsList[i].scores[x]));
		}
		// we then push the new totalDifference value to the compareUsersArr array, which will represent how
		// the new user posting to the api will compare to the specific user already in the api that we just 
		// iterated over in the for loop
		compareUsersArr.push(totalDifference);
	}
	
	// variable for storing which user on the compareUsersArr that our new user matches best with
	// default set to the first value in the array
	var matchScore = compareUsersArr[0];
	// variable for storing the match index, as the value at any index on the compareUsersArr array matches up with
	// the indexes on the friendsList array. 
	var matchIndex = 0;
	
	// for loop iterating through the compareUsersArr to find our match
	for (var i=0; i<compareUsersArr.length; i++) {
		// if the value at the current index of compareUsersArr is less than the value of matchScore
		// matchScore is then set to the value at the current index of compareUsersArr[i], as a lower
		// score indicates a better match
		// matchIndex is set to the value of i, so that we can use this value to 
		// find the matching index on our friendsList array. 
		if(compareUsersArr[i] < matchScore) {
				matchScore = compareUsersArr[i];
				matchIndex = i;
			}
	}
	// push our newUser to our friendsList array
	friendsList.push(newUser);
	// respond with the user in the api at the index based on our matchIndex variable, which allows us to draw a
	// link between the compareUsersArr and our original friendList array. 
	res.json(friendsList[matchIndex]);
});

module.exports = api
