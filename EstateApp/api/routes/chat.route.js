import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controllers/chat.controllers.js";
const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);

export default router;
