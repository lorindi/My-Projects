import React from "react";
import Post from "./Post";
import User, { IUser } from "../../models/User";

function Feed({ user }: { user: IUser }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-[#F1F5F9] mb-10">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
