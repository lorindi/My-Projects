import Image from "next/image";
import Link from "next/link";
import React from "react";
import User, { IUser } from "../../models/User";

function UserInformationCard({ user }: { user: IUser}) {
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
          <span className="text-xl text-black">Loyd Fleming</span>
          <span className="text-sm">@jonathan</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo quasi
          voluptatibus perspiciatis.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} className="" />
          <p className="">
            Living in <b>Denver</b>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} className="" />
          <p className="">
            Want to <b>Edgar High School</b>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} className="" />
          <p className="">
            Works at <b>Apple Inc.</b>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} className="" />
            <Link
              href="https://lorindi.vercel.app/"
              className="text-blue-500 font-medium"
            >
              lora.mitova
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} className="" />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-[5px]">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
}

export default UserInformationCard;
