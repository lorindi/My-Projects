"use client";

import { useState, useEffect } from "react";

const EyeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9841 9.25C12.3307 9.25 8.58301 11.3645 5.6327 15.5936C5.54849 15.7156 5.50234 15.8599 5.50009 16.0082C5.49783 16.1564 5.53958 16.302 5.62004 16.4266C7.88692 19.975 11.5844 22.75 15.9841 22.75C20.336 22.75 24.1094 19.9666 26.3805 16.4102C26.4591 16.2881 26.5009 16.1459 26.5009 16.0007C26.5009 15.8555 26.4591 15.7134 26.3805 15.5912C24.1043 12.0756 20.3032 9.25 15.9841 9.25Z"
      stroke="#808080"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 19.75C18.0711 19.75 19.75 18.0711 19.75 16C19.75 13.9289 18.0711 12.25 16 12.25C13.9289 12.25 12.25 13.9289 12.25 16C12.25 18.0711 13.9289 19.75 16 19.75Z"
      stroke="#808080"
      strokeMiterlimit="10"
    />
  </svg>
);

export default function InputField({
  id,
  className = "",
  placeholder,
  name,
  type = "text",
  value = "",
  onChange,
  error,
  hint,
  required,
  disabled,
  readOnly,
  ...props
}) {
  const [inputValue, setInputValue] = useState(value);
  const [inputErr, setInputErr] = useState("");
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (error && inputValue.trim() !== "") {
      setInputErr("border-red-500 text-red-500");
    } else {
      setInputErr("");
    }
  }, [type, error, inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className={`flex relative flex-col justify-center ${className}`}>
      <div className=" flex items-center mt-2">
        <input
          className={`text-base border-b-4  bg-neutral-50 border-cyan-600 hover:border-cyan-700 
            web:w-[400px] web:h-[60px] web:pl-[12px] 
            tablet:w-[400px] tablet:h-[60px] tablet:pl-[10px]
            phone:w-80 phone:h-12 phone:pl-[5px]
            ${inputErr}`}
          id={id}
          type={inputType}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />
        {type === "password" && !error && (
          <a
            onClick={handleShowPassword}
            className="absolute right-2 cursor-pointer"
          >
            <EyeIcon />
          </a>
        )}
      </div>
      {hint && <p className="text-sm text-gray-600 mt-1">{hint}</p>}
      {error && inputValue.trim() !== "" && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
