import { HomePage } from "./component/HomePage";
import { TeamPage } from "./component/teampage/TeamPage";
import { InternshipPage } from "./component/Internship/index";
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
  {
    path: "/internship",
    exact: true,
    component: InternshipPage,
  },
];
