"use client";
import React from "react";
import Web from "./web/Web";
import Tablet from "./tablet/Tablet";
import Mobile from "./mobile/Mobile";

function Header() {
  return (
    <>
      <header className="hidden web:flex w-full  items-center justify-center h-100px py-9">
        <Web className=""/>
      </header>
      <header className="hidden tablet:flex web:hidden items-center justify-center w-full h-100px">
        <Tablet />
      </header>
      <header className="tablet:hidden">
        <Mobile />
      </header>
    </>
  );
}

export default Header;
