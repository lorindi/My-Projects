import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.js";
// import {JWT_SECRET_KEY} from '../constraints/constraints.js'

export const createAccount = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if the User already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //Create a new user
    const newUser = new User({
      name,
      email,
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

export const signIn = (req, res) => {};
export const logout = (req, res) => {};
