import React from "react";

export default function Button({
  children,
  type = "button",
  bgcolor = "bg-red-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`md:px-8 px-5 py-2 outline-none rounded-full ${bgcolor} ${type} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
