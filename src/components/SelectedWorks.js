import React, { useState } from "react";
import "../styles/SelectedWorks.css";
import useScrollPosition from "../hooks/useScrollPosition";

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
              Our inspired solutions have helped shape modern acoustic design.
              Alluring spaces, internationally recognised for their
              architectural elegance and exceptional sound management live here.
            </div>
          </div>
          <div className="selected-works-right-bottom">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedWorks;
