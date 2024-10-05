import { model, Schema, Types } from "mongoose";

interface IBlock {
  createdAt: Date;
  blocker: Types.ObjectId;
  blocked: Types.ObjectId;
}

const blockSchema = new Schema<IBlock>({
  createdAt: { type: Date, default: Date.now },
  blocker: { type: Schema.Types.ObjectId, ref: "User", required: true },
  blocked: { type: Schema.Types.ObjectId, ref: "User", required: true },

});

const Block = model<IBlock>('Block', blockSchema)
export default Block
