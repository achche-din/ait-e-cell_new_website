import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";
import { useDataHooks } from "../../hooks/useDataHooks";
import { Icon } from "@iconify/react";

import { TeamCard } from "./TeamCard";
import "./TeamPage.css";
import { useParams, useSearchParams } from "react-router-dom";

export const TeamPage = () => {
  var { team } = useParams();

  const { data, isLoading } = useDataHooks();
  const [teams, setTeams] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [title, setTitle] = useState(team);
  console.log(team);
  useEffect(() => {
    data.teamMembers.sort(function (a, b) {
      return a.batch - b.batch;
    });
    setAlumni(data.alumniEntrepreneurs);
    setTeams(data.teamMembers);
  }, [data]);

  const darkstyle = true;
  return (
    <div>
      <Navbar darkstyle={darkstyle} />
      <div
        className="section-title "
        style={{
          marginTop: "8rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <h2 className="display-5 opacity-50" onClick={() => setTitle("team")}>
          Our Team
        </h2>
        <h2 className="display-5 opacity-50" onClick={() => setTitle("alumni")}>
          Our Alumni
        </h2>
      </div>

      <div className="section-title " style={{ marginTop: "1.5rem" }}>
        <h2 className="display-5">Our {title}</h2>
      </div>
      {title === "team" && (
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
      )}
      {title === "alumni" && (
        <div className="row d-flex flex-row mx-auto" style={{ width: "100%" }}>
          {alumni.map((item) => {
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
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mx-auto"
                key={id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="card-img-top "
                    src={imageLink}
                    alt="Card "
                    style={{ width: "100%" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title"> {name}</h4>
                    <p className="card-text"> {designation} </p>
                    {instagram && (
                      <a href={instagram}>
                        <Icon
                          icon="akar-icons:instagram-fill"
                          color="#ff5400"
                          width="30"
                          height="30"
                        />
                      </a>
                    )}
                    {linkedin && (
                      <a href={linkedin}>
                        <Icon
                          icon="jam:linkedin-square"
                          color="#2863d1"
                          width="30"
                          height="30"
                        />
                      </a>
                    )}
                    {/* <p>Batch: {batch}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};
