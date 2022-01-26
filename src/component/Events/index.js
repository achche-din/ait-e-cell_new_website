import React, { useEffect, useState } from "react";

import "./index.css";

export const Events = ({ title }) => {
  const [event, setEvent] = useState([]);
  async function fetchEventJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/events/?format=json"
    );
    const event = await response.json();
    setEvent(
      event.filter((data) => {
        return data.event_type == title;
      })
    );
    // console.log(
    //   "title",
    //   event.filter((data) => {
    //     return data.event_type == title;
    //   })
    // );
  }
  useEffect(() => {
    fetchEventJSON();
  }, []);
  return (
    <section id={title} className="services events-section">
      <div className="container">
        {title && (
          <div className="section-title">
            <h2 className="display-5">{title + "s"}</h2>
          </div>
        )}

        <div className="row">
          {event.map((item) => {
            const {
              id,
              title,
              description,
              image_url,
              meet_url,
              other,
              files_attachment,
              comments,
            } = item;
            return (
              <div
                className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto"
                key={id}
              >
                <div className="icon-box">
                  <img
                    className="img-fluid mb-2 mb-lg-2"
                    src={image_url}
                    style={{ height: "250px" }}
                    alt={title}
                  />
                  <h4 className="title mt-4">{title}</h4>
                  <br /> {description && <p>{description}</p>}
                  {other && <p>{other}</p>}
                  {comments && <p>{comments}</p>}
                  {files_attachment && (
                    <a href={files_attachment}>For more information</a>
                  )}
                  {meet_url && <a href={meet_url}>For more information</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
