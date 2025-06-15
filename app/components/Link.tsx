import React from "react";
import { Link as RouterLink } from "react-router";
import type { LinkProps as RouterLinkProps } from "react-router";

export type LinkProps = RouterLinkProps & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
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

const Link: React.FC<LinkProps> = ({
  children,
  to,
  variant = "primary",
  small,
  className,
  ...rest
}) => {
  const variantStyle = variantStyles(variant);
  return (
    <RouterLink
      to={to}
      className={`${small ? smallBaseStyle : baseStyle} ${variantStyle} ${className || ""}`}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
