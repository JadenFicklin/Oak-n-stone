import React from "react";
import "../styles/ProjectOne.css";

function ProjectOne() {
  return (
    <>
      <div className="project-one-outer">
        <div className="project-one-top">
          <div className="project-one-top-line"></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Eromanga Natural History Museum</div>
            </div>
            <div className="project-info-middle"></div>
            <div className="project-info-bottom">
              <div className="project-info-bottom-top">
                <div className="header">CATEGORY</div>
                <div className="mini-header">Arts and Community</div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES 1/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div className="left-button">left</div>
                  <div className="right-button">right</div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-one-left-right"></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner">
            <div className="project-one-right-inner-image-one"></div>
            <div className="project-one-right-inner-image-two"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;
