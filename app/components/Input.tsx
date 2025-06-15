import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const inputStyles = `
  border 
  rounded 
  px-3 
  py-2 
  focus:outline-none 
  focus:ring
  bg-gray-100    
  text-gray-800
  border-gray-300
  `;

const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props} className={`${inputStyles} ${props.className || ""}`} />
  );
};

export default Input;
