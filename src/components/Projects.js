import React from "react";
import "../styles/Projects.css";
import useScrollPosition from "../hooks/useScrollPosition";

function Projects() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <div className="projects-outer">
      <div className="project-left">
        <div className="project-wheel-outer">
          {/* <div className="project-wheel-inner"></div> */}
          <div className="percent">
            <svg viewBox="-50 -50 300 300">
              <circle
                className="background-cirlce"
                cx="90"
                cy="90"
                r="90"
                stroke-dashoffset={0}
              />
            </svg>
          </div>
          <div className="percent">
            <svg viewBox="-50 -50 300 300">
              <circle
                cx="90"
                cy="90"
                r="90"
                stroke-dashoffset={scrollPosition / 2}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="circle-one bubble"></div>
      <div className="circle-two bubble"></div>
      <div className="circle-three bubble"></div>
      <div className="circle-four bubble"></div>
      <div className="circle-five bubble"></div>
      <div className="circle-six bubble"></div>
      <div className="project-right">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Projects;
