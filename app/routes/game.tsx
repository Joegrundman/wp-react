import type { Route } from "./+types/game";
import GamePage from "../pages/Game";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Warplanner - Game" },
    { name: "description", content: "World  War 2 Grand Strategy Game" },
  ];
}

export default function Game({ params }: Route.LoaderArgs) {
  return <GamePage gameId={params.gameId} />;
}
