var express = require("express");
var app = express();

var animalSounds = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof",
};

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
  var animal = req.params.animal;
  var sendStr = "The " + animal + " says '" + animalSounds[animal] + "'";
  res.send(sendStr);
});

app.get("/repeat/:msg/:times", function (req, res) {
  var msg = req.params.msg;
  var times = Number(req.params.times);
  var sendStr = "";
  for (var i = 0; i < times; i++) {
    sendStr += msg + " ";
  }
  res.send(sendStr);
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, process.env.IP, function () {
  console.log("Server has started on port 3000!");
});
