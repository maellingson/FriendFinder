var express = require("express");
var path = require("path");


var app = express();

function htmlRoutes(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })
}

