import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // HASH THE PASSWORD
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  //CREATE A NEW USER AND SAVE TO DB
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });
  console.log(newUser);
};
export const login = (req, res) => {
  //db operations
  console.log("login endpoint");
};
export const logout = (req, res) => {
  //db operations
  console.log("logout endpoint");
};
