import type { Route } from "./+types/home";
import GamePage from "../pages/Game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Warplanner - game" },
    { name: "description", content: "World  War 2 Grand Strategy Game" },
  ];
}

export default function Game() {
  return <GamePage />;
}
