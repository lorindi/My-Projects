import Image from "next/image";
import React from "react";

function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 relative">
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
    </div>
  );
}

export default ProfileCard;
