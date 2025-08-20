import React from "react";

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  src: string;
  alt: string;
  size?: number;
  ariaLabel?: string;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  src,
  alt,
  size = 36,
  ariaLabel,
  className,
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel || alt}
    className={`bg-none border-none p-0 cursor-pointer inline-flex items-center justify-center ${className || ""}`}
    type="button"
  >
    <img src={src} alt={alt} width={size} height={size} />
  </button>
);

export default IconButton;
