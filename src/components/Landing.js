import React, { useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  const [thirtyone, setThirtyone] = useState(false);
  const [thirtytwo, setThirtytwo] = useState(false);
  const [thirtythree, setThirtythree] = useState(false);
  const [thirtyfour, setThirtyfour] = useState(false);

  const [button, setButton] = useState(false);

  const [thirtyfive, setThirtyfive] = useState(false);

  // lines
  const [thirtysix, setThirtysix] = useState(false);
  const [thirtyseven, setThirtyseven] = useState(false);
  const [thirtyeight, setThirtyeight] = useState(false);
  const [thirtynine, setThirtynine] = useState(false);
  const [fourty, setFourty] = useState(false);
  const [fourtyone, setFourtyone] = useState(false);
  const [fourtytwo, setFourtytwo] = useState(false);
  const [fourtythree, setFourtythree] = useState(false);

  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const [nav, setNav] = useState(false);

  const [myNav, setMyNav] = useState(false);

  setTimeout(() => {
    setNav(true);
  }, 1600);

  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  const handleLogoClick = () => {
    changeScroll(0);
  };

  // sub landing fade in
  setTimeout(() => {
    setThirtyone(true);
  }, 2300);
  setTimeout(() => {
    setThirtytwo(true);
  }, 2400);
  setTimeout(() => {
    setThirtythree(true);
  }, 2500);
  setTimeout(() => {
    setThirtyfour(true);
  }, 2600);

  // span image
  setTimeout(() => {
    setThirtyfive(true);
  }, 2000);

  // lines
  setTimeout(() => {
    setThirtysix(true);
  }, 600);
  setTimeout(() => {
    setThirtyseven(true);
  }, 400);
  setTimeout(() => {
    setThirtyeight(true);
  }, 200);
  setTimeout(() => {
    setThirtynine(true);
  }, 0);
  setTimeout(() => {
    setFourty(true);
  }, 200);
  setTimeout(() => {
    setFourtyone(true);
  }, 400);
  setTimeout(() => {
    setFourtytwo(true);
  }, 600);

  setTimeout(() => {
    setFourtythree(true);
  }, 1600);

  return (
    <>
      <div
        className={nav ? "landing-nav-outer" : "landing-nav-outer transparent"}
      >
        <nav className="landing-nav-inner">
          <Link to="/" className="landing-nav-logo">
            <img
              src={require("../assets/logos/logo.JPG")}
              alt="logo"
              className="landing-nav-logo-inner"
              onClick={handleLogoClick}
            />
          </Link>
          <Link
            to="/projects"
            className="landing-nav-sub"
            onMouseEnter={() => setProjects(true)}
            onMouseLeave={() => setProjects(false)}
            onClick={handleLogoClick}
          >
            PROJECTS
            <div
              className={
                projects
                  ? "landing-nav-line-hover-true"
                  : "landing-nav-line-hover-false"
              }
            ></div>
          </Link>

          <Link
            to="/about"
            className="landing-nav-sub"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            ABOUT
            <div
              className={
                about
                  ? "landing-nav-line-hover-true"
                  : "landing-nav-line-hover-false"
              }
            ></div>
          </Link>
          <Link
            to="/contact"
            className="landing-nav-sub"
            onMouseEnter={() => setContact(true)}
            onMouseLeave={() => setContact(false)}
          >
            CONTACT
            <div
              className={
                contact
                  ? "landing-nav-line-hover-true"
                  : "landing-nav-line-hover-false"
              }
            ></div>
          </Link>
          <div
            className="landing-nav-lines-outer"
            onClick={() => setMyNav(!myNav)}
          >
            <div className="landing-nav-lines-inner">
              <div className="landing-navline"></div>
              <div className="landing-navline"></div>
              <div className="landing-navline"></div>
            </div>
            {myNav && (
              <div className="landing-dropdown">
                <Link
                  to="/"
                  className="landing-nav-home"
                  onClick={handleLogoClick}
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="landing-nav-projects"
                  onClick={handleLogoClick}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="landing-nav-about"
                  onClick={handleLogoClick}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="landing-nav-contact"
                  onClick={handleLogoClick}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="landing-outer">
        <div className="landing-top">
          <div className="landing-top-inner">
            <AnimatedHeading />
            <div className="landing-top-one"></div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-left">
            <div className="landing-bottom-left-top">
              <div
                className={
                  thirtyone
                    ? "landing-bottom-left-top-inner"
                    : "landing-bottom-left-top-inner opacity"
                }
              >
                We focus on making dream kitchens become reality
              </div>
            </div>
            <div className="landing-bottom-left-bottom">
              <div
                className={
                  thirtyfour
                    ? "landing-bottom-left-bottom-inner"
                    : "landing-bottom-left-bottom-inner opacity"
                }
                onMouseEnter={() => setButton(true)}
                onMouseLeave={() => setButton(false)}
              >
                <span
                  className={button ? "products-text" : "products-text-false"}
                >
                  CONTACT
                </span>
                <div
                  className={button ? "button-hover" : "button-hover-false"}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              thirtytwo
                ? "landing-bottom-middle"
                : "landing-bottom-middle opacity"
            }
          >
            AN EXPERIENCED TEAM YOU CAN TRUST
          </div>
          <div
            className={
              thirtythree
                ? "landing-bottom-right"
                : "landing-bottom-right opacity"
            }
          >
            35+ YEARS OF EXPERIENCE
          </div>
        </div>
      </div>
      <div
        className={thirtyfive ? "landing-span-img" : "landing-span-img opacity"}
      ></div>

      {/* lines  */}
      <div className="landing-lines-outer">
        <div className="landing-top-lines">
          <div className="line landing-line-one"></div>
          <div
            className={
              thirtysix
                ? "line landing-line-two"
                : "line landing-line-two false-line"
            }
          ></div>
          <div
            className={
              thirtyseven
                ? "line landing-line-three true-line"
                : "line landing-line-three false-line"
            }
          ></div>
          <div
            className={
              thirtyeight
                ? "line landing-line-four true-line"
                : "line landing-line-four false-line"
            }
          ></div>
          <div
            className={
              thirtynine
                ? "line landing-line-five true-line"
                : "line landing-line-five false-line"
            }
          ></div>
          <div
            className={
              fourty
                ? "line landing-line-six true-line"
                : "line landing-line-six false-line"
            }
          ></div>
          <div
            className={
              fourtyone
                ? "line landing-line-seven true-line"
                : "line landing-line-seven false-line"
            }
          ></div>
          <div className="line landing-line-eight"></div>
        </div>
        <div className="landing-bottom-line">
          <div
            className={
              fourtytwo
                ? "landing-bottom-line-inner true-line-horizontal"
                : "landing-bottom-line-inner false-line-horizontal"
            }
          ></div>
        </div>
      </div>
      <div
        className={
          fourtythree
            ? "cover-lines-after-animation"
            : "cover-lines-after-animation opacity"
        }
      ></div>
    </>
  );
}

export default Landing;
