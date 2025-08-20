import React from "react";
import type { GameState } from "~/pages/Game";
import Zoom from "./Zoom";

interface GameFooterProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameFooter: React.FC<GameFooterProps> = ({ setGameState }) => (
  <footer className="fixed bottom-0 left-0 w-full h-[30px] bg-gray-800 text-white flex items-center justify-center text-xs z-50">
    {/* Footer content here */}
    <Zoom
      onZoomChange={(newZoomLevel: number) =>
        setGameState((x) => ({ ...x, zoomLevel: newZoomLevel }))
      }
    />
  </footer>
);

export default GameFooter;
