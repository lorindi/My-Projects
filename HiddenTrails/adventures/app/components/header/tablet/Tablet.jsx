"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TabletNavigation from "./TabletNavigation/TabletNavigation";

const CloseIcon = ({ onClick }) => (
  <svg
    className="absolute top-5 right-3 z-10 cursor-pointer"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g id="icons / close">
      <path
        id="Vector"
        d="M13.5911 12L18.0442 7.54687C18.2555 7.3359 18.3744 7.04962 18.3747 6.75099C18.3749 6.45237 18.2566 6.16587 18.0456 5.95453C17.8346 5.74319 17.5483 5.62431 17.2497 5.62404C16.9511 5.62378 16.6646 5.74215 16.4532 5.95312L12.0001 10.4062L7.547 5.95312C7.33565 5.74178 7.04901 5.62305 6.75012 5.62305C6.45123 5.62305 6.16459 5.74178 5.95325 5.95312C5.7419 6.16447 5.62317 6.45111 5.62317 6.75C5.62317 7.04888 5.7419 7.33553 5.95325 7.54687L10.4064 12L5.95325 16.4531C5.7419 16.6645 5.62317 16.9511 5.62317 17.25C5.62317 17.5489 5.7419 17.8355 5.95325 18.0469C6.16459 18.2582 6.45123 18.3769 6.75012 18.3769C7.04901 18.3769 7.33565 18.2582 7.547 18.0469L12.0001 13.5937L16.4532 18.0469C16.6646 18.2582 16.9512 18.3769 17.2501 18.3769C17.549 18.3769 17.8357 18.2582 18.047 18.0469C18.2583 17.8355 18.3771 17.5489 18.3771 17.25C18.3771 16.9511 18.2583 16.6645 18.047 16.4531L13.5911 12Z"
        fill="#13294B"
      />
    </g>
  </svg>
);

const MenuIcon = ({ onClick }) => (
  <svg
    className="absolute top-5 right-3 z-10 cursor-pointer"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g id="icons / menu">
      <path
        id="Vector (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.875C5 10.8395 5.83947 10 6.875 10H33.125C34.1605 10 35 10.8395 35 11.875C35 12.9105 34.1605 13.75 33.125 13.75H6.875C5.83947 13.75 5 12.9105 5 11.875Z"
        fill="#081120"
      />
      <path
        id="Vector (Stroke)_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 20C5 18.9645 5.83947 18.125 6.875 18.125H33.125C34.1605 18.125 35 18.9645 35 20C35 21.0355 34.1605 21.875 33.125 21.875H6.875C5.83947 21.875 5 21.0355 5 20Z"
        fill="#081120"
      />
      <path
        id="Vector (Stroke)_3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 28.125C5 27.0895 5.83947 26.25 6.875 26.25H33.125C34.1605 26.25 35 27.0895 35 28.125C35 29.1605 34.1605 30 33.125 30H6.875C5.83947 30 5 29.1605 5 28.125Z"
        fill="#081120"
      />
    </g>
  </svg>
);

const Tablet = ({ isAuthenticated }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShow(false);
    } 
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <Link
        className="absolute top-6 left-3 text-center text-gray-900 text-2xl font-medium font-['Inter Tight'] z-30"
        href="/"
      >
        LOGO
      </Link>
      <div className="w-full z-40">
        {show ? (
          <CloseIcon onClick={toggleShow} />
        ) : (
          <MenuIcon onClick={toggleShow} />
        )}
        <div ref={menuRef} className={`relative ${show ? "flex" : "hidden"}`}>
          <TabletNavigation isAuthenticated={isAuthenticated} handleNavClose={toggleShow} />
        </div>
      </div>
    </>
  );
};

export default Tablet;