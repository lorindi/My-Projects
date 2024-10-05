import { model, Schema, Types } from "mongoose";

interface IFollower {
  createdAt: Date;
  followerId: Types.ObjectId;
  followingId: Types.ObjectId;
}

const followerSchema = new Schema<IFollower>({
  createdAt: { type: Date, default: Date.now },
  followerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  followingId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
const Follower = model<IFollower>("Follower", followerSchema);
export default Follower;
