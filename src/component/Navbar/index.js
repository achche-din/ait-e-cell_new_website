import React from "react";

import "./index.css";

export const Navbar = () => {
  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <a href="index.html" class="logo mr-auto">
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </a>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active">
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="mentor_connect.html">Mentor Connects</a>
            </li>
            <li>
              <a href="#start-ups">Startup Initiatives</a>
            </li>
            <li>
              <a href="our_team.html">Our Team</a>
            </li>
            <li>
              <a href="internship.html">Internships</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
