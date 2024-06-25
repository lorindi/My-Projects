"use client";
import Link from "next/link";
import Btn from "../../buttons/Buttons";
import { usePathname } from "next/navigation";

export default function Web() {
  const pathname = usePathname();

  const session = true;
  const isAdmin = true;

  const signInButtonClass =
    pathname === "/"
      ? "px-5 py-3 justify-center items-center flex text-center font-medium text-gray-900 rounded-full border-2 border-neutral-50 bg-neutral-50"
      : "flex items-center font-medium tracking-wide justify-center px-5 py-3 text-center border-2 border-cyan-600 rounded-full hover:border-cyan-700 hover:transition-all hover:duration-700 hover:text-cyan-700";

  return (
    <nav className="flex items-center w-full h-full justify-around">
      <Link
        className="text-center text-gray-900 text-2xl font-medium font-['Inter Tight']"
        href="/"
      >
        LORINDI
      </Link>

      <div className="flex items-center">
        <Btn type="button" variant="transparent" text="Create" link="/create" />

        <Btn type="button" variant="transparent" text="About" link="/about" />

        <Btn
          type="button"
          variant="transparent"
          text="Contacts"
          link="/contacts"
        />

        <Btn
          type="button"
          variant="transparent"
          text="My adventures"
          link="/my-adventures"
        />

        <div className="mx-2.5">
          <Btn
            variant="outlined"
            text="Logout"
            type={"submit"}
          />
        </div>

        <div className="mx-2.5">
          <Btn
            type="button"
            text="Sign in"
            link="/login"
            variant="outlined"
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
