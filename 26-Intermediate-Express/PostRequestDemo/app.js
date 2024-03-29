var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/addfriend", function (req, res) {
  var newFriend = req.body.newfriend;

  if (newFriend.trim() !== "") {
    // a samll fix for empty input :P
    friends.push(newFriend);
  }
  res.redirect("/friends");
});

app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
});

app.listen(3000, function () {
  console.log("Server started on PORT 3000!");
});
