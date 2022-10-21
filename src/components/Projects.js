import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import useScrollPosition from "../hooks/useScrollPosition";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
// import Svg from "./Svg";

function Projects() {
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const [nav, setNav] = useState(false);

  const [myNav, setMyNav] = useState(false);

  setTimeout(() => {
    setNav(true);
  }, 1600);

  const handleLogoClick = () => {
    changeScroll(0);
  };

  const scrollPosition = useScrollPosition();

  const [customCabinets, setCustomCabinets] = useState(1);
  const [kitchenRemodels, setKitchenRemodels] = useState(1);
  const [bathroomRemodels, setBathroomRemodels] = useState(1);
  const [customWoodwork, setCustomWoodwork] = useState(1);
  const [andMore, setAndMore] = useState(1);

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);
  const [six, setSix] = useState(true);

  const [handlePicturesTwo, setHandlePicturesTwo] = useState(false);
  const [handlePicturesThree, setHandlePicturesThree] = useState(false);
  const [handlePicturesFour, setHandlePicturesFour] = useState(false);
  const [handlePicturesFive, setHandlePicturesFive] = useState(false);
  const [handlePicturesSix, setHandlePicturesSix] = useState(false);

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
    changeScroll(3200);
  };

  const handlePicturesLeftClickCabinets = () => {
    setCustomCabinets(customCabinets - 1);
    if (customCabinets <= 1) {
      setCustomCabinets(1);
    }
  };
  const handlePicturesRightClickCabinets = () => {
    setCustomCabinets(customCabinets + 1);
    if (customCabinets >= 7) {
      setCustomCabinets(7);
    }
  };
  const handlePicturesLeftClickKitchenRemodel = () => {
    setKitchenRemodels(kitchenRemodels - 1);
    if (kitchenRemodels <= 1) {
      setKitchenRemodels(1);
    }
  };
  const handlePicturesRightClickKitchenRemodel = () => {
    setKitchenRemodels(kitchenRemodels + 1);
    if (kitchenRemodels >= 7) {
      setKitchenRemodels(7);
    }
  };
  const handlePicturesLeftClickBathroomRemodels = () => {
    setBathroomRemodels(bathroomRemodels - 1);
    if (bathroomRemodels <= 1) {
      setBathroomRemodels(1);
    }
  };
  const handlePicturesRightClickBathroomRemodels = () => {
    setBathroomRemodels(bathroomRemodels + 1);
    if (bathroomRemodels >= 8) {
      setBathroomRemodels(8);
    }
  };
  const handlePicturesLeftClickCustomWoodwork = () => {
    setCustomWoodwork(customWoodwork - 1);
    if (customWoodwork <= 1) {
      setCustomWoodwork(1);
    }
  };
  const handlePicturesRightClickCustomWoodwork = () => {
    setCustomWoodwork(customWoodwork + 1);
    if (customWoodwork >= 7) {
      setCustomWoodwork(7);
    }
  };
  const handlePicturesLeftClickAndMore = () => {
    setAndMore(andMore - 1);
    if (andMore <= 1) {
      setAndMore(1);
    }
  };
  const handlePicturesRightClickAndMore = () => {
    setAndMore(andMore + 1);
    if (andMore >= 9) {
      setAndMore(9);
    }
  };
  console.log(customCabinets);
  return (
    <>
      {/* nav  */}
      <div className={nav ? "nav-outer-two" : "nav-outer-two transparent"}>
        <nav className="nav-inner">
          <Link to="/" className="nav-logo">
            {/* <img
              src={require("../assets/logos/logo.JPG")}
              alt="logo"
              className="nav-logo-inner"
              onClick={handleLogoClick}
            /> */}
            <img
              src={require("../assets/images/oaklogo.svg").default}
              alt="logo"
              class="oak-logo"
              onClick={handleLogoClick}
            />
          </Link>
          <Link
            to="/projects"
            className="nav-sub-two"
            onMouseEnter={() => setProjects(true)}
            onMouseLeave={() => setProjects(false)}
            onClick={handleLogoClick}
          >
            PROJECTS
            <div
              className={
                projects
                  ? "nav-line-hover-true-two"
                  : "nav-line-hover-false-two"
              }
            ></div>
          </Link>

          <Link
            to="/about"
            className="nav-sub-two"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            ABOUT
            <div
              className={
                about ? "nav-line-hover-true-two" : "nav-line-hover-false-two"
              }
            ></div>
          </Link>
          <Link
            to="/contact"
            className="nav-sub-two"
            onMouseEnter={() => setContact(true)}
            onMouseLeave={() => setContact(false)}
          >
            CONTACT
            <div
              className={
                contact ? "nav-line-hover-true-two" : "nav-line-hover-false-two"
              }
            ></div>
          </Link>
          <div className="two-nav-lines-outer" onClick={() => setMyNav(!myNav)}>
            <div className="two-nav-lines-inner">
              <div className="two-navline"></div>
              <div className="two-navline"></div>
              <div className="two-navline"></div>
            </div>
            {myNav && (
              <div className="two-dropdown">
                <Link to="/" className="two-nav-home" onClick={handleLogoClick}>
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="two-nav-projects"
                  onClick={handleLogoClick}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="two-nav-about"
                  onClick={handleLogoClick}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="two-nav-contact"
                  onClick={handleLogoClick}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Projects  */}
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
                We are custom cabinet designers and builders, specializing in
                mid to upper tier cabinets. We use only the best hardware with
                soft close hinges and soft close under mount drawer slides.We
                offer solid hardwood dovetail drawer, a birch ply dovetail
                drawer or a three quarter inch melamine drawer, depending on
                your budget.
              </div>
              {/* <div className="s-head">
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
            </div> */}
              <br></br>
              <div
                className={!two ? "s-head pictures" : "s-head pictures false"}
              >
                Contact us
              </div>
            </div>
          </div>
          <div className={!two ? "row row-two" : "row row-two falsey"}>
            <div className="row-inner-two row-inner">
              <div className="head">2. Custom Cabinets</div>
              <div className="s-head">
                We are custom cabinet designers and builders, specializing in
                mid to upper tier cabinets. We use only the best hardware with
                soft close hinges and soft close under mount drawer slides.
              </div>
              <br></br>
              <div
                onClick={() => setHandlePicturesTwo(true)}
                className={!two ? "s-head pictures" : "s-head pictures false"}
              >
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
                onClick={() => setHandlePicturesThree(true)}
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
                We consider ourselves top tier bathroom remodel designer
                builders. Steam showers, heated floors, Euro glass doors, and
                more.
              </div>
              <br></br>
              <div
                onClick={() => setHandlePicturesFour(true)}
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
                onClick={() => setHandlePicturesFive(true)}
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
              <div
                onClick={() => setHandlePicturesSix(true)}
                className={!six ? "s-head pictures" : "s-head pictures false"}
              >
                pictures
              </div>
            </div>
          </div>
        </div>
        <div className="project-far-right"></div>
        {handlePicturesTwo ? (
          <div className="pictures-true handle-pictures-two">
            <div
              onClick={() => setHandlePicturesTwo(false)}
              className="back-button"
            >
              back
            </div>
          </div>
        ) : null}
        {handlePicturesThree ? (
          <div className="pictures-true handle-pictures-three">
            <div
              onClick={() => setHandlePicturesThree(false)}
              className="back-button"
            >
              back
            </div>
          </div>
        ) : null}
        {handlePicturesFour ? (
          <div className="pictures-true handle-pictures-four">
            <div
              onClick={() => setHandlePicturesFour(false)}
              className="back-button"
            >
              back
            </div>
          </div>
        ) : null}
        {handlePicturesFive ? (
          <div className="pictures-true handle-pictures-five">
            <div
              onClick={() => setHandlePicturesFive(false)}
              className="back-button"
            >
              back
            </div>
          </div>
        ) : null}
        {handlePicturesSix ? (
          <div className="pictures-true handle-pictures-six">
            <div
              onClick={() => setHandlePicturesSix(false)}
              className="back-button"
            >
              back
            </div>
          </div>
        ) : null}
      </div>
      {handlePicturesTwo ? (
        <div className="pictures-outer">
          <div className="pictures-inner">
            {customCabinets === 1 && (
              <div className="picture-one-true p-t"></div>
            )}
            {customCabinets === 2 && (
              <div className="picture-two-true p-t"></div>
            )}
            {customCabinets === 3 && (
              <div className="picture-three-true p-t"></div>
            )}
            {customCabinets === 4 && (
              <div className="picture-four-true p-t"></div>
            )}
            {customCabinets === 5 && (
              <div className="picture-five-true p-t"></div>
            )}
            {customCabinets === 6 && (
              <div className="picture-six-true p-t"></div>
            )}
            {customCabinets === 7 && (
              <div className="picture-seven-true p-t"></div>
            )}
          </div>
          <div
            className="pictures-left-button"
            onClick={handlePicturesLeftClickCabinets}
          >
            <BiLeftArrowAlt className="pic-icon icon-left" />
          </div>
          <div
            onClick={handlePicturesRightClickCabinets}
            className="pictures-right-button"
          >
            <BiRightArrowAlt className="pic-icon icon-right" />
          </div>
        </div>
      ) : null}
      {handlePicturesThree ? (
        <div className="pictures-outer">
          <div className="pictures-inner">
            {kitchenRemodels === 1 && (
              <div className="picture-one-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 2 && (
              <div className="picture-two-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 3 && (
              <div className="picture-three-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 4 && (
              <div className="picture-four-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 5 && (
              <div className="picture-five-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 6 && (
              <div className="picture-six-true-kitchen-remodel p-t"></div>
            )}
            {kitchenRemodels === 7 && (
              <div className="picture-seven-true-kitchen-remodel p-t"></div>
            )}
          </div>
          <div
            className="pictures-left-button"
            onClick={handlePicturesLeftClickKitchenRemodel}
          >
            <BiLeftArrowAlt className="pic-icon icon-left" />
          </div>
          <div
            onClick={handlePicturesRightClickKitchenRemodel}
            className="pictures-right-button"
          >
            <BiRightArrowAlt className="pic-icon icon-right" />
          </div>
        </div>
      ) : null}
      {handlePicturesFour ? (
        <div className="pictures-outer">
          <div className="pictures-inner">
            {bathroomRemodels === 1 && (
              <div className="picture-one-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 2 && (
              <div className="picture-two-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 3 && (
              <div className="picture-three-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 4 && (
              <div className="picture-four-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 5 && (
              <div className="picture-five-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 6 && (
              <div className="picture-six-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 7 && (
              <div className="picture-seven-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 8 && (
              <div className="picture-eight-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 9 && (
              <div className="picture-nine-true-bathroom-remodel p-t"></div>
            )}
            {bathroomRemodels === 10 && (
              <div className="picture-ten-true-bathroom-remodel p-t"></div>
            )}
          </div>
          <div
            className="pictures-left-button"
            onClick={handlePicturesLeftClickBathroomRemodels}
          >
            <BiLeftArrowAlt className="pic-icon icon-left" />
          </div>
          <div
            onClick={handlePicturesRightClickBathroomRemodels}
            className="pictures-right-button"
          >
            <BiRightArrowAlt className="pic-icon icon-right" />
          </div>
        </div>
      ) : null}
      {handlePicturesFive ? (
        <div className="pictures-outer">
          <div className="pictures-inner">
            {customWoodwork === 1 && (
              <div className="picture-one-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 2 && (
              <div className="picture-two-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 3 && (
              <div className="picture-three-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 4 && (
              <div className="picture-four-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 5 && (
              <div className="picture-five-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 6 && (
              <div className="picture-six-true-custom-woodwork p-t"></div>
            )}
            {customWoodwork === 7 && (
              <div className="picture-seven-true-custom-woodwork p-t"></div>
            )}
          </div>
          <div
            className="pictures-left-button"
            onClick={handlePicturesLeftClickCustomWoodwork}
          >
            <BiLeftArrowAlt className="pic-icon icon-left" />
          </div>
          <div
            onClick={handlePicturesRightClickCustomWoodwork}
            className="pictures-right-button"
          >
            <BiRightArrowAlt className="pic-icon icon-right" />
          </div>
        </div>
      ) : null}
      {handlePicturesSix ? (
        <div className="pictures-outer">
          <div className="pictures-inner">
            {andMore === 1 && (
              <div className="picture-one-true-and-more p-t"></div>
            )}
            {andMore === 2 && (
              <div className="picture-two-true-and-more p-t"></div>
            )}
            {andMore === 3 && (
              <div className="picture-three-true-and-more p-t"></div>
            )}
            {andMore === 4 && (
              <div className="picture-four-true-and-more p-t"></div>
            )}
            {andMore === 5 && (
              <div className="picture-five-true-and-more p-t"></div>
            )}
            {andMore === 6 && (
              <div className="picture-six-true-and-more p-t"></div>
            )}
            {andMore === 7 && (
              <div className="picture-seven-true-and-more p-t"></div>
            )}
            {andMore === 8 && (
              <div className="picture-eight-true-and-more p-t"></div>
            )}
            {andMore === 9 && (
              <div className="picture-nine-true-and-more p-t"></div>
            )}
          </div>
          <div
            className="pictures-left-button"
            onClick={handlePicturesLeftClickAndMore}
          >
            <BiLeftArrowAlt className="pic-icon icon-left" />
          </div>
          <div
            onClick={handlePicturesRightClickAndMore}
            className="pictures-right-button"
          >
            <BiRightArrowAlt className="pic-icon icon-right" />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Projects;
