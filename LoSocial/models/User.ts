import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  clerkId: string;
  username: string;
  email: string;
  password?: string;
  avatar?: string;
  cover?: string;
  name?: string;
  surname?: string;
  description?: string;
  city?: string;
  school?: string;
  work?: string;
  website?: string;
  createdAt: Date; 
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  clerkId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String,
  },
  avatar: {
    type: String,
  },
  cover: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  description: {
    type: String,
  },
  city: {
    type: String,
  },
  school: {
    type: String,
  },
  work: {
    type: String,
  },
  website: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
