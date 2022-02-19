import React from "react";
import parse from "html-react-parser";

import "./index.css";

export const Events = ({ title, description, quote, data }) => {
  return (
    <section id={title} className="services events-section">
      <div className="container">
        {title && (
          <div className="section-title">
            <h2 className="display-5">{title}</h2>
            {description && <h3>{description}</h3>}
            {title && <p>{quote}</p>}
          </div>
        )}
        <div className="row">
          {data.map((item) => {
            const {
              id,
              title,
              description,
              imageUrl,
              meetUrl,
              other,
              comments,
            } = item;
            var shortdescription =
              description?.length > 100
                ? description.substr(0, 100) + "..."
                : description;
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
                  <br />{" "}
                  {shortdescription && <div>{parse(shortdescription)}</div>}
                  {other && <div>{other}</div>}
                  {comments && <div>{comments}</div>}
                  {meetUrl && <a href={meetUrl}>For more information</a>}
                </div>
              </div>
            );
          })}
        </div>
        <a href="/#" className="text-primary stretched-link">
          Checkout more {title}
        </a>
      </div>
    </section>
  );
};
