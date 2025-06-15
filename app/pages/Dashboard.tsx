import type { ReactNode } from "react";
import Link from "~/components/Link";
import Button from "~/components/Button";
import Panel from "~/components/Panel";
import recentGameList from "../../data/recentGameList.json"

const games = [

]

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

const Dashboard: React.FC<DashboardProps> = ({ className }) => (
  <div className={`${dashboardStyles} ${className || ""}`}>
    <nav className={`${navStyles} mb-4`}>
      <Button>Games</Button>
      <Button>New Game</Button>
      <Button>Account</Button>
      <Button>Help</Button>
      <Link to="/auth">Login</Link>
    </nav>
    <Panel>
{recentGameList.map(x => <div><Link small to={`game/${x.gameFileId}`}>{x.title}</Link>{x.ownerName}</div>)}
      {/* <Button small>My game 1</Button>
      <Button small>My game 2</Button>
      <Button small>My game 3</Button>
      <Button small>My game 4</Button> */}
    </Panel>
  </div>
);

export default Dashboard;
