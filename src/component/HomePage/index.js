import React, { useCallback, useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { Hero } from "../Hero";
import { Footer } from "../Footer";
import { Newsletter } from "../Newsletter";
// import { LatestUpdates } from "../LatestUpdates";
import { AboutUs } from "../AboutUs";
import { VideoSection } from "../VideoSection";
import { Events } from "../Events";
import "./index.css";
import { Icon } from "@iconify/react";
// import parse from "html-react-parser";
import { useDataHooks } from "../../hooks/useDataHooks";

export const HomePage = () => {
  const { data } = useDataHooks();

  const [latestUpdates, setLatestUpdates] = useState([]);
  // const [documents, setDocuments] = useState([]);
  const [startups, setStartups] = useState([]);
  const [collaboration, setCollaboration] = useState([]);
  const [alumni, setAlumni] = useState([]);

  const fetchUpdatesJSON = useCallback(() => {
    if (latestUpdates.length === 0) {
      const latestUpdates = data.latestupdates;
      setLatestUpdates(latestUpdates);
    }
  }, [data, latestUpdates]);

  // function fetchDocumentsJSON() {
  //   const documents = data.documents;
  //   setDocuments(
  //     documents.filter((item) => {
  //       return item.title != "newsletter";
  //     })
  //   );
  // }
  const fetchStartupsJSON = useCallback(() => {
    if (startups.length === 0) {
      const startups = data.startups;
      setStartups(startups);
    }
  }, [data, startups]);

  const fetchCollabarationJSON = useCallback(() => {
    if (collaboration.length === 0) {
      const collaboration = data.collaboration;
      setCollaboration(collaboration);
    }
  }, [collaboration, data]);

  const fetchAlumniJSON = useCallback(() => {
    if (alumni.length === 0) {
      const alumni = data.people.filter((item) => {
        if (item.tags) {
          console.log("inside alumni-entrepreneur", item.tags);
          return item.tags.some((tag) => tag.title === "alumni-entrepreneur");
        }
        return false;
      });
      setAlumni(alumni);
    }
  }, [data, alumni]);

  useEffect(() => {
    fetchUpdatesJSON();
    // fetchDocumentsJSON();
    fetchStartupsJSON();
    fetchCollabarationJSON();
    fetchAlumniJSON();
  }, [
    fetchAlumniJSON,
    fetchCollabarationJSON,
    fetchStartupsJSON,
    fetchUpdatesJSON,
  ]);

  return (
    <>
      <Hero />
      <main id="main">
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

      <Events title="events" description="" quote="" />

      <Events
        title="visits"
        description="Some awesome visits by us"
        quote="“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” - Albert Schweitzer."
      />

      <Events title="Session" description="" quote="" />

      <Events
        title="ENTREPRENEURSHIP TRAINING"
        description=""
        quote="“Build your own dreams, or someone else will hire you to build theirs.” - Farrah Gray"
      />

      <Events
        title="INTERNSHIP PROGRAMS AND MENTOR SUPPORT"
        description=""
        quote="“The best way to predict the future is to create it.” - Peter Drucker"
      />

      <section id="start-ups" className="portfolio services">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="section-title">
            <h2>Startup Initiatives</h2>
            <h3>
              Check our <span>Startup Initiatives</span>
            </h3>
            <p>
              “The price of success is hard work, dedication to the job at hand,
              and the determination that whether we win or lose, we have applied
              the best of ourselves to the task at hand.” - Vince Lombardi
            </p>
          </div>

          <div className="row startup-container">
            {startups.map((item) => {
              const { id, title, imageLink, link } = item;
              return (
                <div
                  className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3    mx-auto"
                  key={id}
                >
                  <div className="icon-box">
                    <img
                      className="img-fluid mb-2 mb-lg-2"
                      src={imageLink}
                      style={{ height: "250px" }}
                      alt={title}
                    />
                    <h4 className="title mt-4">{title}</h4>
                    {/* <br /> {description && <div>{parse(description)}</div>} */}
                    {link && <a href={link}>visit</a>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="incubation" className="pricing">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="section-title">
            <h2>Incubation center Connect</h2>
            <p>
              All these centers provide active support to aspiring students of
              AIT
            </p>
          </div>

          <div className="row">
            {collaboration.map((item) => {
              const { id, title, imageLink, website } = item;
              return (
                <div
                  className="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto "
                  key={id}
                >
                  <div className="box">
                    <h3> {title}</h3>
                    <img
                      className="img-fluid mb-2 mb-lg-2"
                      src={imageLink}
                      style={{ height: "250px" }}
                      alt={title}
                    />
                    {/* <p style={{ lineHeight: "1.8rem" }}>{parse(description)}</p> */}
                    <div className="btn-wrap">
                      <a
                        href={website}
                        className="btn-buy "
                        style={{ textDecoration: "none" }}
                      >
                        Visit website
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="alumni" className="services">
        <div className="container">
          <div className="section-title">
            <h2 className="display-5">Alumni Entrepreneurs</h2>
          </div>
          <div
            className="row d-flex flex-row mx-auto"
            style={{ width: "100%" }}
          >
            {alumni.map((item) => {
              const {
                id,
                name,
                designation,
                imageLink,
                instagram,
                linkedin,
                batch,
              } = item;
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mx-auto"
                  key={id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: "250px",
                      height: "430px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      className="card-img-top "
                      src={imageLink}
                      alt="Card "
                      style={{ width: "100%" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title"> {name}</h4>
                      <p className="card-text"> {designation} </p>
                      {instagram && (
                        <a href={instagram}>
                          <Icon
                            icon="akar-icons:instagram-fill"
                            color="#ff5400"
                            width="30"
                            height="30"
                          />
                        </a>
                      )}
                      {linkedin && (
                        <a href={linkedin}>
                          <Icon
                            icon="jam:linkedin-square"
                            color="#2863d1"
                            width="30"
                            height="30"
                          />
                        </a>
                      )}
                      <p>Batch: {batch}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
