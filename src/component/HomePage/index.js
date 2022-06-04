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
  console.log("data", data);
  return (
    <>
      <Hero
        motto={data.otherdetails.length > 0 ? data.otherdetails[0].motto : null}
      />
      <Headlines headlines={data.latestheadlines} />

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
          title="Sessions"
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
