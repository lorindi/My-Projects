"use client";
import React from "react";
import Search from "../search/Search";

function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div
        className="absolute brightness-75 top-0 left-0 w-full h-full bg-custom-image bg-cover bg-top z-[-5]
      smallPhone:h-[222px] smallPhone:phone:h-none 
      phone:h-[245px]  phone:tablet:h-none 
      tablet:h-[554px]
      web:w-full web:h-[655px] web:tablet:h-none"
      ></div>
      <section className="flex flex-col items-center smallPhone:relative phone:relative justify-center smallPhone:h-[222px] phone:h-[245px] tablet:py-[150px] tablet:h-[554px] web:h-[535px] w-full ">
        <h1
          className=" text-2xl font-bold text-center text-white font-['Inter Tight']
        web:text-[64px] web:mb-[45px]
        tablet:text-5xl tablet:mb-[50px]
        phone:text-2xl phone:mb-[10px]
        smallPhone:text-2xl smallPhone:mb-[15px]
        "
        >
          Heading
        </h1>
        <p
          className="text-base font-medium text-center text-white 
        web:text-[32px] web:mb-[65px]
        tablet:text-2xl tablet:mb-[70px]
        phone:text-base phone:mb-[40px]
        smallPhone:text-base smallPhone:mb-[40px]
        "
        >
          Subheading
        </p>
        <div
          className="web:mb-[70px] web:static web:phone:absolute-none tablet:static tablet:mb-[0px]
        phone:absolute phone:bottom-[-20px]
        smallPhone:absolute smallPhone:bottom-[-25px]"
        >
          <Search variant="default" />
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
