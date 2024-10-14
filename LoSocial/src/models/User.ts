import mongoose, { Types, Document } from "mongoose";
import Follower from "@/models/Follower";
export interface IUser extends Document {
  // _id: string;
  clerkId: string;
  email: string;
  username: string;
  avatar?: string;
  cover?: string;
  name?: string;
  surname?: string;
  description?: string;
  city?: string;
  school?: string;
  work?: string;
  website?: string;
  createdAt: Date;
  posts: Types.ObjectId[];
  comments: Types.ObjectId[];
  likes: Types.ObjectId[];
  followers: Types.ObjectId[];
  followings: Types.ObjectId[];
  followRequestsSent: Types.ObjectId[];
  followRequestsReceived: Types.ObjectId[];
  blocks: Types.ObjectId[];
  blockedBy: Types.ObjectId[];
  stories: Types.ObjectId[];
  password?: string;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: { type: String, unique: true, required: true },
  avatar: { type: String, required: false },
  cover: { type: String },
  name: { type: String },
  surname: { type: String },
  description: { type: String },
  city: { type: String },
  school: { type: String },
  work: { type: String },
  website: { type: String },
  createdAt: { type: Date, default: Date.now },
  posts: [{ type: Types.ObjectId, ref: "Post" }],
  comments: [{ type: Types.ObjectId, ref: "Comment" }],
  likes: [{ type: Types.ObjectId, ref: "Like" }],
  followers: [{ type: Types.ObjectId, ref: "Follower" }],
  followings: [{ type: Types.ObjectId, ref: "Follower" }],
  followRequestsSent: [{ type: Types.ObjectId, ref: "FollowRequest" }],
  followRequestsReceived: [{ type: Types.ObjectId, ref: "FollowRequest" }],
  blocks: [{ type: Types.ObjectId, ref: "Block" }],
  blockedBy: [{ type: Types.ObjectId, ref: "Block" }],
  stories: [{ type: Types.ObjectId, ref: "Story" }],
  password: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
