import connectionToDatabase from "@/lib/mongoose";
import User, { IUser } from "@/models/User";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

async function ProfileCard() {
  await connectionToDatabase();

  const { userId } = auth();

  if (!userId) return null;

  const user = await User.findOne({ clerkId: userId }).lean<IUser>();

  if (!user) return null;


  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          width={40}
          height={40}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="flex flex-col h-20 gap-2 items-center">
        <span className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/20144254/pexels-photo-20144254/free-photo-of-vintage-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3  object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/20144254/pexels-photo-20144254/free-photo-of-vintage-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3  object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/20144254/pexels-photo-20144254/free-photo-of-vintage-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3  object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">
            {user.followers.length} Followers
          </span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
