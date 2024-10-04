import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password?: string;
  clerkId: string;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
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
  clerkId: { 
    type: String, 
    required: true, 
    unique: true 
  }
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
