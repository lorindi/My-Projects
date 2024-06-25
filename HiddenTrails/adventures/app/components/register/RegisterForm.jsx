"use client";
import Btn from "../buttons/Buttons";
import * as React from "react";
import InputField from "../input-fields/InputFields.jsx";
import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import GoogleButton from "../buttons/ButtonGoogle";
import { useRouter } from "next/navigation"; 

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <h2 className="mb-[40px] text-center text-white font-medium text-[24px]
        web:text-[32px]
        tablet:text-[32px]
        phone:text-[24px]
       
    ">
        Create Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-evenly flex-col bg-neutral-50 w-full min-h-[673px] rounded-[5px] 
          web:rounded-[50px] web:w-[582px] web:h-[776px] 
          tablet:rounded-[20px] tablet:w-[582px] tablet:h-[776px] 
          phone:w-[361px] phone:min-h-[713px] 
          "
      >
        <div
          className=" text-center 
        web:flex tablet:flex phone:flex smallPhone:hidden hidden"
        >
          <span
            className="text-sky-950 font-normal  
          web:text-base tablet:text-base phone:text-sm text-sm tracking-wide"
          >
            Already have an account?
          </span>
          <span
            className="text-white font-normal 
          web:text-base tablet:text-base phone:text-sm text-sm"
          ></span>
          <span
            className="text-blue-500 font-normal 
          web:text-base tablet:text-base phone:text-sm text-sm"
          >
            <Link className="tracking-wide text-cyan-600 hover:text-cyan-700" href="/login">Login</Link>
          </span>
        </div>

        <div className="h-[48px] w-[288px] 
            web:w-[400px] web:h-[60px] 
            tablet:w-[400px] tablet:h-[60px]
            phone:w-[320px] phone:h-[43px] 
            sm:w-72 sm:h-[43px]
            md:w-80 md:h-[43px]
            lg:w-[400px] lg:h-[60px]">
          <GoogleButton />
        </div>

        <div
          className="justify-center items-center gap-2 inline-flex w-[400px] h-[17px]
          web:w-[400px] web:h-[17px]
          tablet:w-[400px] tablet:h-[17px] 
          "
        >
          <div
            className="border  border-zinc-400 w-[126px] h-[1px]
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
          "
          ></div>

          <div
            className="text-center text-zinc-400 font-medium  text-[10px]
          web:text-sm 
          tablet:text-sm 
          phone:text-[10px] 
          "
          >
            OR
          </div>

          <div
            className="border  border-zinc-400 w-[126px] h-[1px]
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
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          id="name"
          label="Name"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputField
          id="repeatPassword"
          label="Repeat Password"
          name="repeatPassword"
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
       
        <div className="w-72 mb-[20px] h-[43px]
        web:w-[400px] web:h-[43px] 
        tablet:w-[400px] tablet:h-[43px]
        phone:w-80 phone:h-[43px] 
        
        ">
          <Btn type="submit" variant="filled" text="Register" fullWidth />
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
