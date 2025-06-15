import type { Route } from "./+types/home";
import Login from "../pages/Login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Warplanner - login" },
    { name: "description", content: "World  War 2 Grand Strategy Game" },
  ];
}

export default function Auth() {
  return <Login />;
}
