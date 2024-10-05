import { model, Schema, Types } from "mongoose";

interface IFollower {
  createdAt: Date;
  follower: Types.ObjectId;
  following: Types.ObjectId;
}

const followerSchema = new Schema<IFollower>({
  createdAt: { type: Date, default: Date.now },
  follower: { type: Schema.Types.ObjectId, ref: "User", required: true },
  following: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
const Follower = model<IFollower>("Follower", followerSchema);
export default Follower;
