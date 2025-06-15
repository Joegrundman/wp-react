import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  small?: boolean;
};

const baseStyle = `
  px-4 
  py-2 
  rounded-sm 
  font-semibold 
  focus:outline-none 
  transition-colors 
  cursor-pointer
  `;

const smallBaseStyle = `
  px-2
  py-1
  text-sm
  font-light
  rounded-sm 
  font-semibold 
  focus:outline-none 
  transition-colors 
  cursor-pointer
  `;

const variantStyles = (variantStyle: "primary" | "secondary") => {
  switch (variantStyle) {
    case "primary":
      return `
            bg-lime-700 
            text-white 
            hover:bg-lime-800 
            border-2 
            border-zinc-700
            focus:bg-amber-200
            focus:text-gray-800
            `;

    case "secondary":
      return `
            bg-gray-200 
            text-gray-800 
            hover:bg-gray-300
            `;
  }
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  small,
  className,
  ...props
}) => {
  const variantStyle = variantStyles(variant);

  return (
    <button
      className={`${small ? smallBaseStyle : baseStyle} ${variantStyle} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
