import React from "react";
import parse from "html-react-parser";

import "./index.css";

export const Collaborations = ({ title, description, quote, data }) => {
  return (
    <section id="incubation" className="pricing">
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="section-title">
          <h2>{title}</h2>
          <p>{parse(description)}</p>
          <p>{quote}</p>
        </div>

        <div className="row">
          {data.map((item) => {
            const { id, title, imageLink, website } = item;
            return (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto " key={id}>
                <div className="box">
                  <h3> {title}</h3>
                  {imageLink && (
                    <img
                      className="img-fluid mb-2 mb-lg-2"
                      src={imageLink}
                      style={{ height: "250px" }}
                      alt={title}
                    />
                  )}
                  {description && (
                    <p style={{ lineHeight: "1.8rem" }}>{parse(description)}</p>
                  )}
                  {website && (
                    <div className="btn-wrap">
                      <a
                        href={website}
                        className="btn-buy "
                        style={{ textDecoration: "none" }}
                      >
                        Visit website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <a href="/#" className="text-primary stretched-link">
          Checkout more {title}
        </a>
      </div>
    </section>
  );
};
