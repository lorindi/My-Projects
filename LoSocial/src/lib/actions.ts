"use server";

import { auth } from "@clerk/nextjs/server";
import connectionToDatabase from "./mongoose";
import User, { IUser } from "@/models/User";
import Follower from "@/models/Follower";
import FollowRequest from "@/models/FollowRequest";

export const switchFollow = async (loggedInUserId: Object) => {
  // Свързване с базата данни
  connectionToDatabase();

  // Извличане на текущия потребителски ID от auth
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("User is not authenticated!");

  // Намиране на текущия потребител в базата данни
  const user = await User.findOne({ clerkId: currentUserId });
  if (!user) throw new Error("User not found!");

  try {
    // Проверка дали вече съществува следване
    const existingFollow = await Follower.findOne({
      followerId: user?._id,
      followingId: loggedInUserId,
    });
    if (existingFollow) {
      // Премахване на съществуващото следване
      await Follower.findByIdAndDelete({ _id: existingFollow._id });
    } else {
      // Проверка дали има съществуваща заявка за следване
      const existingFollowRequest = await FollowRequest.findOne({
        senderId: user?._id,
        receiverId: loggedInUserId,
      });

      if (existingFollowRequest) {
        // Премахване на съществуваща заявка за следване
        await FollowRequest.findByIdAndDelete({
          _id: existingFollowRequest._id,
        });
      } else {
        // Създаване на нова заявка за следване
        await FollowRequest.create({
          data: {
            senderId: user?._id,
            receiverId: loggedInUserId,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
