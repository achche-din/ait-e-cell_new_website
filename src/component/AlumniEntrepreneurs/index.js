import React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

export const AlumniEntrepreneurs = ({ title, description, quote, data }) => {
  return (
    <section id="alumni" className="services">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5">{title}</h2>
          <p>{description}</p>
          <p>{quote}</p>
        </div>
        <div className="row d-flex flex-row mx-auto" style={{ width: "100%" }}>
          {data.map((item) => {
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
                    <p>Batch: {batch}</p>
                  </div>
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
