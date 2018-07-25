var express = require("express");

var app = express();

var friendsData = require("../data/friends.js");

module.exports = function (app){
    app.get("api/friends", function (req, res){
        res.json(friendsData);
    })
}

app.get("/api/friends", function (req, res) {
    res.JSON(friendsData)
});

app.post("/api/friends", function (req, res) {
    var newFriend = {
    name: req.body.name,
    photo: req.body.photo,
    scores: []
}


    
    var scoresArray = [];
    for (var i = 0; i < newFriend.scores.length; i++) {
        scoresArray.push(parseInt(newFriend.scores[i]))
    }

    newFriend.scores = scoresArray;

    var compareScores = [];
    for (var i = 0; i < friendsData.length; i++) {
        var activeCompare = 0;
        for (var x = 0; x < newFriend.scores.length; x++) {
            activeCompare += math.abs(newFriend.scores[x] - friendsData[i].scores[x])
            compareScores.push(activeCompare);
        }
        var compatScores = 0;
        for (var i = 1; i < friendsData.length; i++) {
            if (compareScores[i] <= compareScores[compatScores]) {
                compatScores = i;
            }
        }
        var bestFriend = friendsData[compatScores];
        res.json(bestFriend);
        friendsData.push(newFriend);
    }

})

