"use client";
import Btn from "../buttons/Buttons";

import * as React from "react";
import InputField from "../input-fields/InputFields";

const LoginForm = () => {

  return (
    <div className="flex flex-col items-center justify-start  w-full">
      <h2
        className="mb-[40px] text-center  text-white font-medium font-['Inter'] text-[24px]
      web:text-[32px]
      tablet:text-[32px]
      phone:text-[24px]
      "
      >
        Sign In
      </h2>
      <form
        className="flex  items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] min-h-[451px] w-full
        web:w-[582px] web:min-h-[602px] 
        tablet:w-[582px] tablet:min-h-[602px] 
        phone:w-[361px] phone:min-h-[441px] 
        "
      >
        <div
          className="
            web:w-[400px] web:h-[60px] 
            tablet:w-[400px] tablet:h-[60px]
            phone:w-[320px] phone:h-[43px] 
            smallPhone:w-[288px] smallPhone:h-[48px]
            sm:w-72 sm:h-[43px]
            md:w-80 md:h-[43px]
            lg:w-[400px] lg:h-[60px]
          "
        ></div>

        <div
          className="justify-center items-center gap-2 inline-flex 
          web:w-[400px] web:h-[17px]
          tablet:w-[400px] tablet:h-[17px] "
        >
          <div
            className="border border-zinc-400 h-[1px] w-[126px]
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
          "
          ></div>

          <div
            className="text-center text-zinc-400 font-medium font-['Inter Tight'] text-[10px]
          web:text-sm tablet:text-sm phone:text-[10px]
          "
          >
            OR
          </div>

          <div
            className="border border-zinc-400 h-[1px] w-[126px]
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
          "
          ></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <InputField
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <div
          className="h-[43px] w-72
        web:w-[400px] web:h-[43px] 
        tablet:w-[400px] tablet:h-[43px]
        phone:w-80 phone:h-[43px] 
        "
        >
          <Btn type="submit" variant="filled" text="Login" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
