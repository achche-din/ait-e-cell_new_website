import React from "react";
import "./index.css";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">LOCATION</h4>
                <p class="pre-wrap lead mb-0">
                  Army Institute of Technology, Pune Dighi HIlls Pune 411015
                </p>
              </div>

              <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">AROUND THE WEB</h4>
                <div className="d-flex">
                  <a
                    class="btn btn-outline-light btn-social mx-1  "
                    href="https://www.facebook.com/groups/aitecell"
                    style={{
                      background: "#2267cf",
                      borderRadius: "100%",
                      display: "flex",
                    }}
                  >
                    <Icon
                      icon="dashicons:facebook-alt"
                      color="white"
                      width="30"
                      height="30"
                      className="btn-social-icon"
                    />
                  </a>
                  <a
                    class="btn btn-outline-light btn-social mx-1"
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
                    class="btn btn-outline-light btn-social mx-1"
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
                  <a
                    class="btn btn-outline-light btn-social mx-1"
                    href="https://www.youtube.com/channel/UCSi5zU5q37iqqlny7djRbGA"
                    style={{
                      background: "#2267cf",
                      borderRadius: "100%",
                      display: "flex",
                    }}
                  >
                    <Icon
                      icon="bi:youtube"
                      color="white"
                      width="30"
                      height="30"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-4">
                <h4 class="mb-2">Quick links</h4>
                <ul class="navbar-nav ml-auto social-links">
                  <li class="nav-item mx-0 mx-lg-1 ">
                    <a
                      class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                      href="/#alumni"
                    >
                      Alumni Entrepreneurs
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="/#incubation"
                    >
                      Incubation Center Connects
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                      href="/#start-ups"
                    >
                      Startup Initiatives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section
        class="copyright py-4 text-center text-white d-flex justify-content-center"
        // style={{ background: "red" }}
      >
        <div class="container">
          <small class="pre-wrap mx-auto">
            © {new Date().getFullYear()} All Rights Reserved.{" "}
            <a href="https://aitecell.in/">AIT Entrepreneurship Cell</a>{" "}
          </small>
        </div>
      </section>
    </>
  );
};
