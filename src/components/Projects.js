import React from "react";
import "../styles/Projects.css";
import useScrollPosition from "../hooks/useScrollPosition";

function Projects() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <div className="projects-outer">
        <div className="project-left">
          <div className="project-wheel-outer">
            {/* <div className="project-wheel-inner"></div> */}
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  87 <span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">Progress</h2>
          </div>
        </div>
        <div className="project-right">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
