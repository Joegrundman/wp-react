import React from "react";
import Board from "~/components/Board";
import MapCanvas from "~/components/MapCanvas";
import type { Theater } from "~/types/theater";

type GameProps = {
  style?: React.CSSProperties;
  className?: string;
  gameId: string;
};

export type GameState = {
  zoomLevel: number;
  theater: Theater;
};

const Game: React.FC<GameProps> = (props) => {
  const [gameState, setGameState] = React.useState<GameState>({
    zoomLevel: 5,
    theater: "Eur",
  });

  return (
    <div>
      <h1>Game Page</h1>
      <p>Game ID: {props.gameId}</p>
      <p>Welcome to the Game!</p>
      <Board>
        <MapCanvas gameState={gameState} />
      </Board>
    </div>
  );
};

export default Game;
