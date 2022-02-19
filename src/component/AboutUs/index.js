import React from "react";
import parse from "html-react-parser";
import "./index.css";

export const AboutUs = ({ otherDetails }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title pb-2">
          <h3 style={{ margin: "12px" }}>
            Learn More <span>About Us</span>
          </h3>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <h1>VISION</h1>
            <div>
              {otherDetails && otherDetails.vision
                ? parse(otherDetails.vision)
                : `To be an important part of Government 's dream of 5 trillion economy, by contributing through startups of AIT students.`}
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h1>MISSION</h1>
            <ul>
              {otherDetails && otherDetails.mission
                ? parse(otherDetails.mission)
                : `To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant job creations.`}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
