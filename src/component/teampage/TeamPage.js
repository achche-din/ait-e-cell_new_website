import React, { useEffect, useState, useCallback } from "react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";
import { useDataHooks } from "../../hooks/useDataHooks";

import { TeamCard } from "./TeamCard";
import "./TeamPage.css";

export const TeamPage = () => {
  const { data, isLoading } = useDataHooks();
  const [teams, setTeams] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(true);

  const fetchTeamsJSON = useCallback(() => {
    if (dataLoaded) {
      console.log("fetching teams", data);
      const teamsData = data.people.filter((item) => {
        if (item.tags) {
          console.log("inside teams", item.tags);
          return item.tags.some((tag) => tag.title === "team-member");
        }
        return false;
      });
      setTeams(teamsData);
      setDataLoaded(false);
    }
  }, [data, dataLoaded, setDataLoaded]);

  useEffect(() => {
    fetchTeamsJSON();
  }, [fetchTeamsJSON]);

  const darkstyle = true;
  return (
    <div>
      <Navbar darkstyle={darkstyle} />
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
