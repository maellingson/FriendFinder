var friendsData = require("../data/friends.js");
var express = require("express");
var app = express();

module.exports = function (app) {
    app.get("api/friends", function (req, res) {
        res.json(friendsData);
    })
}

app.post("/api/friends", function (req, res) {
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var match = 0;

    for (var i = 0; i < friendsData.length; i++) {
        var diffScores = 0;
        for (var j = 0; j < newFriendScores.length; j++) {
            diffScores += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        scoresArray.push(diffScores);
    }
    for (var i=0; i<scoresArray.length; i++){
        if (scoresArray[i] <= scoresArray[match]){
            match = i;
        }  
    }

    var bestFriend = friendsData[match];
    res.json(bestFriend);
    friendsData.push(req.body);
});

