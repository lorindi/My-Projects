"use client";
import React from "react";
import Web from "./web/Web";
import Tablet from "./tablet/Tablet";
import Mobile from "./mobile/Mobile";

function Header() {
  return (
    <>
      <header>
        <Web className="hidden web:flex"/>
      </header>
      <header>
        <Tablet className="hidden tablet:flex web:hidden"/>
      </header>
      <header>
        <Mobile className="tablet:hidden"/>
      </header>
    </>
  );
}

export default Header;
