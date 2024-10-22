"use server";

import { auth } from "@clerk/nextjs/server";
import connectionToDatabase from "./mongoose";
import User, { IUser } from "@/models/User";
import Follower from "@/models/Follower";
import FollowRequest from "@/models/FollowRequest";

export const switchFollow = async (userId: string) => {
  connectionToDatabase();
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("User is not authenticated!");
  const user = await User.findOne({ clerkId: currentUserId });
  if (!user) throw new Error("Current user not found!");

  try {
    const existingFollow = await Follower.findOne({
      followerId: user?._id,
      followingId: userId,
    });
    if (existingFollow) {
      await Follower.findByIdAndDelete(existingFollow._id);
    } else {
      const existingFollowRequest = await FollowRequest.findOne({
        senderId: user?._id,
        receiverId: userId,
      });
      if (existingFollowRequest) {
        await FollowRequest.findByIdAndDelete(existingFollowRequest._id);
      } else {
        await FollowRequest.create({
          senderId: user?._id,
          receiverId: userId,
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
