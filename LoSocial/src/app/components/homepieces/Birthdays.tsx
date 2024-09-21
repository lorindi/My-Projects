import Image from "next/image";
import Link from "next/link";
import React from "react";

function Birthdays() {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md text-sm gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/28398729/pexels-photo-28398729/free-photo-of-silhouette-shadow-on-vibrant-green-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span>Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white  text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image
          src="/gift.png"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-full"
        />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays;
