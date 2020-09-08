const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cat_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

// Schema for db
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

// Compiling to model
var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil",
// });
// george.save(function (err, cat) {
//   if (err) {
//     console.log("Something went wrong!");
//   } else {
//     console.log("We just saved in the database");
//     console.log(cat);
//   }
// });

// Cat.create(
//   {
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland",
//   },
//   function (err, cat) {
//     if (err) {
//       console.log("Something went wrong!");
//     } else {
//       console.log("We just saved in the database");
//       console.log(cat);
//     }
//   }
// );

Cat.find({}, function (err, cats) {
  if (err) {
    console.log("Oh no! Error!");
    console.log(err);
  } else {
    console.log("All the cats!");
    console.log(cats);
  }
});
