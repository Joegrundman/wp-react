import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const panelStyle: React.CSSProperties = {
  backgroundColor: "slategray",
  padding: "1.5rem",
  borderRadius: "8px",
  color: "white",
};

const panelStyles = `
  p-4
  rounded-sm
  bg-slate-700
  text-white
  border-2
  border-slate-900
`;

const Panel: React.FC<PanelProps> = ({ children, className }) => (
  <div className={`${panelStyles} ${className || ""}`}>{children}</div>
);

export default Panel;
