import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import { JWT_SECRET } from "../constraints/constraints.js";

// Register function
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("register:", name, email, password);
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
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
    res.status(500).json({ message: "Server error" });
  }
};

// Login function with added logic
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("login:", email, password);

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User does not exist");
      return res.status(400).json({ message: "User does not exist" });
    }

    // Log the provided password and stored hashed password for debugging
    console.log("Provided password:", password);
    console.log("Stored hashed password:", user.password);

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password comparison result:", isPasswordValid); // Debug statement

    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      JWT_SECRET, // Use a secure secret or store it in environment variables
      { expiresIn: "1h" }
    );

    // Send the token as a cookie or in the response body
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout function
export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};
