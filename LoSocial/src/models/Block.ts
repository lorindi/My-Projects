import { model, Schema, Types } from "mongoose";

interface IBlock {
  createdAt: Date;
  blockerId: Types.ObjectId;
  blockedId: Types.ObjectId;
}

const blockSchema = new Schema<IBlock>({
  createdAt: { type: Date, default: Date.now },
  blockerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  blockedId: { type: Schema.Types.ObjectId, ref: "User", required: true },

});

const Block = model<IBlock>('Block', blockSchema)
export default Block
