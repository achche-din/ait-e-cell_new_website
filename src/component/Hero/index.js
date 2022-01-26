import React from "react";
import "./index.css";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container text-white">
        <img
          className="mb-2"
          src="https://aitecell.in/assets/img/portfolio/logo-ait.jpg"
          alt="AIT E-CELL"
        />
        <h3>
          Welcome to <strong>Army Institute of Technology</strong>
        </h3>
        <h1>
          <img
            src="https://aitecell.in/assets/img/logo.png"
            style={{ width: "70px", height: "70px" }}
            alt="logo"
          />{" "}
          <span>AIT E-Cell</span>
        </h1>
        <h2>“ Driving the Innovations”</h2>
      </div>
    </section>
  );
};
