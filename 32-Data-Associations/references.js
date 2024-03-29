const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/blog_demo_2", {
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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId, //  array of object ids
      ref: "Post",
    },
  ],
});
var User = mongoose.model("User", userSchema);

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher",
// });

// Post.create(
//   {
//     title: "How to cook the best burger? Pt.3 ",
//     content: "mind*",
//   },
//   function (err, post) {
//     User.findOne({ email: "bob@gmail.com" }, function (err, foundUser) {
//       if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function (err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// );

User.find({ email: "bob@gmail.com" })
  .populate("posts")
  .exec(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
