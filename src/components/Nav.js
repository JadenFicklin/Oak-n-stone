import React, { useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
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

  return (
    <>
      <div className={nav ? "nav-outer" : "nav-outer transparent"}>
        <nav className="nav-inner">
          <Link to="/" className="nav-logo">
            <img
              src={require("../assets/logos/logo.JPG")}
              alt="logo"
              className="nav-logo-inner"
              onClick={handleLogoClick}
            />
          </Link>
          <Link
            to="/projects"
            className="nav-sub"
            onMouseEnter={() => setProjects(true)}
            onMouseLeave={() => setProjects(false)}
            onClick={handleLogoClick}
          >
            PROJECTS
            <div
              className={
                projects ? "nav-line-hover-true" : "nav-line-hover-false"
              }
            ></div>
          </Link>

          <Link
            to="/about"
            className="nav-sub"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            ABOUT
            <div
              className={about ? "nav-line-hover-true" : "nav-line-hover-false"}
            ></div>
          </Link>
          <Link
            to="/contact"
            className="nav-sub"
            onMouseEnter={() => setContact(true)}
            onMouseLeave={() => setContact(false)}
          >
            CONTACT
            <div
              className={
                contact ? "nav-line-hover-true" : "nav-line-hover-false"
              }
            ></div>
          </Link>
          <div className="nav-lines-outer" onClick={() => setMyNav(!myNav)}>
            <div className="nav-lines-inner">
              <div className="navline"></div>
              <div className="navline"></div>
              <div className="navline"></div>
            </div>
            {myNav && (
              <div className="dropdown">
                <Link to="/" className="nav-home" onClick={handleLogoClick}>
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="nav-projects"
                  onClick={handleLogoClick}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="nav-about"
                  onClick={handleLogoClick}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="nav-contact"
                  onClick={handleLogoClick}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
