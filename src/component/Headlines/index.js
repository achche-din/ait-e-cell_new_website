import React from "react";
import "./index.css";

export const Headlines = ({ headlines }) => {
  return (
    <section id="headlines">
      {" "}
      {/* LatestUpdates */}
      <div className="container">
        <div className="alert alert-info m-0 h-2" role="alert">
          <div className="container">
            <div className="row d-flex flex-column flex-sm-column flex-md-row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-2 noti-top">
                <p>Latest Updates</p>
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-10 ">
                <div className="marquee">
                  {headlines.map((item) => {
                    const { id, title, link } = item;
                    return (
                      <a
                        key={id}
                        className="noti-con text-primary "
                        href={link}
                      >
                        {title}
                        <p className="badge badge-success bg-success mx-2  badge">
                          NEW
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
