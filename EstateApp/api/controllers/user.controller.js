import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to get user!" });
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
  const updates = req.body;

  // Authorization check
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  try {
    // Check if the updates include a password
    if (updates.password) {
      // Validate password (example: minimum length of 6)
      if (updates.password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(updates.password, 10);
      updates.password = hashedPassword;
    }

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updates }, // Only update fields provided in the request body
      { new: true, runValidators: true } // Return the updated document and apply schema validations
    );

    // Check if the user was found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send success response with updated user data
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const updates = req.body;
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to delete user!" });
  }
};
