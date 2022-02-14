import React from "react";
import parse from "html-react-parser";

import "./index.css";

export const Startups = ({ title, description, quote, data }) => {
  return (
    <section id="start-ups" className="portfolio services">
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="section-title">
          <h2>{title}</h2>
          <h3>{parse(description)}</h3>
          <p>{quote}</p>
        </div>

        <div className="row startup-container">
          {data.map((item) => {
            const { id, title, imageLink, link } = item;
            return (
              <div
                className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3    mx-auto"
                key={id}
              >
                <div className="icon-box">
                  <img
                    className="img-fluid mb-2 mb-lg-2"
                    src={imageLink}
                    style={{ height: "250px" }}
                    alt={title}
                  />
                  <h4 className="title mt-4">{title}</h4>
                  <br /> {description && <div>{parse(description)}</div>}
                  {link && <a href={link}>visit</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
