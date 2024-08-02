import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET_KEY } from "../constraints/constraints.js";

export const createAccount = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    //Check if the User already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //Create a new user
    const newUser = new User({
      email,
      name,
      password,
    });

    //Save the user to the database
    const saveUser = await newUser.save();

    //log the save user for debugging
    console.log("User created account successfully");

    res.status(201).json({ message: "User created account successfully" });
  } catch (err) {
    console.log("Create account error", err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User is not found!" });

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid)
      return res.status(401), json({ message: "Password is not valid!" });

    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        _id: user._id,
        isAdmin: false,
      },
      JWT_SECRET_KEY,
      { expiresIn: oneWeek }
    );

    const { password: userPassword, ...userInfo } = user;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: oneWeek,
    }).status(200).json(userInfo)
  } catch (err) {
    console.log(err);
  }
};
export const logout = (req, res) => {};
