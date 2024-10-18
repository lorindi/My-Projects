import Image from "next/image";
import React from "react";
import Comments from "./Comments";


function Post() {
  return (
    <div className="flex flex-col gap-4 mb-[10px] w-full rounded-lg bg-white p-4 shadow-md">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/28398729/pexels-photo-28398729/free-photo-of-silhouette-shadow-on-vibrant-green-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Lora Mitova</span>
        </div>
        <Image
          src="/more.png"
          alt=""
          width={10}
          height={10}
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* DESC */}
      <div className="flex flex-col">
        <p className="mb-[10px] px-[3px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          praesentium distinctio ipsam, accusamus vero soluta. Aliquam eveniet
          quaerat cupiditate similique, nobis ea fugit temporibus pariatur est
          quae praesentium dolores totam.
        </p>
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/28398729/pexels-photo-28398729/free-photo-of-silhouette-shadow-on-vibrant-green-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="absolute object-cover rounded-md"
          />
        </div>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-200">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline lg:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-200">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline lg:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-200">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline lg:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      
      <Comments />
    </div>
  );
}

export default Post;
