import mongoose from "mongoose";

const postDetailSchema = new mongoose.Schema({
  desc: {
    type: String,
    // required: true,
  },
  utilities: {
    type: String,
  },
  pet: {
    type: String,
  },
  income: {
    type: String,
  },
  size: {
    type: Number,
  },
  school: {
    type: Number,
  },
  bus: {
    type: Number,
  },
  restaurant: {
    type: Number,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});
const PostDetail = mongoose.model("PostDetail", postDetailSchema);
export default PostDetail;
