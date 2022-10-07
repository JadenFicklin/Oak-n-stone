import React, { useState } from "react";
import "../styles/SelectedWorks.css";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";

function SelectedWorks() {
  const scrollPosition = useScrollPosition();
  const [one, setOne] = useState(false);
  const [button, setButton] = useState(false);

  setTimeout(() => {
    setOne(true);
  }, 1600);

  const spanChangeStyling = { marginTop: "30px", opacity: "100%" };
  const spanStaticStyling = { marginTop: "60px", opacity: "0%" };

  const selectedStyling =
    scrollPosition < 1100 ? spanStaticStyling : spanChangeStyling;

  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  const handleProjectsButtonClick = () => {
    changeScroll(0);
  };

  return (
    <>
      <div className="selected-works-outer">
        <div className="selected-works-left">
          <div className="selected-works-left-inner" style={selectedStyling}>
            SELECTED WORKS
          </div>
        </div>
        <div className="selected-works-right">
          <div className="selected-works-right-top">
            <div className="selected-works-right-top-inner">
              We are family-owned and operated. Rod and Nate specialize in
              custom woodwork, remodel and finish work. We design and build
              custom kitchens and baths and other custom woodwork
            </div>
          </div>
          <Link
            to="/projects"
            className="selected-works-right-bottom"
            onClick={handleProjectsButtonClick}
          >
            <div
              className={
                one ? "selected-works-button" : "selected-works-button"
              }
              onMouseEnter={() => setButton(true)}
              onMouseLeave={() => setButton(false)}
            >
              <span
                className={button ? "products-text" : "products-text-false"}
              >
                VIEW ALL WORKS
              </span>
              <div
                className={button ? "button-hover" : "button-hover-false"}
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SelectedWorks;
