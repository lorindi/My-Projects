import React from "react";
import LoginForm from '../components/login/LoginForm'

export default function Login() {
  return (
    <section className="flex relative items-center justify-center flex-col  w-full bg-cover min-h-screen">
    <div
      className="absolute top-0 left-0 brightness-100 w-full h-full bg-custom-image bg-cover bg-center z-[-5]
    smallPhone:max-h-[245px] smallPhone:phone:max-h-none 
    phone:max-h-[245px] phone:tablet:max-h-none 
    tablet:max-h-[554px]
    web:w-full web:h-full web:tablet:max-h-none"
    ></div>
    <div className="w-full absolute   
                    tablet:top-[150px]
                    smallPhone:top-[60px]
                    phone:top-[60px]
                    web:top-[70px]
                    ">
      <LoginForm />
    </div>
  </section>
  );
}
