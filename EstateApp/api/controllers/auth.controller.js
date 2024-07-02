import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // HASH THE PASSWORD
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

};
export const login = (req, res) => {
  //db operations
  console.log("login endpoint");
};
export const logout = (req, res) => {
  //db operations
  console.log("logout endpoint");
};
