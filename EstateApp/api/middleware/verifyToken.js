import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constraints/constraints.js";


export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;
    console.log(req.userId, payload.id, req);
    next();
  });
};
