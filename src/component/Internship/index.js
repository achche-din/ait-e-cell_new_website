import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import "./index.css";
import { Icon } from "@iconify/react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";

export const InternshipPage = () => {
  const [internship, setInternship] = useState([]);
  async function fetchAlumniJSON() {
    const response = await fetch(
      "https://aitecell.herokuapp.com/api/internships/?format=json"
    );
    const internship = await response.json();
    setInternship(internship);
  }

  useEffect(() => {
    fetchAlumniJSON();
  }, []);

  return (
    <>
      <Navbar />
      <section class="page-section" id="our_team">
        <div class="section-title mt-5">
          <h2 class="display-5">Internships Opportunities</h2>
        </div>

        <div class="container m-t-110">
          <div className="row">
            {internship.map((item) => {
              const {
                id,
                title,
                company_link,
                description,
                image,
                apply_link,
                deadline,
              } = item;
              return (
                <div
                  class="col-xl-6 col-md-12 mx-auto mb-4 single-internship"
                  key={id}
                >
                  <div class="card border-0 shadow ">
                    <h3 class="text-center">{title}</h3>

                    <div class="card-body ">
                      {image && (
                        <img className="img-fluid" src={image} alt={title} />
                      )}
                      <p>{parse(description)}</p>
                      <button class="btn btn-primary mb-2 ">
                        {" "}
                        <a href={apply_link} class="apply_btn">
                          Apply here
                        </a>
                      </button>
                      <p>
                        Deadline :{" "}
                        <strong>
                          {" "}
                          {deadline &&
                            new Date(deadline).toLocaleDateString("en-GB", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                        </strong>{" "}
                      </p>
                      {"Company Link : "}
                      {company_link && (
                        <a href={company_link}>
                          {company_link}
                        </a>
                      )}{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
