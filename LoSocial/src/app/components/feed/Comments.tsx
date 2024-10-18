import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/27913669/pexels-photo-27913669/free-photo-of-portrait-of-a-man-with-a-mustache.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={16}
          height={16}
          className="w-8 h-8 rounded-full cursor-pointer object-cover"
        />
        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment ..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/27913669/pexels-photo-27913669/free-photo-of-portrait-of-a-man-with-a-mustache.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
          />

          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Lora Mitova</span>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              mollitia a accusamus tempora animi? Sapiente, ducimus? Quod ut
              repellat delectus quasi officiis repellendus vel alias sequi? Non
              nostrum tempora magnam.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
                <div>Reply</div>
              </div>
            </div>
          </div>

          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
