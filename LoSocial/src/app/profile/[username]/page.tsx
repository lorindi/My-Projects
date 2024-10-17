import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";
import connectionToDatabase from "../../../lib/mongoose";
import User, { IUser } from "../../../models/User";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import Block, { IBlock } from "@/models/Block";

async function ProfilePage({ params }: { params: { username: string } }) {
  await connectionToDatabase();
  const username = params.username;

  const user = await User.findOne({ username }).lean<IUser>();
  console.log(user, "user");

  if (!user) return notFound;

  const { userId: currentUserId } = auth();

  const viewUserId = user._id;
  const loggedInUserId = (await User.findOne({ clerkId: currentUserId }))?._id;

  let isBlocked;

  // Ако потребителят разглежда собствения си профил
  if (viewUserId === loggedInUserId) {
    isBlocked = true;
  } else if (currentUserId) {
    // Проверка за блокиране в базата данни, само ако потребителят не разглежда собствения си профил
    const res = await Block.findOne({
      blockerId: viewUserId,
      blockedId: loggedInUserId,
    });
  
    isBlocked = !!res; // true ако е намерен запис за блокиране, false ако не
  } else {
    isBlocked = false; // Ако потребителят не е логнат
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user.posts.length}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user.followers.length}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user.followings.length}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed user={user} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;
