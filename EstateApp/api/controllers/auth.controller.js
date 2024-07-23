import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET_KEY } from "../constraints/constraints.js";

// Register function
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("register:", name, email, password);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password in User model

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Log the saved user for debugging
    console.log("User registered successfully:", savedUser);

    // Send a success response
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

// Login function with added logic
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("login:", email, password);

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found!" });

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      password.trim(),
      user.password
    );
    console.log(password, user.password);
    console.log(await bcrypt.compare(password, user.password));
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credential" });

    // Generate cookie token and send to the user
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: false,
      },
      JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      // .json({ message: "Login Successful" });
      .json(userInfo);
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Invalid Credentials!" });
  }
};

// Logout function
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};


