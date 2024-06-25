"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../input-fields/InputFields";
import GoogleButton from "../buttons/ButtonGoogle";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", user);
      sessionStorage.setItem("user", JSON.stringify(user));
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <h2 className="mb-[40px] text-center text-white font-medium font-['Inter'] text-[24px] 
      web:text-[32px] tablet:text-[32px] 
      phone:text-[24px]">
        Sign In
      </h2>
      <form
        className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] min-h-[451px] w-full 
        web:w-[582px] web:min-h-[602px] 
        tablet:w-[582px] tablet:min-h-[602px] 
        phone:w-[361px] phone:min-h-[441px]"
        onSubmit={handleSubmit}
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
            w-[400px] h-[60px]
          "
        >
          <GoogleButton />
        </div>

        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <div className="h-[43px] w-72 
        web:w-[400px] web:h-[43px] 
        tablet:w-[400px] tablet:h-[43px] 
        phone:w-80 phone:h-[43px]">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
