import React from "react";
import "./index.css";

export const Mentors = ({ advisors, facultyMentors, industrialMentors }) => {
  return (
    <section
      className="page-section"
      id="mentor "
      style={{
        backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
      }}
    >
      <br />

      <div className="section-title">
        <h2 className="display-5">Our Mentors</h2>
      </div>
      <div className="container m-t-110 mx-auto">
        <div
          className="row  "
          style={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="col-xl-6 col-md-6 mb-4 mx-auto">
            <div className="card border-0 shadow " style={{ margin: "8px" }}>
              <h3 className="text-center">Advisors</h3>
              <div className="card-body ">
                <ul className="list-group">
                  {advisors.map((advisor) => {
                    const { id, name, designation } = advisor;
                    return (
                      <li key={id} className="list-group-item">
                        {name}, {designation}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="card border-0 shadow " style={{ margin: "8px" }}>
              <h3 className="text-center">Faculty in charge</h3>
              <div className="card-body ">
                <ul className="list-group">
                  {facultyMentors.map((facultyMentor) => {
                    const { id, name, designation } = facultyMentor;
                    return (
                      <li key={id} className="list-group-item">
                        {name}, {designation}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6 mb-4 mx-auto">
            <div className="card border-0 shadow " style={{ margin: "8px" }}>
              <h3 className="text-center">MENTORS</h3>
              <div className="card-body ">
                <ul className="list-group">
                  {industrialMentors.map((industrialMentor) => {
                    const { id, name, designation } = industrialMentor;
                    return (
                      <li key={id} className="list-group-item">
                        {name}, {designation}
                      </li>
                    );
                  })}
                  <br />
                </ul>
              </div>
            </div>

            <div className="card border-0 shadow " style={{ margin: "8px" }}>
              <h3 className="text-center">Faculty Coordinator</h3>
              <div className="card-body ">
                <ul className="list-group">
                  <li className="list-group-item">Prof. Geeta Patil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
