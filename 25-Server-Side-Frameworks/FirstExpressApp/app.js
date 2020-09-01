var express = require("express");
var app = express();

// req - request    res - response
app.get("/", function (req, res) {
  res.send("Hi there!");
});

app.get("/bye", function (req, res) {
  res.send("Goodbye!");
});

app.get("/dog", function (req, res) {
  res.send("Woof!");
});

app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName
    res.send("Welcome to the "+ subreddit.toUpperCase() + " subreddit!")
});

app.get("*", function (req, res) {
  res.send("You are a star!");
});

// listen for requests (start the server)
app.listen(3000, process.env.IP, function () {
  console.log("Server has started on port 3000!");
});
