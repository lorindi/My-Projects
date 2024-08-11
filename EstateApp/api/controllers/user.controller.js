import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const {id} = req.params.id
  try {
    const users = await User.find(id);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users!" });
  }
};

export const getUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id });
    res.status(200).json(user);
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to get users!" });
  }
};


export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      inputs.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(id, { ...inputs, avatar }, { new: true });

    const { password: userPassword, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};


export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    await User.findByIdAndDelete({id});
    res.status(200).json({message: "User deleted"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to delete user!" });
  }
};
