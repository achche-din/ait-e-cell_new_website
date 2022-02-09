import React from "react";
import "./index.css";

export const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h3 style={{ margin: "12px" }}>
            Learn More <span>About Us</span>
          </h3>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <h1>VISION</h1>
            <ul>
              To be an important part of Government 's dream of 5 trillion
              economy, by contributing through startups of AIT students.
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h1>MISSION</h1>
            <ul>
              To build an ecosystem to identify, nurture innovation and
              entrepreneurship skills amongst students and to generate
              successful commercial enterprise contributing towards significant
              job creations.
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
