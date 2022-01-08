import { queryAllByDisplayValue } from "@testing-library/react";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./homePage.css";

export const HomePage = () => {
  


  return (
    <div>
      <div
        className="mainDiv"
        style={{
          backgroundImage: `url(https://th.bing.com/th/id/R.847ff106d65ea9b532c2fd27e7848f02?rik=PGH%2fc27r4WEfpg&riu=http%3a%2f%2fwww.organalytix.com%2fwp-content%2fuploads%2f2019%2f06%2fAdobeStock_166579233ORG-D_SMALL-1500x630.jpg&ehk=PCMvuJt%2fpIWU6d1ZD%2bSZNFgNWCQqGnA2x%2bu%2bbVXCpHM%3d&risl=&pid=ImgRaw&r=0)`,
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

      <div className="mainDiv1">
        <div className="cards1">
          <div style={{ margin: "2%" }}>
            <h1>“No idea is so outlandish that it should not be considered”</h1>
            <h1>-Winston Churchill.</h1>
          </div>
          <div style={{ margin: "1%" }}>
            <h3>Startup Saga: A bug in start-up</h3>
          </div>

          <p style={{ lineHeight: "2em" }}>
            A brilliant notion requires careful refining to become a reality.
            I&E-Cell of AIT Pune is pleased to deliver one of its kind STARTUP
            SAGA - A BUG IN A STARTUP. Startup Saga - A bug in a start-up in
            which we will provide you a specific range of problem statements
            faced by startups and decide the better innovation towards it.
          </p>
          <div style={{ margin: "2%" }}>
            {" "}
            <h1>Results are diclared -</h1>
          </div>

          <div className="container">
            <div className="track1">
              <h3>Track 1</h3>
              <p>1. IIT Sonipat</p>
              <p>2. AIT Quirks</p>
              <p>3. Gigabytes</p>
            </div>
            <div className="track2">
              <h3 style={{ margin: "2%" }}>Track 2</h3>
              <p>1. TECHX</p>
              <p>2. Techie Martians</p>
            </div>
          </div>
        </div>
        <div className="cards2">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "2%" }}
            src="https://aitecell.in/assets/img/startup-saga.png"
            alt="balckHat"
          />
        </div>
      </div>

      <div className="mainDiv2">
        <div className="cards1">
          <div style={{ margin: "2%" }}>
            <h1>Udyamita</h1>
            {/* <h1>-Winston Churchill.</h1> */}
          </div>
          <div style={{ margin: "1%" }}>
            <p>
              We the Innovation and entrepreneurship cell of Army Institute Of
              Technology are delighted to present our very first newsletter
              "Udyamita"
            </p>
          </div>

          <p style={{ lineHeight: "2em" }}>
            A brilliant notion requires careful refining to become a reality.
            I&E-Cell of AIT Pune is pleased to deliver one of its kind STARTUP
            SAGA - A BUG IN A STARTUP. Startup Saga - A bug in a start-up in
            which we will provide you a specific range of problem statements
            faced by startups and decide the better innovation towards it.
          </p>
          <div style={{ margin: "2%" }}>
            {" "}
            <p>
              The E-Cell (Entrepreneurship Cell) aims to promote the
              entrepreneurship culture in and around the campus by providing
              multiple platforms to budding entrepreneurs where they can improve
              upon their business models, get mentorship by successful
              entrepreneurs, interact with investors and groom their
              entrepreneurship skills.
            </p>
          </div>

          <div className="container">
            <p>
              This newsletter includes all event details occurred in e-cell this
              year (session 2020-2021) .<br />
              It's a record of the wonderful things the E-Cell has been able to
              achieve with the cooperation of the esteemed faculty and students
              of our college. We hope that this record may serve to inspire a
              flame of entrepreneurship that becomes a blazing crescendo of
              innovation, out of the box thinking and entrepreneurship
            </p>
          </div>
          <button style={{ margin: "1em" }} className="dwnBtn">
            download
          </button>
        </div>
        <div className="cards2">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "2%" }}
            src="https://aitecell.in/assets/img/newletter_image.png"
            alt="balckHat"
          />
        </div>
      </div>

      {/* about us section  */}

      <div className="mainDivAbt">
        <div className="hadding">
          <h2>
            {" "}
            Learn More <span style={{ color: "blue" }}>About Us</span>
          </h2>
        </div>
        <div className="section">
          <div className="vision">
            <div>
              <h1>VISION</h1>
            </div>
            <div style={{ padding: "10px;" }}>
              <span>
                To be an important part of Government 's dream of 5 trillion
                economy, by contributing through startups of AIT students.
              </span>
            </div>
          </div>
          <div className="mission">
            <div>
              <h1>MISSION</h1>
            </div>
            <div style={{ padding: "10px;" }}>
              <span>
                To build an ecosystem to identify, nurture innovation and
                entrepreneurship skills amongst students and to generate
                successful commercial enterprise contributing towards
                significant job creations.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* vedio div */}
      <div className="vedioDiv">
        <div className="twoDiv">
          {/* <vedio className="vedioCard"><source src="https://www.youtube.com/embed/vf0EG3_EGLo"/></vedio> */}
          <iframe
            className="vedioCard"
            src="https://www.youtube.com/embed/vf0EG3_EGLo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="vedioCard"
            src="https://www.youtube.com/embed/vf0EG3_EGLo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <div className="vedioCard"></div> */}
        </div>
        <div className="oneDiv">
          <iframe
            className="vedioCard"
            src="https://www.youtube.com/embed/vf0EG3_EGLo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>Past Events</h1>
        </div>
        <div className="cards">
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
        </div>
      </div>
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
        <div className="cards">
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
        </div>
      </div>
      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>ENTREPRENEURSHIP TRAINING</h1>
          <p>
            “Build your own dreams, or someone else will hire you to build
            theirs.” -- Farrah Gray
          </p>
        </div>
        <div className="cards">
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
        </div>
      </div>
      <div className="pastEventContainer">
        <div className="headingPastEvent">
          <h1>INTERNSHIP PROGRAMS AND MENTOR SUPPORT</h1>
          <p>
            “The best way to predict the future is to create it.” - Peter
            Drucker
          </p>
        </div>
        <div className="cards">
          <div className="card1"></div>
        </div>
      </div>
    </div>
  );
};
