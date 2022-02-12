import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import "./index.css";
import { Icon } from "@iconify/react";
import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer";
import { useDataHooks } from "../../hooks/useDataHooks";

export const InternshipPage = () => {
  const { data, isLoading, error } = useDataHooks();

  const [internship, setInternship] = useState([]);
  async function fetchAlumniJSON() {
    const internship = data.internships;

    setInternship(internship);
  }

  useEffect(() => {
    fetchAlumniJSON();
  }, []);
  const style = true;

  return (
    <>
      <Navbar style={style} />
      <section className="page-section" id="our_team">
        <div className="section-title mt-5">
          <h2 className="display-5">Internships Opportunities</h2>
        </div>

        <div className="container m-t-110">
          <div className="row">
            {internship.map((item) => {
              const {
                id,
                title,
                companyLink,
                description,
                image,
                applyLink,
                deadline,
              } = item;
              return (
                <div
                  className="col-xl-6 col-md-12 mx-auto mb-4 single-internship"
                  key={id}
                >
                  <div className="card border-0 shadow ">
                    <h3 className="text-center">{title}</h3>

                    <div className="card-body ">
                      {image && (
                        <img className="img-fluid" src={image} alt={title} />
                      )}
                      <p>{parse(description)}</p>
                      <button className="btn btn-primary mb-2 ">
                        {" "}
                        <a href={applyLink} className="apply_btn">
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
                      {companyLink && (
                        <a href={companyLink}>{companyLink}</a>
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
