import React from "react";
import { Button } from "react-bootstrap";
import { Hero } from "../Hero";
import { Footer } from "../Footer";
import { Newsletter } from "../Newsletter";
import { LatestUpdates } from "../LatestUpdates";
import { AboutUs } from "../AboutUs";
import { VideoSection } from "../VideoSection";
import { Events } from "../Events";
import "./index.css";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <div class="container">
          <div class="alert alert-info" role="alert">
            <div class="container">
              <div class="row d-flex flex-column flex-sm-column flex-md-row">
                <div class="col-12 col-sm-12 col-md-3 col-lg-2 noti-top">
                  Latest Updates
                </div>
                <div class="col-12 col-sm-12 col-md-9 col-lg-10 ">
                  <marquee behavior="scroll" direction="left">
                    <a
                      class="noti-con "
                      href="https://aim.gov.in/iace-hackathon.php#:~:text=India%20Australia%20Circular%20Economy%20Hackathon,nations%20in%20fostering%20innovative%20solutions"
                    >
                      India Australia Circular Economy Hackathon for
                      students/startups{" "}
                      <span class="badge badge-success  badg">NEW</span>
                    </a>
                    <a
                      class="noti-con"
                      href="https://taxguru.in/corporate-low/startup-india-scheme-registration-benefits.html?amp"
                    >
                      Startup India Scheme - Registration & Benefits
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                    <a
                      class="noti-con"
                      href="https://aitpune.com/Internships.aspx"
                    >
                      AICTE and Pupilfirst Internship
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                    <a
                      class="noti-con"
                      href="https://digest.myhq.in/active-angel-investors-india/"
                    >
                      19 Most Active Angel Investors In India For Startups
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="mainDiv"
        style={{
          backgroundImage: `url(https://aitecell.in/assets/img/portfolio/pawan.png)`,
          padding: "2%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="nameCard">
          <img
            src="https://aitecell.in/assets/img/portfolio/logo-ait.jpg"
            alt="AIT E-CELL"
          />
          <div style={{ paddingTop: "8%" }}>
            <h3>
              Welcome to <strong>Army Institute of Technology</strong>
            </h3>
          </div>
          <div className="nameCard1">
            <div>
              <img
                src="https://aitecell.in/assets/img/logo.png"
                style={{ width: "70px", height: "70px", paddingRight: "2%" }}
              />{" "}
            </div>
            <div>
              <h1>
                <span>AIT E-Cell</span>
              </h1>
            </div>
          </div>
          <div>
            <h2>“ Driving the Innovations”</h2>
          </div>
        </div>
      </div>

      <LatestUpdates />
      <Newsletter />
      <AboutUs />
      <VideoSection />
      <Events title="Upcoming Events" />
      <Events title="Past Events" />

      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>Visits</h1>
          <p>Some awesome visits by us</p>
          <p>
            “Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful.” --
            Albert Schweitzer.
          </p>
        </div>
        <Events title="" />
      </div>

      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>ENTREPRENEURSHIP TRAINING</h1>
          <p>
            “Build your own dreams, or someone else will hire you to build
            theirs.” -- Farrah Gray
          </p>
        </div>
        <Events title="" />
      </div>
      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>INTERNSHIP PROGRAMS AND MENTOR SUPPORT</h1>
          <p>
            “The best way to predict the future is to create it.” - Peter
            Drucker
          </p>
        </div>
        <Events title="" />
      </div>

      
      
      <Footer />
    </>
  );
};
