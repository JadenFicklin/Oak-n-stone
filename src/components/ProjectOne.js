import React, { useState } from "react";
import "../styles/ProjectOne.css";

function ProjectOne() {
  const [number, setNumber] = useState(1);

  const handleLeftClick = () => {
    setNumber(number - 1);
    if (number <= 1) {
      setNumber(1);
    }
  };
  const handleRightClick = () => {
    setNumber(number + 1);
    if (number >= 4) {
      setNumber(4);
    }
  };

  // const leftOne = { left: "0%" };
  // const leftTwo = { left: "-80%" };
  // const leftThree = { left: "-160%" };
  // const leftFour = { left: "-240%" };

  // let handleMarginLeft = { left: "0%" };

  // if (number === 1) {
  //   handleMarginLeft = leftOne;
  // } else if (number === 2) {
  //   handleMarginLeft = leftTwo;
  // } else if (number === 3) {
  //   handleMarginLeft = leftThree;
  // } else {
  //   handleMarginLeft = leftFour;
  // }

  // --------------------- OBJECT

  // const margins = {
  //   1: 0,
  //   2: 80,
  //   3: 160,
  //   4: 240,
  // };

  // const handleMarginLeft = { left: `-${margins[number]}%` };

  // ------------------- ARRAY

  // const margins = [0, 80, 160, 240];
  // const handleMarginLeft = { left: `-${margins[number - 1]}%` };

  // --------------------- PROGRAMATIC

  const leftMargin = number * 80 - 80;
  const handleMarginLeft = { left: `-${leftMargin}%` };

  return (
    <>
      {/* part one */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div className="project-one-top-line"></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Custom Cabinets</div>
            </div>
            <div className="project-info-middle"></div>
            <div className="project-info-bottom">
              <div className="project-info-bottom-top">
                <div className="header"></div>
                <div className="mini-header"></div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES {number}/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div className="left-button" onClick={handleLeftClick}>
                    left
                  </div>
                  <div className="right-button" onClick={handleRightClick}>
                    right
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-one-left-right"></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner" style={handleMarginLeft}>
            <div className="project-one-right-inner-image-one image"></div>
            <div className="project-one-right-inner-image-two image"></div>
            <div className="project-one-right-inner-image-three image"></div>
            <div className="project-one-right-inner-image-four image"></div>
          </div>
        </div>
      </div>

      {/* part two */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div className="project-one-top-line"></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Kitchen Remodels</div>
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
            {/* <div className="project-one-right-inner-image-one"></div> */}
            {/* <div className="project-one-right-inner-image-two"></div> */}
          </div>
        </div>
      </div>

      {/* part three */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div className="project-one-top-line"></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Bathroom Remodels</div>
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
            {/* <div className="project-one-right-inner-image-one"></div> */}
            {/* <div className="project-one-right-inner-image-two"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;
