import React, { useState } from "react";
import ControlButtons from "./ControlButtons";
import type { GameState } from "~/pages/Game";

type GameSidebarLeftProps = {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const GameSidebarLeft: React.FC<GameSidebarLeftProps> = ({
  gameState,
  setGameState,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 transition-all duration-300 flex flex-col z-40 ${
        expanded ? "w-[200px]" : "w-[50px]"
      }`}
    >
      <button
        className="m-2 p-1 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {expanded ? "<" : ">"}
      </button>

      <ControlButtons gameState={gameState} setGameState={setGameState} />
      {expanded && (
        <div className="mt-4 text-white">
          {/* Sidebar content goes here */}
          Sidebar Content
        </div>
      )}
    </div>
  );
};

export default GameSidebarLeft;
