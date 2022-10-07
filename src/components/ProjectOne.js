import React, { useState, useEffect } from "react";
import "../styles/ProjectOne.css";
import useScrollPosition from "../hooks/useScrollPosition";

function ProjectOne() {
  const scrollPosition = useScrollPosition();

  // const spanChangeStyling = { marginTop: "30px", opacity: "100%" };
  // const spanStaticStyling = { marginTop: "60px", opacity: "0%" };

  const [number, setNumber] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
  const [numberThree, setNumberThree] = useState(1);
  const [numberFour, setNumberFour] = useState(1);
  const [numberFive, setNumberFive] = useState(1);

  const [lineOne, setLineOne] = useState(false);
  const [lineTwo, setLineTwo] = useState(false);
  const [lineOneTwo, setLineOneTwo] = useState(false);
  const [lineTwoTwo, setLineTwoTwo] = useState(false);
  const [lineOneThree, setLineOneThree] = useState(false);
  const [lineTwoThree, setLineTwoThree] = useState(false);
  const [lineOneFour, setLineOneFour] = useState(false);
  const [lineTwoFour, setLineTwoFour] = useState(false);
  const [lineOneFive, setLineOneFive] = useState(false);
  const [lineTwoFive, setLineTwoFive] = useState(false);

  const [imageOne, setImageOne] = useState(true);
  const [imageTwo, setImageTwo] = useState(true);
  const [imageOneTwo, setImageOneTwo] = useState(true);
  const [imageTwoTwo, setImageTwoTwo] = useState(true);
  const [imageOneThree, setImageOneThree] = useState(true);
  const [imageTwoThree, setImageTwoThree] = useState(true);
  const [imageOneFour, setImageOneFour] = useState(true);
  const [imageTwoFour, setImageTwoFour] = useState(true);
  const [imageOneFive, setImageOneFive] = useState(true);
  const [imageTwoFive, setImageTwoFive] = useState(true);

  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonLeftTwo, setButtonLeftTwo] = useState(false);
  const [buttonLeftThree, setButtonLeftThree] = useState(false);
  const [buttonLeftFour, setButtonLeftFour] = useState(false);
  const [buttonLeftFive, setButtonLeftFive] = useState(false);

  const [buttonRight, setButtonRight] = useState(false);
  const [buttonRightTwo, setButtonRightTwo] = useState(false);
  const [buttonRightThree, setButtonRightThree] = useState(false);
  const [buttonRightFour, setButtonRightFour] = useState(false);
  const [buttonRightFive, setButtonRightFive] = useState(false);

  // one
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
  // two
  const handleLeftClickTwo = () => {
    setNumberTwo(numberTwo - 1);
    if (numberTwo <= 1) {
      setNumberTwo(1);
      setButtonLeftTwo(false);
      setButtonRightTwo(false);
    }
  };
  const handleRightClickTwo = () => {
    setNumberTwo(numberTwo + 1);
    if (numberTwo >= 4) {
      setNumberTwo(4);
      setButtonLeftTwo(false);
      setButtonRightTwo(false);
    }
  };
  // three
  const handleLeftClickThree = () => {
    setNumberThree(numberThree - 1);
    if (numberThree <= 1) {
      setNumberThree(1);
      setButtonLeftThree(false);
      setButtonRightThree(false);
    }
  };
  const handleRightClickThree = () => {
    setNumberThree(numberThree + 1);
    if (numberThree >= 4) {
      setNumberThree(4);
      setButtonLeftThree(false);
      setButtonRightThree(false);
    }
  };
  // four
  const handleLeftClickFour = () => {
    setNumberFour(numberFour - 1);
    if (numberFour <= 1) {
      setNumberFour(1);
      setButtonLeftFour(false);
      setButtonRightFour(false);
    }
  };
  const handleRightClickFour = () => {
    setNumberFour(numberFour + 1);
    if (numberFour >= 4) {
      setNumberFour(4);
      setButtonLeftFour(false);
      setButtonRightFour(false);
    }
  };
  // five
  const handleLeftClickFive = () => {
    setNumberFive(numberFive - 1);
    if (numberFive <= 1) {
      setNumberFive(1);
      setButtonLeftFive(false);
      setButtonRightFive(false);
    }
  };
  const handleRightClickFive = () => {
    setNumberFive(numberFive + 1);
    if (numberFive >= 4) {
      setNumberFive(4);
      setButtonLeftFive(false);
      setButtonRightFive(false);
    }
  };

  useEffect(() => {
    // one
    if (scrollPosition >= 1300) {
      setLineOne(true);
    }
    if (scrollPosition >= 1300) {
      setLineTwo(true);
    }
    // two
    if (scrollPosition >= 2050) {
      setLineOneTwo(true);
    }
    if (scrollPosition >= 2050) {
      setLineTwoTwo(true);
    }
    // Three
    if (scrollPosition >= 2850) {
      setLineOneThree(true);
    }
    if (scrollPosition >= 2850) {
      setLineTwoThree(true);
    }
    // Four
    if (scrollPosition >= 3650) {
      setLineOneFour(true);
    }
    if (scrollPosition >= 3650) {
      setLineTwoFour(true);
    }
    // Five
    if (scrollPosition >= 4450) {
      setLineOneFive(true);
    }
    if (scrollPosition >= 4450) {
      setLineTwoFive(true);
    }

    // image one
    if (scrollPosition >= 1300) {
      setImageOne(false);
    }
    if (scrollPosition >= 1300) {
      setImageTwo(false);
    }
    // image Two
    if (scrollPosition >= 2050) {
      setImageOneTwo(false);
    }
    if (scrollPosition >= 2050) {
      setImageTwoTwo(false);
    }
    // image Three
    if (scrollPosition >= 2850) {
      setImageOneThree(false);
    }
    if (scrollPosition >= 2850) {
      setImageTwoThree(false);
    }
    // image Four
    if (scrollPosition >= 3650) {
      setImageOneFour(false);
    }
    if (scrollPosition >= 3650) {
      setImageTwoFour(false);
    }
    // image Five
    if (scrollPosition >= 4450) {
      setImageOneFive(false);
    }
    if (scrollPosition >= 4450) {
      setImageTwoFive(false);
    }
  }, [scrollPosition]);

  const opacity = { opacity: "50%" };
  const noOpacity = { opacity: "100%" };
  const handleLeftButtonStyling = number === 1 ? opacity : noOpacity;
  const handleRightButtonStyling = number === 4 ? opacity : noOpacity;

  const handleLeftButtonStylingTwo = numberTwo === 1 ? opacity : noOpacity;
  const handleRightButtonStylingTwo = numberTwo === 4 ? opacity : noOpacity;

  const handleLeftButtonStylingThree = numberThree === 1 ? opacity : noOpacity;
  const handleRightButtonStylingThree = numberThree === 4 ? opacity : noOpacity;

  const handleLeftButtonStylingFour = numberFour === 1 ? opacity : noOpacity;
  const handleRightButtonStylingFour = numberFour === 4 ? opacity : noOpacity;

  const handleLeftButtonStylingFive = numberFive === 1 ? opacity : noOpacity;
  const handleRightButtonStylingFive = numberFive === 4 ? opacity : noOpacity;

  // const leftOne = { left: "0%" };
  // const leftTwo = { left: "-80%" };-
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
  const leftMarginTwo = numberTwo * 80 - 80;
  const leftMarginThree = numberThree * 80 - 80;
  const leftMarginFour = numberFour * 80 - 80;
  const leftMarginFive = numberFive * 80 - 80;
  const handleMarginLeft = { left: `-${leftMargin}%` };
  const handleMarginLeftTwo = { left: `-${leftMarginTwo}%` };
  const handleMarginLeftThree = { left: `-${leftMarginThree}%` };
  const handleMarginLeftFour = { left: `-${leftMarginFour}%` };
  const handleMarginLeftFive = { left: `-${leftMarginFive}%` };

  return (
    <>
      {/* part one */}
      {/* part one */}
      {/* part one */}
      {/* part one */}
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
            <div className="project-one-right-inner-image image img-one">
              <div
                className={imageOne ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-two">
              <div
                className={imageTwo ? "image-cover" : "image-cover-false-delay"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-three"></div>
            <div className="project-one-right-inner-image image img-four"></div>
          </div>
        </div>
      </div>

      {/* part two */}
      {/* part two */}
      {/* part two */}
      {/* part two */}
      {/* part two */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div
            className={
              lineOneTwo
                ? "project-one-top-line"
                : "project-one-top-line h-line-false"
            }
          ></div>
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
                <div className="header"></div>
                <div className="mini-header"></div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES {numberTwo}/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div
                    className={
                      buttonLeftTwo ? "left-button-hovered" : "left-button"
                    }
                    onClick={handleLeftClickTwo}
                    onMouseEnter={() => setButtonLeftTwo(true)}
                    onMouseLeave={() => setButtonLeftTwo(false)}
                    style={handleLeftButtonStylingTwo}
                  >
                    <span
                      className={
                        buttonLeftTwo ? "products-text" : "products-text-false"
                      }
                    >
                      left
                    </span>
                    <div
                      className={
                        buttonLeftTwo ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      buttonRightTwo ? "right-button-hovered" : "right-button"
                    }
                    onClick={handleRightClickTwo}
                    onMouseEnter={() => setButtonRightTwo(true)}
                    onMouseLeave={() => setButtonRightTwo(false)}
                    style={handleRightButtonStylingTwo}
                  >
                    <span
                      className={
                        buttonRightTwo ? "products-text" : "products-text-false"
                      }
                    >
                      right
                    </span>
                    <div
                      className={
                        buttonRightTwo ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              lineTwoTwo
                ? "project-one-left-right"
                : "project-one-left-right v-line-false"
            }
          ></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner" style={handleMarginLeftTwo}>
            <div className="project-one-right-inner-image image img-five">
              <div
                className={imageOneTwo ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-six">
              <div
                className={
                  imageTwoTwo ? "image-cover" : "image-cover-false-delay"
                }
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-seven"></div>
            <div className="project-one-right-inner-image image img-eight"></div>
          </div>
        </div>
      </div>

      {/* part three */}
      {/* part three */}
      {/* part three */}
      {/* part three */}
      {/* part three */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div
            className={
              lineOneThree
                ? "project-one-top-line"
                : "project-one-top-line h-line-false"
            }
          ></div>
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
                <div className="header"></div>
                <div className="mini-header"></div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES {numberThree}/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div
                    className={
                      buttonLeftThree ? "left-button-hovered" : "left-button"
                    }
                    onClick={handleLeftClickThree}
                    onMouseEnter={() => setButtonLeftThree(true)}
                    onMouseLeave={() => setButtonLeftThree(false)}
                    style={handleLeftButtonStylingThree}
                  >
                    <span
                      className={
                        buttonLeftThree
                          ? "products-text"
                          : "products-text-false"
                      }
                    >
                      left
                    </span>
                    <div
                      className={
                        buttonLeftThree ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      buttonRightThree ? "right-button-hovered" : "right-button"
                    }
                    onClick={handleRightClickThree}
                    onMouseEnter={() => setButtonRightThree(true)}
                    onMouseLeave={() => setButtonRightThree(false)}
                    style={handleRightButtonStylingThree}
                  >
                    <span
                      className={
                        buttonRightThree
                          ? "products-text"
                          : "products-text-false"
                      }
                    >
                      right
                    </span>
                    <div
                      className={
                        buttonRightThree ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              lineTwoThree
                ? "project-one-left-right"
                : "project-one-left-right v-line-false"
            }
          ></div>
        </div>
        <div className="project-one-right">
          <div
            className="project-one-right-inner"
            style={handleMarginLeftThree}
          >
            <div className="project-one-right-inner-image image img-nine">
              <div
                className={imageOneThree ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-ten">
              <div
                className={
                  imageTwoThree ? "image-cover" : "image-cover-false-delay"
                }
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-eleven"></div>
            <div className="project-one-right-inner-image image img-twelve"></div>
          </div>
        </div>
      </div>
      {/* part four */}
      {/* part four */}
      {/* part four */}
      {/* part four */}
      {/* part four */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div
            className={
              lineOneFour
                ? "project-one-top-line"
                : "project-one-top-line h-line-false"
            }
          ></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Custom Woodwork</div>
            </div>
            <div className="project-info-middle"></div>
            <div className="project-info-bottom">
              <div className="project-info-bottom-top">
                <div className="header"></div>
                <div className="mini-header"></div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES {numberFour}/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div
                    className={
                      buttonLeftFour ? "left-button-hovered" : "left-button"
                    }
                    onClick={handleLeftClickFour}
                    onMouseEnter={() => setButtonLeftFour(true)}
                    onMouseLeave={() => setButtonLeftFour(false)}
                    style={handleLeftButtonStylingFour}
                  >
                    <span
                      className={
                        buttonLeftFour ? "products-text" : "products-text-false"
                      }
                    >
                      left
                    </span>
                    <div
                      className={
                        buttonLeftFour ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      buttonRightFour ? "right-button-hovered" : "right-button"
                    }
                    onClick={handleRightClickFour}
                    onMouseEnter={() => setButtonRightFour(true)}
                    onMouseLeave={() => setButtonRightFour(false)}
                    style={handleRightButtonStylingFour}
                  >
                    <span
                      className={
                        buttonRightFour
                          ? "products-text"
                          : "products-text-false"
                      }
                    >
                      right
                    </span>
                    <div
                      className={
                        buttonRightFour ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              lineTwoFour
                ? "project-one-left-right"
                : "project-one-left-right v-line-false"
            }
          ></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner" style={handleMarginLeftFour}>
            <div className="project-one-right-inner-image image img-thirteen">
              <div
                className={imageOneFour ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-fourteen">
              <div
                className={
                  imageTwoFour ? "image-cover" : "image-cover-false-delay"
                }
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-fifteen"></div>
            <div className="project-one-right-inner-image image img-sixteen"></div>
          </div>
        </div>
      </div>
      {/* part five */}
      {/* part five */}
      {/* part five */}
      {/* part five */}
      {/* part five */}
      <div className="project-one-outer">
        <div className="project-one-top">
          <div
            className={
              lineOneFive
                ? "project-one-top-line"
                : "project-one-top-line h-line-false"
            }
          ></div>
        </div>
        <div className="project-one-left">
          <div className="project-one-left-left">
            <div className="project-info-top">
              <div className="header">PROJECT</div>
              <div className="sub-header">Other Projects</div>
            </div>
            <div className="project-info-middle"></div>
            <div className="project-info-bottom">
              <div className="project-info-bottom-top">
                <div className="header"></div>
                <div className="mini-header"></div>
              </div>
              <div className="project-info-bottom-bottom">
                <div className="project-info-bottom-bottom-top">
                  <div className="header">IMAGES {numberFive}/4</div>
                </div>
                <div className="project-info-bottom-bottom-bottom">
                  <div
                    className={
                      buttonLeftFive ? "left-button-hovered" : "left-button"
                    }
                    onClick={handleLeftClickFive}
                    onMouseEnter={() => setButtonLeftFive(true)}
                    onMouseLeave={() => setButtonLeftFive(false)}
                    style={handleLeftButtonStylingFive}
                  >
                    <span
                      className={
                        buttonLeftFive ? "products-text" : "products-text-false"
                      }
                    >
                      left
                    </span>
                    <div
                      className={
                        buttonLeftFive ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      buttonRight ? "right-button-hovered" : "right-button"
                    }
                    onClick={handleRightClickFive}
                    onMouseEnter={() => setButtonRightFive(true)}
                    onMouseLeave={() => setButtonRightFive(false)}
                    style={handleRightButtonStylingFive}
                  >
                    <span
                      className={
                        buttonRightFive
                          ? "products-text"
                          : "products-text-false"
                      }
                    >
                      right
                    </span>
                    <div
                      className={
                        buttonRightFive ? "button-hover" : "button-hover-false"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              lineTwoFive
                ? "project-one-left-right"
                : "project-one-left-right v-line-false"
            }
          ></div>
        </div>
        <div className="project-one-right">
          <div className="project-one-right-inner" style={handleMarginLeftFive}>
            <div className="project-one-right-inner-image image img-seventeen">
              <div
                className={imageOneFive ? "image-cover" : "image-cover-false"}
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-eighteen">
              <div
                className={
                  imageTwoFive ? "image-cover" : "image-cover-false-delay"
                }
              ></div>
            </div>
            <div className="project-one-right-inner-image image img-nineteen"></div>
            <div className="project-one-right-inner-image image img-twenty"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;
