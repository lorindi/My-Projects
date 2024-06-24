"use client";

import Link from "next/link";
import Btn from "../../../buttons/Buttons";
import Search from "@/app/components/Search/Search";

const TabletNavigation = ({ isAuthenticated, handleNavClose }) => {
  const handleClick = () => {
    if (handleNavClose) {
      handleNavClose();
    }
  }

  return (
    <nav className="absolute flex flex-col w-full bg-neutral-50 h-[404px]">
      <Link
        href="/"
        className="flex justify-center items-center text-center text-gray-900 font-medium text-2xl p-6"
      >
        LOGO
      </Link>

      <Search variant="tabletNavigationSearch" handleNavClose={handleNavClose}/>

      <div className="flex items-center justify-center w-full mt-[30px]">
        <div className="flex flex-col items-start w-full tablet:max-w-[610px] ">
          <Btn
            type="button"
            variant="transparent"
            text="Explore"
            link="/explore"
            onClick={handleClick}
          />

          {isAuthenticated ? (
            <>
              <Btn
                type="button"
                variant="transparent"
                text="Create"
                link="/create"
                onClick={handleClick}
              />
              <Btn
                type="button"
                variant="transparent"
                text="My tours"
                link="/my-tours"
                onClick={handleClick}
              />
              <div className="flex mt-[30px]">
                <div className="mx-2.5 w-[182px]">
                  <Btn
                    type="button"
                    variant="outlined"
                    text="Menu"
                    link="/menu"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Btn
                type="button"
                variant="transparent"
                text="Menu"
                link="/menu"
                onClick={handleClick}
              />
              <div className="flex mt-[30px]">
                <div className="mx-2.5 w-[200px]">
                  <Btn
                    type="button"
                    variant="outlined"
                    text="Sign in"
                    link="/login"
                    fullWidth
                    onClick={handleClick}
                  />
                </div>
                <div className="mx-2.5 w-[200px]">
                  <Btn
                    type="button"
                    variant="filled"
                    text="Create Account"
                    link="/register"
                    width="w-[182px]"
                    fullWidth
                    onClick={handleClick}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TabletNavigation;
