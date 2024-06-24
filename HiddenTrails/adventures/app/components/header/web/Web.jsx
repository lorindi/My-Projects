"use client";
import Link from "next/link";
import Btn from "../../buttons/Buttons";
import { usePathname } from "next/navigation";

export default function Web() {
  const pathname = usePathname();

  const signInButtonClass =
    pathname === "/"
      ? "h-11 px-4 py-3 justify-center items-center flex text-center font-medium text-gray-900 rounded-full border-2 border-neutral-50 bg-neutral-50"
      : "h-11 px-4 py-3 justify-center items-center flex text-center font-medium bg-neutral text-gray-900 border-2 rounded-full border-blue-950";

  return (
    <nav className="flex items-center w-full h-full justify-around">
      <Link
        className="text-center text-gray-900 text-2xl font-medium font-['Inter Tight']"
        href="/"
      >
        LOGO
      </Link>

      <div className="flex items-center">
        <Btn
          type="button"
          variant="transparent"
          text="Explore"
          link="/explore"
        />
        <div className="mr-[30px]">
          <Btn type="button" variant="transparent" text="Menu" link="/menu" />
        </div>
        <Btn type="button" variant="transparent" text="Create" link="/create" />
        <Btn
          type="button"
          variant="transparent"
          text="My tours"
          link="/my-tours"
        />
        <div>
          <Btn type="button" variant="transparent" text="Menu" link="/menu" />
        </div>
        {/* <div className="mx-2.5">
          <Button
            variant="secondary-outlined"
            text="Logout"
            type={"submit"}
            onClick={logoutUser}
          />
        </div> */}

        <div className="mx-2.5">
          <Btn
            type="button"
            variant="outlined"
            text="Sign in"
            link="/login"
            className={signInButtonClass}
          />
        </div>
        <div className="mx-2.5">
          <Btn
            type="button"
            variant="filled"
            text="Create Account"
            link="/register"
          />
        </div>
      </div>
    </nav>
  );
}
