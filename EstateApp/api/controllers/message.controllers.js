import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  
  const { text } = req.body;

  try {
    // Check if the chat exists and if the user is a part of it
    const chat = await Chat.findOne({
      _id: chatId,
      ownerId: tokenUserId,
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    // Create the new message
    const message = new Message({
      text,
      chatId: chatId,
      ownerId: tokenUserId,
    });

    await message.save();

    // Update the chat: add message, set last message, and reset seenBy to the current user
    chat.messages.push(message._id);
    chat.lastMessage = text;
    chat.seenBy = [tokenUserId]; // Reset seenBy to only the current user

    await chat.save();

    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};
