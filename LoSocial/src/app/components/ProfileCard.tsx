import Image from "next/image";
import React from "react";

async function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/17514561/pexels-photo-17514561/free-photo-of-wooden-shed-near-water-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/20144254/pexels-photo-20144254/free-photo-of-vintage-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={40}
          height={40}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="flex flex-col h-20 gap-2 items-center">
        <span className="font-semibold">Ivan Dimitrov</span>
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
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard;
