import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";
import { useDataHooks } from "../../hooks/useDataHooks";

import { TeamCard } from "./TeamCard";
import "./TeamPage.css";

export const TeamPage = () => {
  const { data, isLoading, error } = useDataHooks();

  const [teams, setTeams] = useState([]);

  async function fetchTeamsJSON() {
    console.log("fetching teams", data);
    const teamsData = data.people.filter(
      (item) => item.tags[0].title === "team-member"
    );
    setTeams(teamsData);
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
              imageLink,
              description,
              instagram,
              linkedin,
              batch,
            } = item;
            return (
              <TeamCard
                key={id}
                name={name}
                designation={designation}
                instagram={instagram}
                linkedin={linkedin}
                batch={batch}
                imageLink={imageLink}
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
