import type { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  htmlFor: string;
  className?: string;
  variant?: "primary" | "secondary";
};

const labelStyles = `
  text-gray-100
  `;

const Label: React.FC<LabelProps> = ({
  children,
  variant = "primary",
  htmlFor,
  className,
  ...rest
}) => (
  <label htmlFor={htmlFor} className={`${labelStyles} ${className}`} {...rest}>
    {children}
  </label>
);

export default Label;
