import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";
import connectionToDatabase from "../../../lib/mongoose";
import User from "../../../models/User";
import Block from "../../../models/Block";
import { auth } from "@clerk/nextjs/server";
import { IUser } from "../../../models/User"; 

async function ProfilePage({ params }: { params: { id: string } }) {
  await connectionToDatabase();
  console.log("Connected to database");

  const { id: id } = params;

  console.log(id, "params.id");

  const user = await User.findOne({ clerkId: id }).lean();
  console.log(user, "user");

  if (!user) return null;

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
                src={user.cover || "/noAvatar.png"}
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Lora Mitova</h1>
            <div className="flex items-center justify-center gap-12 bg-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.3K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        {/* <RightMenu userId={userId} /> */}
      </div>
    </div>
  );
}

export default ProfilePage;
