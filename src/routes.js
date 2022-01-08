import { HomePage } from "./component/HomePage";
import { TeamPage } from "./component/teampage/TeamPage";

export const mainRoute = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/team",
    exact: true,
    component: TeamPage,
  },
];
