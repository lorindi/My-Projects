import { Schema, model, Types } from "mongoose";

interface IComment {
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  userId: Types.ObjectId;
  postId: Types.ObjectId;
  likes: Types.ObjectId[];
}

const commentSchema = new Schema<IComment>({
  desc: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like" }]
});
const Comment = model<IComment>("Comment", commentSchema);
export default Comment;
