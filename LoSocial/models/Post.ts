import { Schema, model, Types } from "mongoose";

interface IPost {
  desc: string;
  img?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: Types.ObjectId;
  comments: Types.ObjectId[];
  likes: Types.ObjectId[];
}

const postSchema = new Schema<IPost>({
  desc: { type: String, required: true },
  img: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
});

const Post = model<IPost>("Post", postSchema);
export default Post;
