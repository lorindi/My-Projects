import { Schema, model, Types } from "mongoose";

interface ILike {
  createdAt: Date;
  userId: Types.ObjectId;
  postId?: Types.ObjectId;
  commentId?: Types.ObjectId;
}

const likeSchema = new Schema<ILike>({
  createdAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  commentId: { type: Schema.Types.ObjectId, ref: "Comment" },
});

const Like = model<ILike>("Like", likeSchema);
export default Like;
