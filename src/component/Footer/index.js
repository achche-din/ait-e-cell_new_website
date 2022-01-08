import React from "react";
import "./index.css";

export const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4">LOCATION</h4>
              <p class="pre-wrap lead mb-0">
                Army Institute of Technology,Pune Dighi HIlls Pune 411015
              </p>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4">AROUND THE WEB</h4>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://www.facebook.com/groups/aitecell"
              >
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://www.instagram.com/ecell_ait/"
              >
                <i class="fab fa-fw fa-instagram"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/"
              >
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://www.youtube.com/channel/UCSi5zU5q37iqqlny7djRbGA"
              >
                <i class="fab fa-fw fa-youtube"></i>
              </a>
            </div>

            <div class="col-lg-4">
              <h4 class="mb-2">Quick links</h4>
              <ul class="navbar-nav ml-auto social-links">
                <li class="nav-item mx-0 mx-lg-1 ">
                  <a
                    class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                    href="#Entrepreneurship"
                  >
                    Entrepreneurship Training
                  </a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a
                    class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#Incubation"
                  >
                    Incubation Center Connects
                  </a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a
                    class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                    href="#startups"
                  >
                    Startup Initiatives
                  </a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a
                    class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                    href="headlines.html"
                  >
                    Our Headlines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
