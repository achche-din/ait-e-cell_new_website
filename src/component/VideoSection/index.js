import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const VideoSection = ({ videos, allVideos }) => {
  const [video, setvideo] = useState(videos);

  return (
    <section className=" " style={{ backgroundColor: "#fdfd96" }} id="videos">
      <div className="container">
        <div className="row " style={{ width: "100%" }}>
          {video.map((item) => {
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
          })}
        </div>

        <Link to={`videos`} className="text-primary stretched-link">
          Checkout more videos
        </Link>
      </div>
    </section>
  );
};
