var Post = require("./models/post");
var User = require("./models/user");

Post.create(
  {
    title: "How to cook the best burger? Pt.4 ",
    content: "Cheeeeeese!!!",
  },
  function (err, post) {
    User.findOne({ email: "bob@gmail.com" }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save(function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
);
