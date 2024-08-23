import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seenBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  lastMessage: { 
    type: String 
},
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
