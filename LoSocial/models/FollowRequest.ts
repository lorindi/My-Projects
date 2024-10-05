import { Schema, model, Types } from "mongoose";

interface IFollowRequest {
  createdAt: Date;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
}

const followRequestSchema = new Schema<IFollowRequest>({
  createdAt: { type: Date, default: Date.now },
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
const FollowRequest = model<IFollowRequest>(
  "FollowRequest",
  followRequestSchema
);
export default FollowRequest;
