import React from "react";
import Board from "~/components/Board";
import GameFooter from "~/components/GameFooter";
import GameHeader from "~/components/GameHeader";
import GameSidebarLeft from "~/components/GameSidebarLeft";
import GameSidebarRight from "~/components/GameSidebarRight";
import MapCanvas from "~/components/MapCanvas";
import Zoom from "~/components/Zoom";
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
      <GameHeader />
      <main>
        <GameSidebarLeft />
        <Board style={{ height: "100vh" }}>
          <MapCanvas gameState={gameState} />
          <Zoom
            onZoomChange={(newZoomLevel: number) =>
              setGameState((x) => ({ ...x, zoomLevel: newZoomLevel }))
            }
          />
        </Board>
        <GameSidebarRight />
      </main>

      <GameFooter />
    </div>
  );
};

export default Game;
