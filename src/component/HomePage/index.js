import React from "react";
import { useDataHooks } from "../../hooks/useDataHooks";
import { Headlines } from "../Headlines";
import { ContactUs } from "../ContactUs";
import { Mentors } from "../Mentors";
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

  return (
    <>
      <Hero
        motto={data.otherdetails.length > 0 ? data.otherdetails[0].motto : null}
      />
      <Headlines headlines={data.latestheadlines} />

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
      <AboutUs
        otherDetails={
          data.otherdetails.length > 0 ? data.otherdetails[0] : null
        }
      />
      {data.videos.length > 0 && (
        <VideoSection videos={data.videos.slice(0, 3)} />
      )}
      {data.events.length > 0 && (
        <Events
          title="events"
          description=""
          quote=""
          data={data.events.slice(0, 3)}
        />
      )}
      {data.visits.length > 0 && (
        <Events
          title="visits"
          description="Some awesome visits by us"
          quote="“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” - Albert Schweitzer."
          data={data.visits.slice(0, 3)}
        />
      )}
      {data.sessions.length > 0 && (
        <Events
          title="Session"
          description=""
          quote=""
          data={data.sessions.slice(0, 3)}
        />
      )}

      {data.trainings.length > 0 && (
        <Events
          title="ENTREPRENEURSHIP TRAINING"
          description=""
          quote="“Build your own dreams, or someone else will hire you to build theirs.” - Farrah Gray"
          data={data.trainings.slice(0, 3)}
        />
      )}

      {/* <Events
        title="INTERNSHIP PROGRAMS AND MENTOR SUPPORT"
        description=""
        quote="“The best way to predict the future is to create it.” - Peter Drucker"
        data={data.internships.slice(0, 2)}
      /> */}
      {data.startups.length > 0 && (
        <Startups
          title="Startup Initiatives"
          description="Check our <span>Startup Initiatives</span>"
          quote="“The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.” - Vince Lombardi"
          data={data.startups.slice(0, 6)}
        />
      )}
      {data.collaboration.length > 0 && (
        <Collaborations
          title="Incubation center Connect"
          description="All these centers provide active support to aspiring students of AIT"
          quote=""
          data={data.collaboration}
        />
      )}

      {data.alumniEntrepreneurs.length > 0 && (
        <AlumniEntrepreneurs
          title="Alumni Entrepreneurs"
          description="All these centers provide active support to aspiring students of AIT"
          quote=""
          data={data.alumniEntrepreneurs.slice(0, 4)}
        />
      )}

      <Mentors
        advisors={data.industrialMentors}
        facultyMentors={data.facultyMentors}
        industrialMentors={data.industrialMentors}
      />

      <ContactUs social_links={data.links.slice(0, 5)} />

      <Footer />
    </>
  );
};
