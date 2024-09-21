import Image from "next/image";
import React from "react";

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-semibold">
        <span className="flex">Sponsored Ads</span>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="object-cover rounded-full"
        />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative flex w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/27034673/pexels-photo-27034673/free-photo-of-a-fox-sitting-behind-the-grass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27034673/pexels-photo-27034673/free-photo-of-a-fox-sitting-behind-the-grass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className="object-cover rounded-full w-6 h-6"
          />
          <span className="text-blue-500 font-medium">BigChef Longe</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum eos, itaque ipsam porro facilis quisquam, ratione a laudantium obcaecati harum sunt debitis."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum eos, itaque ipsam porro facilis quisquam, ratione a laudantium obcaecati harum sunt debitis. Officiis ea ducimus consectetur praesentium at quam?"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-sm rounded-lg">
          Lean more
        </button>
      </div>
    </div>
  );
}

export default Ad;
