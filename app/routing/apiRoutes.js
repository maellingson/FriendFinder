var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity

        };

        var newFriend = req.body;
        var userScores = newFriend.scores;

        var totalDifference;

        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        friendsData.push(newFriend);
        res.json(bestMatch);
    });
};

