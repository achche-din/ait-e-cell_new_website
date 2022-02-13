import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import { useDataHooks } from "../../hooks/useDataHooks";

export const VideoSection = () => {
  const { data } = useDataHooks();
  const [videos, setVideos] = useState([]);

  const fetchVideoJSON = useCallback(() => {
    if (videos.length === 0) {
      const videos = data.videos;
      setVideos(videos);
    }
  }, [data, videos]);

  useEffect(() => {
    fetchVideoJSON();
  }, [fetchVideoJSON]);

  return (
    <section className=" " style={{ backgroundColor: "#fdfd96" }}>
      <div className="container">
        <div className="row " style={{ width: "100%" }}>
          {videos.map((item) => {
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
                className="col-md-6 col-lg-6 col-xl-4 d-flex justify-content-center  mb-5 mb-lg-3 mx-auto"
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
      </div>
    </section>
  );
};
