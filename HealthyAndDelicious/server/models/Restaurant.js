import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    unique: true,
  },
  location: {
    type: String,
    required: true,
    minLength: 2,
  },
  address: {
    type: String,
    required: true,
    minLength: 2,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: Schema.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
