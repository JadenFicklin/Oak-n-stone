import React, { useState, useEffect } from "react";
import "../styles/ProjectOne.css";
import useScrollPosition from "../hooks/useScrollPosition";

function ProjectOne() {
  const scrollPosition = useScrollPosition();

  // const spanChangeStyling = { marginTop: "30px", opacity: "100%" };
  // const spanStaticStyling = { marginTop: "60px", opacity: "0%" };

  const [number, setNumber] = useState(1);
  const [lineOne, setLineOne] = useState(false);
  const [lineTwo, setLineTwo] = useState(false);
  const [imageOne, setImageOne] = useState(true);
  const [imageTwo, setImageTwo] = useState(true);

  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonRight, setButtonRight] = useState(false);

  const handleLeftClick = () => {
    setNumber(number - 1);
    if (number <= 1) {
      setNumber(1);
      setButtonLeft(false);
      setButtonRight(false);
    }
  };
  const handleRightClick = () => {
    setNumber(number + 1);
    if (number >= 4) {
      setNumber(4);
      setButtonLeft(false);
      setButtonRight(false);
    }
  };

  useEffect(() => {
    if (scrollPosition >= 1300) {
      setLineOne(true);
    }
    if (scrollPosition >= 1300) {
      setLineTwo(true);
    }
    if (scrollPosition >= 1300) {
      setImageOne(false);
    }
    if (scrollPosition >= 1300) {
      setImageTwo(false);
    }
  }, [scrollPosition]);

  const opacity = { opacity: "50%" };
  const noOpacity = { opacity: "100%" };
  const handleLeftButtonStyling = number === 1 ? opacity : noOpacity;
  const handleRightButtonStyling = number === 4 ? opacity : noOpacity;

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
          <div
            className={
              lineOne
                ? "project-one-top-line"
                : "project-one-top-line h-line-false"
            }
          ></div>
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
                  <div
                    className={
                      buttonLeft ? "left-button-hovered" : "left-button"
                    }
                    onClick={handleLeftClick}
                    onMouseEnter={() => setButtonLeft(true)}
                    onMouseLeave={() => setButtonLeft(false)}
                    style={handleLeftButtonStyling}
                  >
                    <span
                      className={
                        buttonLeft ? "products-text" : "products-text-false"
                      }
                    >
                      left
                    </span>
                    <div
                      className={
                        buttonLeft ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      buttonRight ? "right-button-hovered" : "right-button"
                    }
                    onClick={handleRightClick}
                    onMouseEnter={() => setButtonRight(true)}
                    onMouseLeave={() => setButtonRight(false)}
                    style={handleRightButtonStyling}
                  >
                    <span
                      className={
                        buttonRight ? "products-text" : "products-text-false"
                      }
                    >
                      right
                    </span>
                    <div
                      className={
                        buttonRight ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              lineTwo
                ? "project-one-left-right"
                : "project-one-left-right v-line-false"
            }
          ></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner" style={handleMarginLeft}>
            <div className="project-one-right-inner-image-one image">
              <div
                className={imageOne ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image-two image">
              <div
                className={imageTwo ? "image-cover" : "image-cover-false-delay"}
              ></div>
            </div>
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
                  <div>left</div>
                  <div>right</div>
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
