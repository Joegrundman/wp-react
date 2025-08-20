import React from "react";

const sidebarClassName =
  "fixed top-0 right-0 w-[30px] h-screen bg-[#222] z-[20] flex flex-col items-center shadow-md";

const GameSidebarRight: React.FC = () => {
  return (
    <aside className={sidebarClassName}>{/* Add sidebar content here */}</aside>
  );
};

export default GameSidebarRight;
