"use client";
import React, { useState } from "react";

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

    const [userState, setUserState] = useState({
        following:isFollowing,
        blocked:isUserBlocked,
        followingRequestSent:isFollowingSent,

    })
  return (
    <>
      <form action="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-[5px]">
          {isFollowing
            ? "Following"
            : userState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 self-end text-xs cursor-pointer">
          {userState.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
}

export default UserInfoCardInteraction;
