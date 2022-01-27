import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router,Route , Routes } from "react-router-dom";

import { InternshipPage } from "./component/Internship/index"
import { TeamPage } from "./component/teampage/TeamPage"

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
    <Route path="/internship" component={InternshipPage} />
    <Route path="/team" component={TeamPage} />
    </Routes>
  </Router>,
  document.getElementsByTagName("body")[0]
);
