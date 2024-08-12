import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  bedroom: {
    type: Number,
    required: true,
  },
  bathroom: {
    type: Number,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Property1', 'Property2'], 
    required: true,
  },
  property: {
    type: String,
    enum: ['Property1', 'Property2'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Post = mongoose.model("Post", postSchema);
export default Post;
