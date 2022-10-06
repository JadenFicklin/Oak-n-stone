import React, { useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const [nav, setNav] = useState(false);

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
        </nav>
      </div>
    </>
  );
}

export default Nav;
