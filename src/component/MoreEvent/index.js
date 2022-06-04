import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDataHooks } from "../../hooks/useDataHooks";
import { Navbar } from "../Navbar";
import "./index.css";

function MoreEvent() {
  var { more } = useParams();
  const { data } = useDataHooks();
  const [sortedData, setSortedData] = useState([]);
  const [head, setHead] = useState(more);

  const [title, setTitle] = useState(head);
  var videosData = data.videos;
  useEffect(() => {
    if (head === "events") {
      setSortedData(data.events);
    } else if (head === "videos") {
      setSortedData(videosData);
      setTitle("Videos");
    } else if (head === "visits") {
      setSortedData(data.visits);
    } else if (head === "Sessions" || head === "session") {
      setSortedData(data.sessions);
    } else if (head === "startups" || head === "moreStartup Initiatives") {
      setSortedData(data.startups);
      setTitle("Startups");
    } else if (head === "training" || head === "entrepreneurship training") {
      setSortedData(data.training);
    }
    console.log("head", head);
    console.log("sorted data before click", videosData);
  }, [head]);
  const darkstyle = true;

  return (
    <>
      <Navbar darkstyle={darkstyle} />

      <div className="container ">
        <div className="headings ">
          <h2
            className="display-5 mt-1 active opacity-50"
            onClick={(e) => {
              setSortedData(data.videos);
              console.log("sorted data on click", sortedData);
              setTitle("Videos");
              setHead("videos");
            }}
          >
            Videos
          </h2>
          <h2
            className="display-5 mt-1 opacity-50"
            onClick={(e) => {
              setSortedData(() => data.events);
              setTitle("Events");
              setHead("events");
            }}
          >
            Events
          </h2>
          <h2
            className="display-5 mt-1 opacity-50"
            onClick={() => {
              setSortedData(data.visits);
              setTitle("Visits");
              setHead("visits");
            }}
          >
            Visits
          </h2>
          <h2
            className="display-5 mt-1 opacity-50"
            onClick={() => {
              setSortedData(data.sessions);
              setTitle("Sessions");
              setHead("Sessions");
            }}
          >
            Sessions
          </h2>
          <h2
            className="display-5 mt-1 opacity-50"
            onClick={() => {
              setSortedData(data.startups);
              setTitle("Startups");
              setHead("startups");
            }}
          >
            Startups
          </h2>
          {data.training && (
            <h2
              className="display-5 mt-1 opacity-50"
              onClick={() => {
                setSortedData(data.training);
                setTitle("Training");
                setHead("training");
              }}
            >
              Entrepreneurship Training
            </h2>
          )}
        </div>
        <div className="section-title m-1">
          <h2 className="display-5 mt-5 main-heading">{title}</h2>
        </div>
        <div className="row">
          {sortedData?.map((item) => {
            if (title === "Videos") {
              const { id, title } = item;
              var { videoLink } = item;
              videoLink = videoLink.split("/").pop();
              videoLink = "https://www.youtube.com/embed/"
                .concat(videoLink)
                .concat(
                  `?enablejsapi=1&origin=${process.env.REACT_APP_FRONTEND_ENDPOINT}`
                );

              return (
                <div
                  className="col-md-6 col-lg-6 col-xl-4 d-flex justify-content-center mb-5 mb-lg-3 mx-auto"
                  key={id}
                >
                  <iframe
                    width="100%"
                    height="289"
                    src={videoLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                  ></iframe>
                </div>
              );
            } else if (title === "Startups") {
              const { id, title, imageLink, link, description } = item;
              return (
                <div
                  className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto services"
                  key={id}
                >
                  <div className="icon-box">
                    {imageLink && (
                      <img
                        className="img-fluid mb-2 mb-lg-2"
                        src={imageLink}
                        style={{ height: "250px" }}
                        alt={title}
                      />
                    )}
                    <h4 className="title mt-4">{title}</h4>

                    {link && <a href={link}>For more information</a>}
                  </div>
                </div>
              );
            } else {
              const {
                id,
                title,
                description,
                imageUrl,
                meetUrl,
                other,
                comments,
              } = item;

              return (
                <div
                  className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto services"
                  key={id}
                >
                  <div className="icon-box">
                    {imageUrl && (
                      <img
                        className="img-fluid mb-2 mb-lg-2"
                        src={imageUrl}
                        style={{ height: "250px" }}
                        alt={title}
                      />
                    )}
                    <h4 className="title mt-4">{title}</h4>
                    <br /> {other && <div>{other}</div>}
                    {comments && <div>{comments}</div>}
                    {meetUrl && <a href={meetUrl}>For more information</a>}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default MoreEvent;
