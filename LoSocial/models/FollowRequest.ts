import { Schema, model, Types } from "mongoose";

interface IFollowRequest {
  createdAt: Date;
  senderId: Types.ObjectId;
  receiverId: Types.ObjectId;
}

const followRequestSchema = new Schema<IFollowRequest>({
  createdAt: { type: Date, default: Date.now },
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
const FollowRequest = model<IFollowRequest>(
  "FollowRequest",
  followRequestSchema
);
export default FollowRequest;
