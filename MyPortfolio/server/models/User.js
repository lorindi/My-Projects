const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  image: {
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  description: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
