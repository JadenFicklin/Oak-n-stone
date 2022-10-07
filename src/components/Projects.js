import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import useScrollPosition from "../hooks/useScrollPosition";

function Projects() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  // const [number, setNumber] = useState(200);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);
  const [six, setSix] = useState(true);

  useEffect(() => {
    const numOne = scrollPosition >= 0 && scrollPosition <= 500;
    const numTwo = scrollPosition >= 500 && scrollPosition <= 1100;
    const numThree = scrollPosition >= 1100 && scrollPosition <= 1600;
    const numFour = scrollPosition >= 1600 && scrollPosition <= 2100;
    const numFive = scrollPosition >= 2100 && scrollPosition <= 2600;
    const numSix = scrollPosition >= 2600 && scrollPosition <= 3300;

    setOne(!numOne);
    setTwo(!numTwo);
    setThree(!numThree);
    setFour(!numFour);
    setFive(!numFive);
    setSix(!numSix);
  }, [scrollPosition]);

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
                stroke-dashoffset={-scrollPosition / 5.5}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={one ? "circle-one bubble" : "circle-one bubble true"}>
        {!one ? <div className="number-true">1</div> : null}
      </div>
      <div className={two ? "circle-two bubble" : "circle-two bubble true"}>
        {!two ? <div className="number-true">2</div> : null}
      </div>
      <div
        className={three ? "circle-three bubble" : "circle-three bubble true"}
      >
        {!three ? <div className="number-true">3</div> : null}
      </div>
      <div className={four ? "circle-four bubble" : "circle-four bubble true"}>
        {!four ? <div className="number-true">4</div> : null}
      </div>
      <div className={five ? "circle-five bubble" : "circle-five bubble true"}>
        {!five ? <div className="number-true">5</div> : null}
      </div>
      <div className={six ? "circle-six bubble" : "circle-six bubble true"}>
        {!six ? <div className="number-true">6</div> : null}
      </div>
      <div className="project-right">
        <div className="row"></div>
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
