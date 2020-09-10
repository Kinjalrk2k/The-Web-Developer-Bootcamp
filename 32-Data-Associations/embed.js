const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],  //  array of posts
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger",
// });
// newUser.posts.push({
//   title: "How to brew Polyjuice Potion",
//   content: "Just kidding. Go to potions class to learn it!"
// })

// newUser.save(function (err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious!",
// });
// newPost.save(function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: "Hermione Granger" }, function (err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
    user.posts.push({
      title: "3 Things that I really Hate",
      content: "Voldemort. Voldemort. Voldemort.",
    });
    user.save(function (err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
