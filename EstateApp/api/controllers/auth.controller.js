import bcrypt from "bcrypt"
export const register = (req, res) => {
  const {username, email, password} = req.body
 
  // HASH THE PASSWORD

  //CREATE A NEW USER AND SAVE TO DB

};
export const login = (req, res) => {
  //db operations
  console.log("login endpoint");
};
export const logout = (req, res) => {
  //db operations
  console.log("logout endpoint");
};
