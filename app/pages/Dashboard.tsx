import gameList from "../../data/games/gamelist.json";
import Link from "~/components/Link";
import Button from "~/components/Button";
import Panel from "~/components/Panel";
import recentGameList from "../../data/recentGameList.json";

const games = [];

interface GameItems {
  title: string;
  id: string;
  player: string;
  year: number;
  season: string;
  phase: string;
  saveDate: string;
}

type DashboardProps = {
  style?: React.CSSProperties;
  className?: string;
};

const dashboardStyles = `
  p-4
  bg-gray-100
  text-white
  border-2
  border-slate-200
`;

const navStyles = `flex gap-4`;

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const games: GameItems[] = gameList.games;
  return (
    <div className={`${dashboardStyles} ${className || ""}`}>
      <nav className={`${navStyles} mb-4`}>
        <Button>Games</Button>
        <Button>New Game</Button>
        <Button>Account</Button>
        <Button>Help</Button>
        <Link to="/auth">Login</Link>
      </nav>
      <Panel>
        <table>
          <tbody>
            {games.map((x) => (
              <tr key={x.id}>
                <td>
                  <Link to={`/game/${x.id}`} small>
                    {x.title}
                  </Link>
                </td>
                <td>{x.player}</td>
                <td>{x.phase}</td>
                <td>{x.year}</td>
                <td>{x.season}</td>
                <td>{x.saveDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
};

export default Dashboard;
