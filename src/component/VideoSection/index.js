import React from "react";
import "./index.css";

export const VideoSection = () => {
  return (
    <section class="text-center " style={{ backgroundColor: "#fdfd96" }}>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <iframe
              width="514"
              height="289"
              src="https://www.youtube.com/embed/pDYsFS3a6eA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <iframe
              width="514"
              height="289"
              src="https://www.youtube.com/embed/ny_piQ3jgSI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
            <iframe
              width="514"
              height="289"
              src="https://www.youtube.com/embed/vf0EG3_EGLo?t=747"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
