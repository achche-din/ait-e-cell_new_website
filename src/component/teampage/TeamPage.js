import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";

import { TeamCard } from "./TeamCard";
import "./TeamPage.css";

export const TeamPage = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchTeamsJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/people/ecell_team/?format=json"
    );
    const teams = await response.json();
    setTeams(
      teams.filter((data) => {
        return data.category[0] == "Team Member";
      })
    );
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTeamsJSON();
  }, []);

  const style = true;
  return (
    <div>
      <Navbar style={style} />
      <div className="section-title " style={{ marginTop: "8rem" }}>
        <h2 className="display-5">Our Team</h2>
      </div>
      {!isLoading ? (
        <div className="card-wrapper">
          {teams.map((item) => {
            const {
              id,
              name,
              designation,
              image,
              description,
              social_links,
              passout_year,
            } = item;
            return (
              <TeamCard
                key={id}
                name={name}
                designation={designation}
                description={description}
                social_links={social_links}
                passout_year={passout_year}
              />
            );
          })}
        </div>
      ) : (
        <div className="loading mt-5 mb-5">Loading..</div>
      )}

      <Footer />
    </div>
  );
};
