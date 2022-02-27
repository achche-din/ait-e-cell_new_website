import React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

export const ContactUs = ({ social_links }) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="d-flex flex-row align-items-center flex-wrap gap-3 justify-content-center">
              {social_links.map((item) => {
                const { id, link } = item;
                return (
                  <div key={id} className="icon-contact mx-3">
                    <a className="noti-con text-primary " href={link}>
                      <Icon
                        icon="carbon:email"
                        color="white"
                        width="40"
                        height="40"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
