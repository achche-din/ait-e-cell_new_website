import React from "react";
import "./index.css";

export const Events = ({ title }) => {
  return (
    <section id="events" class="services">
      <div class="container">
        {title && (
          <div class="section-title">
            <h2 class="display-5">{title}</h2>
          </div>
        )}

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/Youtube Live Poster.jpeg"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">
                Toycathon 2021 <br />{" "}
                <a href="https://toycathon.mic.gov.in/index.php">
                  For more information
                </a>
              </h4>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/0001.jpg"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">
                The innovation and entrepreneurship cell of Army Institute of
                Technology, Pune is proud to present our first major event of
                the year, an interactive interview session with two prominent
                alumni entrepreneurs of AIT from the 2000 batch
                <br />
              </h4>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/bullet.jpg"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">
                Advance Composites and Its Military Applications
                <br />
                Flexible BulletProof Vest
                <br />{" "}
                <a href="../../assets/documents/event.pdf">
                  For more information
                </a>
              </h4>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/web banner final (3).png"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">
                National Startup Awards 2021 <br />{" "}
                <a href="../../assets/documents/NSA 2021 Emailer (2).html">
                  For more information
                </a>
              </h4>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/event_1.jpg"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">A Path Towards Successful entrepreneurship</h4>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <div class="icon-box">
              <img
                class="img-fluid"
                src={"../../assets/img/event_2.jpg"}
                style={{ height: "250px" }}
                class="mb-2 mb-lg-2"
                alt=" Session on market research and company analysis"
              />
              <h4 class="title">
                A seminar on <br /> "Innovation, Entrepreneurship and IPR"
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
