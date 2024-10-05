import { Schema, model, Types } from "mongoose";

interface IStory {
  createdAt: Date;
  expiresAt: Date;
  img: string;
  userId: Types.ObjectId;
}

const storySchema = new Schema<IStory>({
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
  img: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Story = model<IStory>("Story", storySchema);
export default Story;
