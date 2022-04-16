import { HomePage } from "./component/HomePage";
import { TeamPage } from "./component/teampage/TeamPage";
import { InternshipPage } from "./component/Internship/index";
import MoreEvent from "./component/MoreEvent/index";
export const mainRoute = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/all:team",
    exact: true,
    component: TeamPage,
  },
  {
    path: "/internship",
    exact: true,
    component: InternshipPage,
  },
  {
    path: "/:more",
    exact: true,
    component: MoreEvent,
  },
];
