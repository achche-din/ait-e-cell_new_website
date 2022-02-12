import React, { useEffect, useState } from "react";
import { useDataHooks } from "../../hooks/useDataHooks";

import "./index.css";

export const Events = ({ title, description, quote }) => {
  const { data, isLoading, error } = useDataHooks();

  const [event, setEvent] = useState([]);
  function fetchEventJSON() {
    let eventData = data.events.filter((data) => {
      return data.eventType.title === title;
    });
    setEvent(eventData);
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
            {description && <h3>{description}</h3>}
            {title && <p>{quote}</p>}
          </div>
        )}

        <div className="row">
          {event.map((item) => {
            const {
              id,
              title,
              description,
              imageUrl,
              meetUrl,
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
                    src={imageUrl}
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
                  {meetUrl && <a href={meetUrl}>For more information</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
