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
          <div className="col-lg-3 col-6">
            <div className="d-flex flex-row align-items-center flex-wrap gap-3 justify-content-center">
              {social_links.map((item) => {
                const { id, link, title } = item;
                if (title === "Email") {
                  return (
                    <div key={id} class="d-flex flex-column align-items-center">
                      <div className="icon-contact mx-3">
                        <a
                          className="noti-con text-primary "
                          href={`mailto:${link}`}
                        >
                          <Icon
                            icon="carbon:email"
                            color="white"
                            width="40"
                            height="40"
                          />
                        </a>
                      </div>
                      <div class="lead font-weight-bold">
                        ecell@aitpune.edu.in
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
                // } else if (title === "Youtube") {
                //   return (
                //     <div className="icon-contact mx-3">
                //       <a className="noti-con text-primary " href={link}>
                //         <Icon
                //           icon="mdi:youtube"
                //           color="white"
                //           width="40"
                //           height="40"
                //         />
                //       </a>
                //     </div>
                //   );
                // } else if (title === "Facebook") {
                //   return (
                //     <div className="icon-contact mx-3">
                //       <a className="noti-con text-primary " href={link}>
                //         <Icon
                //           icon="mdi:facebook"
                //           color="white"
                //           width="40"
                //           height="40"
                //         />
                //       </a>
                //     </div>
                //   );
                // } else if (title === "Instagram") {
                //   return (
                //     <div className="icon-contact mx-3">
                //       <a className="noti-con text-primary " href={link}>
                //         <Icon
                //           icon="mdi:instagram"
                //           color="white"
                //           width="40"
                //           height="40"
                //         />
                //       </a>
                //     </div>
                //   );
                // } else if (title === "Linkedin") {
                //   return (
                //     <div className="icon-contact mx-3">
                //       <a className="noti-con text-primary " href={link}>
                //         <Icon
                //           icon="mdi:linkedin"
                //           color="white"
                //           width="40"
                //           height="40"
                //         />
                //       </a>
                //     </div>
                //   );
                // }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
