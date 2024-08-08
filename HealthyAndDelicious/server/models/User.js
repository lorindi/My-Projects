import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    match:  /^[a-zA-Z0-9]+@.[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z]+)*$/,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});
const User = mongoose.model("User", userSchema);
export default User;
