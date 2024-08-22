import mongoose from "mongoose";

const savedPost = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// savedPost.index({ ownerId: 1, postId: 1 }, { unique: true });
const SavedPost = mongoose.model("SavedPost", savedPost);
export default SavedPost;
