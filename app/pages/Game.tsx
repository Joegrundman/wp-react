
import Link from "~/components/Link";
import Button from "~/components/Button";
import Panel from "~/components/Panel";


type GameProps = {
  style?: React.CSSProperties;
  className?: string;
};

const gameStyles = `
  p-4
  bg-gray-100
  text-white
  border-2
  border-slate-200
`;

const navStyles = `flex gap-4`;

const Game: React.FC<GameProps> = ({ className }) => (
  <div className={`${gameStyles} ${className || ""}`}>
    <nav className={`${navStyles} mb-4`}>
      <Button>Games</Button>
      <Button>New Game</Button>
      <Button>Account</Button>
      <Button>Help</Button>
      <Link to="/auth">Login</Link>
    </nav>
    <Panel>
 Brand new game
    </Panel>
  </div>
);

export default Game;
