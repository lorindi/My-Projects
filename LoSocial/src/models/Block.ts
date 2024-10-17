import mongoose,{ model, Schema, Types } from "mongoose";

export interface IBlock extends Document {
  createdAt: Date;
  blockerId: Types.ObjectId;
  blockedId: Types.ObjectId;
}

const blockSchema = new Schema<IBlock>({
  createdAt: { type: Date, default: Date.now },
  blockerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  blockedId: { type: Schema.Types.ObjectId, ref: "User", required: true },

});
const Block = mongoose.models.Block || mongoose.model<IBlock>("Block", blockSchema);
export default Block
