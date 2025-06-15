import type { Route } from "./+types/home";
import Dashboard from "../pages/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Warplanner" },
    { name: "description", content: "World  War 2 Grand Strategy Game" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
