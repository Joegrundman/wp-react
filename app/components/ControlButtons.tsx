import React from "react";
import IconButton from "./IconButton";
import type { GameState } from "~/pages/Game";

interface ControlButtonsProps {
  className?: string;
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  className = "",
  gameState,
  setGameState,
}) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <IconButton
      src="../app/assets/Buttons/switchTheaters.png"
      alt="switch theaters"
    />
    <IconButton
      src="../app/assets/Buttons/codeBreaking.png"
      alt="code breaking"
    />
    <IconButton src="../app/assets/Buttons/dieRoller.png" alt="die roller" />
    <IconButton src="../app/assets/Buttons/forcepool.png" alt="forcepool" />
    <IconButton src="../app/assets/Buttons/shipyards.png" alt="shipyards" />
    <IconButton src="../app/assets/Buttons/taskForces.png" alt="task forces" />
    <IconButton src="../app/assets/Buttons/shipsAtSea.png" alt="ships at sea" />
  </div>
);

export default ControlButtons;
