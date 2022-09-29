import React, { useState } from "react";
import "../styles/Nav.css";

function Nav() {
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const [nav, setNav] = useState(false);

  setTimeout(() => {
    setNav(true);
  }, 1600);

  return (
    <>
      <div className={nav ? "nav-outer" : "nav-outer transparent"}>
        <nav className="nav-inner">
          <div className="nav-logo">
            <img
              src={require("../assets/logos/n.JPG")}
              alt="logo"
              className="nav-logo-inner"
            />
          </div>
          <div
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
          </div>

          <div
            className="nav-sub"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            ABOUT
            <div
              className={about ? "nav-line-hover-true" : "nav-line-hover-false"}
            ></div>
          </div>
          <div
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
