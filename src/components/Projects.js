import React from "react";
import "../styles/Projects.css";
import useScrollPosition from "../hooks/useScrollPosition";

function Projects() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  const scrollNumber = scrollPosition;

  const pictureWheelStyling = {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23CFCFB0FF' stroke-width='4' stroke-dasharray='${scrollNumber}%2c 700' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e")`,
  };

  return (
    <>
      <div className="projects-outer">
        <div className="project-left">
          <div className="project-wheel-outer">
            <div
              className="project-wheel-inner"
              style={pictureWheelStyling}
            ></div>
          </div>
        </div>
        <div className="project-right">
          <div className="row"></div>
          <div className="row"></div>
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
