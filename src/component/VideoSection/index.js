import React, { useEffect, useState } from "react";

import "./index.css";

export const VideoSection = () => {
  const [videos, setVideos] = useState([]);
  async function fetchVideoJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/videos/?format=json"
    );
    const videos = await response.json();
    setVideos(videos);
  }
  useEffect(() => {
    fetchVideoJSON();
  }, []);
  return (
    <section className=" " style={{ backgroundColor: "#fdfd96" }}>
      <div className="container">
        <div className="row " style={{ width: "100%" }}>
          {videos.map((item) => {
            const { id, title, description, video_link } = item;
            return (
              <div
                className="col-md-6 col-lg-6 col-xl-4 d-flex justify-content-center  mb-5 mb-lg-3 mx-auto"
                key={id}
              >
                <iframe
                  width="100%"
                  height="289"
                  src={video_link}
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                  title={title}
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
