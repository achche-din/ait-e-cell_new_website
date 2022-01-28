import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Hero } from "../Hero";
import { Footer } from "../Footer";
import { Newsletter } from "../Newsletter";
import { LatestUpdates } from "../LatestUpdates";
import { AboutUs } from "../AboutUs";
import { VideoSection } from "../VideoSection";
import { Events } from "../Events";
import "./index.css";
import { Icon } from "@iconify/react";
export const HomePage = () => {
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [startups, setStartups] = useState([]);
  const [collaboration, setCollaboration] = useState([]);
  const [alumni, setAlumni] = useState([]);
  async function fetchUpdatesJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/latestupdates/?format=json"
    );
    const updates = await response.json();
    setLatestUpdates(updates);
  }
  async function fetchDocumentsJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/documents/?format=json"
    );
    const documents = await response.json();
    setDocuments(
      documents.filter((item) => {
        return item.title != "Udyamita";
      })
    );
  }
  async function fetchStartupsJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/startups/"
    );
    const startups = await response.json();
    setStartups(startups);
  }
  async function fetchCollabarationJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/collaboration/?format=json"
    );
    const collaboration = await response.json();
    setCollaboration(collaboration);
  }
  async function fetchAlumniJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/people/alumni_entrepreneur/?format=json"
    );
    const alumni = await response.json();
    setAlumni(alumni);
  }

  useEffect(() => {
    fetchUpdatesJSON();
    fetchDocumentsJSON();
    fetchStartupsJSON();
    fetchCollabarationJSON();
    fetchAlumniJSON();
  }, []);

  return (
    <>
      <Hero />
      <main id="main">
        <div className="container">
          <div className="alert alert-info" role="alert">
            <div className="container">
              <div className="row d-flex flex-column flex-sm-column flex-md-row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-2 noti-top">
                  <p>Latest Updates</p>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-10 ">
                  <marquee behavior="scroll" direction="left">
                    {latestUpdates.map((item) => {
                      const { id, title, start_date, end_date, link } = item;
                      return (
                        <a key={id} className="noti-con " href={link}>
                          {title}
                          <span className="badge badge-success bg-success mx-2  badge">
                            NEW
                          </span>
                        </a>
                      );
                    })}
                  </marquee>
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
              {documents.map((item) => {
                const { id, title, document_link, image } = item;
                return (
                  <div className="col-lg-4 pt-4 pt-lg-0" key={id}>
                    <a
                      href={document_link}
                      className="btn-learn-more"
                      style={{ textDecoration: "none" }}
                    >
                      {title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <LatestUpdates /> */}
      <Newsletter />
      <AboutUs />
      <VideoSection />

      {/* <Events title="Upcoming Events" /> */}

      <Events title="Event" description="" quote="" />

      <Events
        title="Visit"
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
              const { id, title, description, image, link } = item;
              return (
                <div
                  className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3    mx-auto"
                  key={id}
                >
                  <div className="icon-box">
                    <img
                      className="img-fluid mb-2 mb-lg-2"
                      src={image}
                      style={{ height: "250px" }}
                      alt={title}
                    />
                    <h4 className="title mt-4">{title}</h4>
                    <br /> {description && <p>{description}</p>}
                    {link && <a href={link}>visit</a>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="incubation" class="pricing">
        <div class="container" style={{ display: "flex", flexDirection: "column" }}>
          <div class="section-title">
            <h2>Incubation center Connect</h2>
            <p>
              All these centers provide active support to aspiring students of
              AIT
            </p>
          </div>

          <div class="row">
            {collaboration.map((item) => {
              const { id, title, description, image, link } = item;
              return (
                <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto " key={id}>
                  <div class="box">
                    <h3> {title}</h3>
                    <p style={{ lineHeight: "1.8rem" }}>{description}</p>
                    <div class="btn-wrap">
                      <a
                        href={link}
                        class="btn-buy "
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
      <section id="alumni" class="services">
        <div class="container">
          <div class="section-title">
            <h2 class="display-5">Alumni Entrepreneurs</h2>
          </div>
          <div class="row d-flex flex-row mx-auto" style={{ width: "100%" }}>
            {alumni.map((item) => {
              const {
                id,
                name,
                designation,
                image,
                description,
                social_links,
                passout_year,
              } = item;
              return (
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mx-auto" style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <div
                    class="card"
                    style={{
                      width: "250px",
                      height: "430px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      class="card-img-top "
                      src={image}
                      alt="Card "
                      style={{ width: "100%" }}
                    />
                    <div class="card-body">
                      <h4 class="card-title"> {name}</h4>
                      <p class="card-text"> {designation} </p>
                      {social_links && (
                        <a href={social_links} class="btn btn-primary">
                          See Profile
                        </a>
                      )}
                      <p>Batch: {passout_year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        class="page-section"
        id="mentor "
        style={{
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        }}
      >
        <br />

        <div class="section-title">
          <h2 class="display-5">Our Mentors</h2>
        </div>
        <div class="container m-t-110 mx-auto">
          <div
            class="row  "
            style={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div class="col-xl-6 col-md-6 mb-4 mx-auto">
              <div class="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 class="text-center">Advisors</h3>
                <div class="card-body ">
                  <ul class="list-group">
                    <li class="list-group-item">Brig Abhay Bhat, Director</li>
                    <li class="list-group-item">Dr. B. P. Patil, Principal</li>
                    <li class="list-group-item">
                      Dr Mrs. Sangeeta Jadhav, President IIC
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 class="text-center">Faculty in charge</h3>
                <div class="card-body ">
                  <ul class="list-group">
                    <li class="list-group-item">Dr. Shraddha Oza </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-md-6 mb-4 mx-auto" >
              <div class="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 class="text-center">MENTORS</h3>
                <div class="card-body ">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Mr Pawan Yadav, Founder, Digital Persistent
                    </li>
                    <li class="list-group-item">
                      Mr Abhijeet Deogirikar, Founder,Director CopperCloud
                      Technologies
                    </li>
                    <br />
                  </ul>
                </div>
              </div>

              <div class="card border-0 shadow " style={{ margin: "8px" }}>
                <h3 class="text-center">Faculty Coordinator</h3>
                <div class="card-body ">
                  <ul class="list-group">
                    <li class="list-group-item">Prof. Geeta Patil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6 col-6">
              <div class="d-flex flex-column align-items-center">
                <div class="icon-contact mb-3">
                  <Icon
                    icon="carbon:email"
                    color="white"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="text-dark">Email</div>

                <div class="lead font-weight-bold">ecell@aitpune.edu.in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
