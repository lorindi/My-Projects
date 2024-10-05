import { Schema, model, Types } from "mongoose";

interface ILike {
  createdAt: Date;
  user: Types.ObjectId;
  post?: Types.ObjectId;
  comment?: Types.ObjectId;
}

const likeSchema = new Schema<ILike>({
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  comment: { type: Schema.Types.ObjectId, ref: "Comment" },
});

const Like = model<ILike>("Like", likeSchema);
export default Like;
