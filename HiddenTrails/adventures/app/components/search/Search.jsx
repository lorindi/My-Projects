"use client";
import React, { useState } from "react";

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="3"
  >
    <g id="icons / search-outline">
      <path
        id="Vector"
        d="M17.2728 5C14.8455 5 12.4727 5.71978 10.4545 7.06832C8.43623 8.41685 6.86322 10.3336 5.93433 12.5761C5.00544 14.8186 4.7624 17.2863 5.23594 19.6669C5.70949 22.0476 6.87834 24.2344 8.59471 25.9507C10.3111 27.6671 12.4978 28.836 14.8785 29.3095C17.2592 29.783 19.7268 29.54 21.9693 28.6111C24.2119 27.6822 26.1286 26.1092 27.4771 24.091C28.8257 22.0728 29.5454 19.7 29.5454 17.2727C29.5452 14.0178 28.2522 10.8963 25.9506 8.59481C23.6491 6.29328 20.5276 5.00021 17.2728 5V5Z"
        stroke="white"
        strokeMiterlimit="10"
       
      />
      <path
        id="Vector_2"
        d="M26.4288 26.4304L34.9999 35.0015"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const Search = ({ variant = "default", handleNavClose }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // if (onSearch) {
    //   onSearch(query);
    // }

    if (handleNavClose) {
      handleNavClose();
    }
  };

  const defaultStyles = `
    flex justify-center items-center h-[36px] w-[288px]
    phone:w-[361px] phone:h-[36px]   
    tablet:w-[590px] tablet:h-[60px]    
    web:w-[884px] web:h-[60px]   
  `;

  const tabletNavigationSearchStyles = `
    flex justify-center items-center
    w-[583px] h-[36px]
  `;

  const inputDefaultStyles = `
    px-[5px] rounded-bl-[30px] rounded-tl-[30px] border border-stone-300 bg-neutral-50 h-[36px] w-[248px]
    phone:w-[321px] h-[36px] phone:px-[7px]
    tablet:w-[516px] tablet:h-[60px] tablet:opacity-80  tablet:px-[10px]
    web:w-[810px] web:h-[60px] web:opacity-80 web:px-[20px]
  `;

  const inputTabletNavigationSearchStyles = `
    px-[10px] rounded-bl-[30px] rounded-tl-[30px] border border-stone-300 bg-neutral-50 
    w-[547px] h-[36px]
  `;

  const buttonDefaultStyles = `
    cursor-pointer  rounded-tr-[30px] rounded-br-[30px] flex items-center justify-center h-[36px] w-[40px] bg-cyan-600 hover:transition-all hover:duration-700 hover:bg-cyan-700
    phone:w-[40px] phone:h-[36px]   
    tablet:w-[74px] tablet:h-[60px]   
    web:w-[74px] web:h-[60px]   
  `;

  const buttonTabletNavigationSearchStyles = `
    cursor-pointer  rounded-tr-[30px] rounded-br-[30px] flex items-center justify-center hover:transition-all hover:duration-700 hover:bg-cyan-700
    w-[36px] h-[36px]
  `;
  const svgDefaultStyles = `h-[24px] w-[24px] text-cyan-600 
    phone:w-[24px] phone:h-[24px] 
    tablet:w-[40px] tablet:h-[40px] 
    web:w-[40px] web:h-[40px] 
`;

  const svgTabletNavigationSearchStyles = `text-cyan-600
    w-[24px] h-[40px]
`;

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={
          variant === "default" ? defaultStyles : tabletNavigationSearchStyles
        }
      >
        <input
          className={
            variant === "default"
              ? inputDefaultStyles
              : inputTabletNavigationSearchStyles
          }
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className={
            variant === "default"
              ? buttonDefaultStyles
              : buttonTabletNavigationSearchStyles
          }
        >
          <SearchIcon
            className={
              variant === "default"
                ? svgDefaultStyles
                : svgTabletNavigationSearchStyles
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
{
  /* <Search variant="tabletNavigationSearch" />
<Search variant="default" /> */
}
