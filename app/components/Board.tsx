import type { ReactNode } from "react";

type BoardProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const boardStyles = `
  p-4
  rounded-sm
  bg-slate-700
  text-white
  border-2
  border-slate-900
  w-full
  h-full
`;

const Board: React.FC<BoardProps> = ({ children, className }) => (
  <div className={`${boardStyles} ${className || ""}`}>{children}</div>
);

export default Board;
