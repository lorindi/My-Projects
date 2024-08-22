import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  // getUser,
  getUsers,
  updateUser,
  deleteUser,
  savePost,
  profilePosts,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", getUsers);
// router.get("/search/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/save", verifyToken, savePost);
router.get("/profilePosts/:id", verifyToken, profilePosts);
export default router;
