"use client";
import React from "react";

function UserInfoCardInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  return (
    <>
      <button className="w-full bg-blue-500 text-white text-sm rounded-md p-[5px]">
      {isFollowing ? "Following" : isFollowingSent ? "Friend Request Sent" : "Follow"}

      </button>
      <span className="text-red-400 self-end text-xs cursor-pointer">
        {isUserBlocked ? "Unblock User" : "Block User"}
      </span>
    </>
  );
}

export default UserInfoCardInteraction;
