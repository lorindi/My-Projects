import Image from "next/image";
import Link from "next/link";
import React from "react";
import User, { IUser } from "../../../models/User";
import { auth } from "@clerk/nextjs/server";
import Block from "@/models/Block";
import Follower from "@/models/Follower";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

async function UserInformationCard({ user }: { user: IUser }) {
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId } = auth();
  const loggedInUserId = (await User.findOne({ clerkId: userId }))?._id;
  console.log('typeof', typeof loggedInUserId);
  

  if (userId) {
    const blockRes = await Block.findOne({
      blockerId: loggedInUserId,
      blockedId: user._id,
    });
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await Follower.findOne({
      followerId: loggedInUserId,
      followingId: user._id,
    });
    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReqRes = await Block.findOne({
      senderId: loggedInUserId,
      receiverId: user._id,
    });
    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">{user.email}</span>
        </div>
        {user.description && <p>{user.description}</p>}

        {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} className="" />
            <p className="">
              Living in <b>{user.city}</b>
            </p>
          </div>
        )}

        {user.school && (
          <div className="flex items-center gap-2">
            <Image
              src="/school.png"
              alt=""
              width={16}
              height={16}
              className=""
            />
            <p className="">
              Want to <b>{user.school}</b>
            </p>
          </div>
        )}

        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} className="" />
            <p className="">
              Works at <b>{user.work}</b>
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Image
                src="/link.png"
                alt=""
                width={16}
                height={16}
                className=""
              />
              <Link
                href="https://lorindi.vercel.app/"
                className="text-blue-500 font-medium"
              >
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} className="" />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        {userId && loggedInUserId && (
          <UserInfoCardInteraction
            userId={userId}
            currentUserId={userId}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
}

export default UserInformationCard;
