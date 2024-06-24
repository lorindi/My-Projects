"use client";
import Link from "next/link";

export default function Btn({
  variant = "filled",
  fullWidth = false,
  type,
  text,
  link,
  onClick,
  ...props
}) {
  const variantClasses = {
    filled:
      "border rounded-full text-white bg-cyan-600 text-slate-200 hover:transition-all hover:duration-700 hover:bg-cyan-700",
    outlined:
      "border-2 border-cyan-600 rounded-full hover:border-cyan-700 hover:transition-all hover:duration-700 hover:text-cyan-700",
    transparent: "bg-transparent hover:text-cyan-700 hover:duration-700",
  };
  const defaultClasses = `flex items-center font-medium tracking-wide justify-center px-5 py-3 text-center ${
    fullWidth ? "w-full" : "w-fit"
  } ${variantClasses[variant]}`;
  
  if (link) {
    return (
      <Link href={link} passHref>
        <button
          type={type}
          className={defaultClasses}
          {...props}
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button type={type} className={defaultClasses} {...props} onClick={onClick}>
      {text}
    </button>
  );
}
{
  /* <Btn
  type="submit"
  variant="outlined"
  text="Submit"
  onClick={handleSubmit}
  id="submitButton"
  name="submitBtn"
  value="submit"
  className="extra-class"
  style={{ padding: '10px', backgroundColor: 'red' }}
  aria-label="Submit Button"
  data-role="action-button"
  onMouseEnter={() => console.log('Mouse entered')}
  onMouseLeave={() => console.log('Mouse left')}
/> */
}
