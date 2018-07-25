var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");
require("./app/data/friends");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});