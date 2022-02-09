import React from "react";
import { Icon } from "@iconify/react";

export const TeamCard = ({
  name,
  designation,
  image,
  description,
  social_links,
  passout_year,
}) => {
  return (
    <div>
      <div className="card">
        <div className="card-folder hover">
          <div className="profile">
            <img src={image} alt={name} />
          </div>
          <div className="socials">
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.instagram.com/ecell_ait/"
              style={{
                background: "#2267cf",
                borderRadius: "100%",
                display: "flex",
              }}
            >
              <Icon
                icon="bx:bxl-instagram"
                color="white"
                width="30"
                height="30"
              />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.linkedin.com/"
              style={{
                background: "#2267cf",
                borderRadius: "100%",
                display: "flex",
              }}
            >
              <Icon
                icon="cib:linkedin-in"
                color="white"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>
        <div className="card-content-wrapper">
          <div className="member-name">{name}</div>
          {/* <div className="branch-year"></div> */}
          <div className="role-domain">{designation}</div>
          {description && <div>{description}</div>}
        </div>
      </div>
    </div>
  );
};
