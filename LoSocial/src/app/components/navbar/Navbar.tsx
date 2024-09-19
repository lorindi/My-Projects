"use client";
import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loading from "../svgs/Loading";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
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
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* --------- Links* --------- */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt=""
              width={25}
              height={25}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt=""
              width={25}
              height={25}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt=""
              width={25}
              height={25}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/.png"
              alt=""
              width={25}
              height={25}
              className="w-4 h-4"
            />
            <span></span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/.png"
              alt=""
              width={25}
              height={25}
              className="w-4 h-4"
            />
            <span></span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl ">
          <Image src="/search.png" alt="" width={25} height={25} />
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>

        </div>
      </div>
      {/* --------- RIGHT --------- */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={25} height={25} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={25} height={25} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={25} height={25} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/noavatar.png" alt="" width={25} height={25} />
              <Link href="/sign-in" className="text-black">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
