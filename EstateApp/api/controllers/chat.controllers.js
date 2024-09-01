import Chat from "../models/Chat.js";
import User from "../models/User.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chats = await Chat.find({ ownerId: tokenUserId }).populate(
      "messages seenBy",
      "id name avatar"
    );
    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Find the chat by ID and ensure the user is part of the chat
    const chat = await Chat.findOne({
      _id: req.params.id,
      ownerId: tokenUserId,
    })
      .populate({
        path: "messages",
        options: { sort: { createdAt: "asc" } },
      })
      .exec();

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    // Update the chat's seenBy array to include the user if not already present
    if (!chat.seenBy.includes(tokenUserId)) {
      chat.seenBy.push(tokenUserId);
      await chat.save();
    }

    res.status(200).json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const { receiverId } = req.body;

  try {
    const newChat = new Chat({
      ownerId: [tokenUserId, req.body.receiverId],
    });

    const saveChat = await newChat.save();
    res.status(200).json(saveChat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Find the chat and ensure the user is part of it
    const chat = await Chat.findOneAndUpdate(
      {
        _id: req.params.id,
        ownerId: tokenUserId,
      },
      {
        $addToSet: { seenBy: tokenUserId }, // Adds the user to the seenBy array if not already present
      },
      { new: true } // Return the updated document
    );

    if (!chat) {
      return res
        .status(404)
        .json({ message: "Chat not found or you don't have access!" });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};
