import React, { useCallback, useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import parse from "html-react-parser";
import { Icon } from "@iconify/react";
import { useDataHooks } from "../../hooks/useDataHooks";
// import { LatestUpdates } from "../LatestUpdates";
import { VideoSection } from "../VideoSection";
import { Newsletter } from "../Newsletter";
import { AboutUs } from "../AboutUs";
import { Events } from "../Events";
import { Startups } from "../Startups";
import { Collaborations } from "../Collaborations";
import { AlumniEntrepreneurs } from "../AlumniEntrepreneurs";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import "./index.css";

export const HomePage = () => {
  const { data } = useDataHooks();

  // const [documents, setDocuments] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [latestUpdatesdataLoaded, setLatestUpdatesdataLoaded] = useState(true);

  const fetchUpdatesJSON = useCallback(() => {
    if (latestUpdatesdataLoaded) {
      const latestUpdates = data.latestupdates;
      setLatestUpdates(latestUpdates);
      setLatestUpdatesdataLoaded(false);
    }
  }, [data, latestUpdatesdataLoaded, setLatestUpdatesdataLoaded]);

  // function fetchDocumentsJSON() {
  //   const documents = data.documents;
  //   setDocuments(
  //     documents.filter((item) => {
  //       return item.title != "newsletter";
  //     })
  //   );
  // }
  
  useEffect(() => {
    // fetchDocumentsJSON();
    fetchUpdatesJSON();
  }, [
    fetchUpdatesJSON,
  ]);

  return (
    <>
      <Hero />
      <main id="main">
        {" "}
        {/* LatestUpdates */}
        <div className="container">
          <div className="alert alert-info m-0 h-2" role="alert">
            <div className="container">
              <div className="row d-flex flex-column flex-sm-column flex-md-row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-2 noti-top">
                  <p>Latest Updates</p>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-10 ">
                  <div className="marquee">
                    {latestUpdates.map((item) => {
                      const { id, title, link } = item;
                      return (
                        <a
                          key={id}
                          className="noti-con text-primary "
                          href={link}
                        >
                          {title}
                          <span className="badge badge-success bg-success mx-2  badge">
                            NEW
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="about">
        {" "}
        {/* documents */}
        <div className="container">
          <div className="section-title">
            <div className="row content">
              {/* {documents.map((item) => {
                const { id, title, documentLink, image } = item;
                return (
                  <div className="col-lg-4 pt-4 pt-lg-0" key={id}>
                    <a
                      href={documentLink}
                      className="btn-learn-more"
                      style={{ textDecoration: "none" }}
                    >
                      {title}
                    </a>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </section>

      <section
        className="services "
        id="solution"
        style={{
          background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        }}
      >
        <div className="container solution-event d-flex   ">
          <div className="row">
            <div className="col-lg-7 bg-white py-2 col-md-12  ">
              <div className="text-dark mt-5 ">
                <div className="container-heading">
                  <h2>
                    “ Stay committed to your decisions, but stay flexible in
                    your approch.” <br />
                    -Tony Robbins.
                  </h2>
                </div>
                <br />
                I&E-Cell is proud to announce that Udchalo, an online service
                portal founded by AIT Alumni Mr. Ravi Kumar has ✨𝐖𝐨𝐧 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥
                𝐒𝐭𝐚𝐫𝐭𝐮𝐩 𝐀𝐰𝐚𝐫𝐝 𝟐𝟎𝟐𝟏✨ in the Travel Planning and Discovery
                Category.
                <br />
                <br />
                We as a part of I&E-Cell respects and appreciate the consistent
                efforts made by him and all the employees of Udchalo.
                <br />
                <br />
                💫I&E-Cell commends them for bringing great laurels to our
                college.💫
                <br />
                -Heartiest Congratulations from I&E-Cell,Army Institute of
                Technology,Pune
              </div>
            </div>

            <div className="col-lg-5 col-md-6 py-md-3 mx-md-auto">
              <div className="img-container ">
                <img
                  src="https://github.com/achche-din/aitecell-frontend/blob/main/src/assets/4.jpg?raw=true"
                  alt="ravi kumar, CEO at udchalo"
                  className=" img-thumbnail image_event"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <AboutUs />
      <VideoSection />

      <Events title="events" description="" quote="" data={data.events} />

      <Events
        title="visits"
        description="Some awesome visits by us"
        quote="“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” - Albert Schweitzer."
        data={data.visits}
      />

      <Events title="Session" description="" quote="" data={data.sessions} />

      <Events
        title="ENTREPRENEURSHIP TRAINING"
        description=""
        quote="“Build your own dreams, or someone else will hire you to build theirs.” - Farrah Gray"
        data={data.trainings}
      />

      <Events
        title="INTERNSHIP PROGRAMS AND MENTOR SUPPORT"
        description=""
        quote="“The best way to predict the future is to create it.” - Peter Drucker"
        data={data.internships}
      />

      <Startups
        title="Startup Initiatives"
        description="Check our <span>Startup Initiatives</span>"
        quote="“The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.” - Vince Lombardi"
        data={data.startups}
      />
      <Collaborations
        title="Incubation center Connect"
        description="All these centers provide active support to aspiring students of AIT"
        quote=""
        data={data.collaboration}
      />

      <AlumniEntrepreneurs
        title="Alumni Entrepreneurs"
        description="All these centers provide active support to aspiring students of AIT"
        quote=""
        data={data.alumniEntrepreneurs}
      />

      <section
        className="page-section"
        id="mentor "
        style={{
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        }}
      >
        <br />

        <div className="section-title">
          <h2 className="display-5">Our Mentors</h2>
        </div>
        <div className="container m-t-110 mx-auto">
          <div
            className="row  "
            style={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="col-xl-6 col-md-6 mb-4 mx-auto">
              <div className="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 className="text-center">Advisors</h3>
                <div className="card-body ">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Brig Abhay Bhat, Director
                    </li>
                    <li className="list-group-item">
                      Dr. B. P. Patil, Principal
                    </li>
                    <li className="list-group-item">
                      Dr Mrs. Sangeeta Jadhav, President IIC
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 className="text-center">Faculty in charge</h3>
                <div className="card-body ">
                  <ul className="list-group">
                    <li className="list-group-item">Dr. Shraddha Oza </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6 mb-4 mx-auto">
              <div className="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 className="text-center">MENTORS</h3>
                <div className="card-body ">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Mr Pawan Yadav, Founder, Digital Persistent
                    </li>
                    <li className="list-group-item">
                      Mr Abhijeet Deogirikar, Founder,Director CopperCloud
                      Technologies
                    </li>
                    <br />
                  </ul>
                </div>
              </div>

              <div className="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 className="text-center">Faculty Coordinator</h3>
                <div className="card-body ">
                  <ul className="list-group">
                    <li className="list-group-item">Prof. Geeta Patil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-6">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <Icon
                    icon="carbon:email"
                    color="white"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="text-dark">Email</div>

                <div className="lead font-weight-bold">
                  ecell@aitpune.edu.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
