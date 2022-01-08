import React from "react";
import "./index.css";

export const Hero = () => {
  return (
    <section id="hero">
      <div class="hero-container text-white">
        <img
          class="mb-2"
          src="../../assets/img/portfolio/logo-ait.jpg"
          alt="AIT E-CELL"
        />
        <h3>
          Welcome to <strong>Army Institute of Technology</strong>
        </h3>
        <h1>
          <img
            src="assets/img/logo.png"
            style={{ width: "70px", height: "70px" }}
          />{" "}
          <span>AIT E-Cell</span>
        </h1>
        <h2>“ Driving the Innovations”</h2>
      </div>
    </section>
  );
};
