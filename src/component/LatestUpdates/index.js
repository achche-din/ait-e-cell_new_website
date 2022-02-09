import React from "react";
import "./index.css";

export const LatestUpdates = () => {
  return (
    <section className="services " id="solution">
      <div className="container solution-event d-flex">
        <div className="row">
          <div className="col-lg-7 bg-white py-2 col-md-12 ">
            <hr className="hr-warning" />
            <div className="container-heading">
              <h2>
                “No idea is so outlandish that it should not be considered”{" "}
                <br />– Winston Churchill.
              </h2>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6">
                <h5 className="text-warning">
                  Innovation challenge: A day in start-up
                </h5>
                <p className="text-dark">
                  Innovation Challenge - A day in a start-up as a platform to
                  help all budding entrepreneurs to show their innovative
                  solutions to create their own business. This platform also
                  allows these enthusiasts to converse with the owners of some
                  new startups that are creating their hallmarks in their
                  respective fields.
                </p>
                <p className="text-dark">
                  <strong>Event date: </strong>24th May, 2021, 6:00 PM to 8:00
                  PM.
                  <br />
                  SUBMISSION PHASE HAS STARTED
                  <br />
                  Last date for submission is{" "}
                  <strong>23rd May, 2021 before 12:00PM (Noon)</strong>
                </p>
                <button type="button" className="btn btn-outline-warning">
                  <a
                    href="https://forms.gle/h2VXkcaChVCecPwd9"
                    style={{ textDecoration: "none" }}
                  >
                    Register Here
                  </a>
                </button>
                <button type="button" className="btn btn-outline-warning my-2">
                  <a
                    href="https://docs.google.com/document/d/1e9aUmtmOjWaT5122LvKDwZN7Zo29uDry09F9Yztz8A0/edit?usp=sharing"
                    style={{ textDecoration: "none" }}
                  >
                    Rulebook
                  </a>
                </button>
              </div>

              <div className="col-12 col-lg-6 col-md-6">
                <h5 className="text-warning">
                  Startup challenge: A bug in start-up
                </h5>
                <p className="text-dark">
                  Startup Challenge - A bug in a start-up in which we will
                  provide you a specific range of problem statements faced by
                  startups and decide the better innovation towards it.
                </p>
                <p className="text-dark">
                  <strong>Event date: </strong>25th May, 2021, 6:00 PM to 8:00
                  PM.
                  <br />
                  SUBMISSION PHASE HAS STARTED
                  <br />
                  Last date for submission is{" "}
                  <strong>24th May, 2021 before 12:00PM (Noon)</strong>
                </p>
                <button type="button" className="btn btn-outline-warning">
                  {" "}
                  <a
                    href="https://forms.gle/LMhnMKZ4tsepKhADA"
                    style={{ textDecoration: "none" }}
                  >
                    Register Here
                  </a>
                </button>
                <button type="button" className="btn btn-outline-warning my-2">
                  <a
                    href="https://drive.google.com/file/d/1-ZJU4K9PEASuVFWJKwuqfaRJPleEFynd/view?usp=sharing"
                    style={{ textDecoration: "none" }}
                  >
                    Brochure
                  </a>
                </button>
                <button type="button" className="btn btn-outline-warning my-2">
                  <a
                    href="https://docs.google.com/document/d/1wluGukXdaYOkA_Qal3nlv8J56U8By7vlpzvI3bjwU24/edit"
                    style={{ textDecoration: "none" }}
                  >
                    Problem Statement
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 py-md-3 mx-md-auto">
            <div className="img-container ">
              <img
                src="https://aitecell.in/assets/img/startup-saga.png"
                alt="solutions"
                className=" img-thumbnail image_event"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
