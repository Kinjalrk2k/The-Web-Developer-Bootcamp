const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

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

module.exports = mongoose.model("User", userSchema);
