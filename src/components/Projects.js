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
    const numOne = scrollPosition >= 0 && scrollPosition <= 499;
    const numTwo = scrollPosition >= 500 && scrollPosition <= 1099;
    const numThree = scrollPosition >= 1100 && scrollPosition <= 1599;
    const numFour = scrollPosition >= 1600 && scrollPosition <= 2099;
    const numFive = scrollPosition >= 2100 && scrollPosition <= 2599;
    const numSix = scrollPosition >= 2600 && scrollPosition <= 3300;

    setOne(!numOne);
    setTwo(!numTwo);
    setThree(!numThree);
    setFour(!numFour);
    setFive(!numFive);
    setSix(!numSix);
  }, [scrollPosition]);

  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };
  const handleOneClick = () => {
    changeScroll(0);
  };
  const handleTwoClick = () => {
    changeScroll(500);
  };
  const handleThreeClick = () => {
    changeScroll(1100);
  };
  const handleFourClick = () => {
    changeScroll(1900);
  };
  const handleFiveClick = () => {
    changeScroll(2500);
  };
  const handleSixClick = () => {
    changeScroll(3000);
  };

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
      <div
        onClick={handleOneClick}
        className={one ? "circle-one bubble" : "circle-one bubble true"}
      >
        {!one ? <div className="number-true">1</div> : null}
      </div>
      <div
        onClick={handleTwoClick}
        className={two ? "circle-two bubble" : "circle-two bubble true"}
      >
        {!two ? <div className="number-true">2</div> : null}
      </div>
      <div
        onClick={handleThreeClick}
        className={three ? "circle-three bubble" : "circle-three bubble true"}
      >
        {!three ? <div className="number-true">3</div> : null}
      </div>
      <div
        onClick={handleFourClick}
        className={four ? "circle-four bubble" : "circle-four bubble true"}
      >
        {!four ? <div className="number-true">4</div> : null}
      </div>
      <div
        onClick={handleFiveClick}
        className={five ? "circle-five bubble" : "circle-five bubble true"}
      >
        {!five ? <div className="number-true">5</div> : null}
      </div>
      <div
        onClick={handleSixClick}
        className={six ? "circle-six bubble" : "circle-six bubble true"}
      >
        {!six ? <div className="number-true">6</div> : null}
      </div>
      <div className="project-right">
        <div className={!one ? "row row-one" : "row row-one falsey"}>
          <div className="row-inner-one row-inner">
            <div className="head">1. What we do</div>
            <div className="s-head">
              We are custom cabinet designers and builders, specializing in mid
              to upper tier cabinets. We use only the best hardware with soft
              close hinges and soft close under mount drawer slides.We offer
              solid hardwood dovetail drawer, a birch ply dovetail drawer or a
              three quarter inch melamine drawer, depending on your budget.
            </div>
            <div className="s-head">
              All of our boxes are CNC machined for precision fitment, made of
              three quarter melamine with over twenty color options. Our doors
              are also CNC machined for precision fitment. We offer thirty
              different species of hardwoods for doors to choose from, you can
              choose either three quarters inch thick or one-inch-thick doors.
            </div>
            <div className="s-head">
              We also offer a solid HDF door that works great for solid color
              doors that will not crack. We can finish your cabinets in just
              about any finish out there or any solid color you choose, we have
              many options on crown moldings as well. We use high grade
              conversion varnish finish on all our doors and trim.
            </div>
            <div className="s-head">
              If you are looking for custom cabinets to be build and want to
              install them yourself, give us a call.
            </div>
          </div>
        </div>
        <div className={!two ? "row row-two" : "row row-two falsey"}>
          <div className="row-inner-two row-inner">
            <div className="head">2. Custom Cabinets</div>
            <div className="s-head">
              We are custom cabinet designers and builders, specializing in mid
              to upper tier cabinets. We use only the best hardware with soft
              close hinges and soft close under mount drawer slides.
            </div>
            <br></br>
            <div className={!two ? "s-head pictures" : "s-head pictures false"}>
              pictures
            </div>
          </div>
        </div>
        <div className={!three ? "row row-three" : "row row-three falsey"}>
          <div className="row-inner-three row-inner">
            <div className="head">3. Kitchen Remodels</div>
            <div className="s-head">
              We are full service kitchen remodelers: Design hand in hand with
              you your new kitchen using 3D modeling.
            </div>
            <br></br>
            <div
              className={!three ? "s-head pictures" : "s-head pictures false"}
            >
              pictures
            </div>
          </div>
        </div>
        <div className={!four ? "row row-four" : "row row-four falsey"}>
          <div className="row-inner-four row-inner">
            <div className="head">4. Bathroom Remodels</div>
            <div className="s-head">
              We consider ourselves top tier bathroom remodel designer builders.
              Steam showers, heated floors, Euro glass doors, and more.
            </div>
            <br></br>
            <div
              className={!four ? "s-head pictures" : "s-head pictures false"}
            >
              pictures
            </div>
          </div>
        </div>
        <div className={!five ? "row row-five" : "row row-five falsey"}>
          <div className="row-inner-five row-inner">
            <div className="head">5. Custom Woodwork</div>
            <div className="s-head">
              We can custom make build ins, book cases, mantles, arches, false
              beams and more see our pictures.
            </div>
            <br></br>
            <div
              className={!five ? "s-head pictures" : "s-head pictures false"}
            >
              pictures
            </div>
          </div>
        </div>
        <div className={!six ? "row row-six" : "row row-six falsey"}>
          <div className="row-inner-six row-inner">
            <div className="head">6. and more</div>
            <div className="s-head">
              We can build pretty much anything you need.
            </div>
            <br></br>
            <div className={!six ? "s-head pictures" : "s-head pictures false"}>
              pictures
            </div>
          </div>
        </div>
      </div>
      <div className="project-far-right"></div>
    </div>
  );
}

export default Projects;
