import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* --------- LEFT --------- */}
      <div className="md:hidden lg:block w-[20%]">
        <Link className="font-bold text-xl text-blue-600" href="/">
          LoSocial
        </Link>
      </div>
      {/* --------- CENTER* --------- */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* --------- Links* --------- */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/home" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span></span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span></span>
          </Link>
        </div>
      </div>
      {/* --------- RIGHT --------- */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
