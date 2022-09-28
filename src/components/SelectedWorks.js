import React, { useState } from "react";
import "../styles/SelectedWorks.css";

function SelectedWorks() {
  const [one, setOne] = useState(false);
  const [button, setButton] = useState(false);

  setTimeout(() => {
    setOne(true);
  }, 1600);

  return (
    <>
      <div className="selected-works-outer">
        <div className="selected-works-left">
          <div className="selected-works-left-inner">SELECTED WORKS</div>
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
