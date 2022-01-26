import React from "react";
import "./index.css";

export const Newsletter = () => {
  return (
    <section
      class="services newletter"
      id="solution"
      style={{ backgroundColor: "#f1c50e" }}
    >
      <div class="container solution-event d-flex   ">
        <div class="row">
          <div class="col-lg-7 bg-white py-2 col-md-12 ">
            <hr class="hr-warning" />
            <div class="container-heading py-4">
              <h2>Udyamita</h2>
            </div>
            <div class="row">
              <div class="col-12 col-lg-12 col-md-12">
                <p class="text-dark">
                  We the Innovation and entrepreneurship cell of Army Institute
                  Of Technology are delighted to present our very first
                  newsletter "Udyamita"
                  <br />
                  <br />
                  The E-Cell (Entrepreneurship Cell) aims to promote the
                  entrepreneurship culture in and around the campus by providing
                  multiple platforms to budding entrepreneurs where they can
                  improve upon their business models, get mentorship by
                  successful entrepreneurs, interact with investors and groom
                  their entrepreneurship skills.
                  <br />
                  <br />
                  This newsletter includes all event details occurred in e-cell
                  this year (session 2020-2021) .<br />
                  It's a record of the wonderful things the E-Cell has been able
                  to achieve with the cooperation of the esteemed faculty and
                  students of our college. We hope that this record may serve to
                  inspire a flame of entrepreneurship that becomes a blazing
                  crescendo of innovation, out of the box thinking and
                  entrepreneurship
                </p>
                <button type="button" class="btn btn-outline-warning my-2">
                  <a
                    href="../../assets/ECell newsletter.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    Download Newsletter
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 py-md-3 mx-md-auto">
            <div class="img-container ">
              <img
                src="https://aitecell.in/assets/img/newletter_image.png"
                alt="solutions"
                class=" img-thumbnail image_event"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
