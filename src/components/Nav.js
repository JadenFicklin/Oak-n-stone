import React, { useState } from "react";
import "../styles/Nav.css";

function Nav() {
  const [projects, setProjects] = useState(false);
  const [products, setProducts] = useState(false);
  const [resources, setResources] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [samples, setSamples] = useState(false);

  return (
    <>
      <div className="nav-outer">
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
            onMouseEnter={() => setProducts(true)}
            onMouseLeave={() => setProducts(false)}
          >
            PRODUCTS
            <div
              className={
                products ? "nav-line-hover-true" : "nav-line-hover-false"
              }
            ></div>
          </div>
          <div
            className="nav-sub"
            onMouseEnter={() => setResources(true)}
            onMouseLeave={() => setResources(false)}
          >
            RESOURCES
            <div
              className={
                resources ? "nav-line-hover-true" : "nav-line-hover-false"
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
          <div
            className="nav-sub"
            onMouseEnter={() => setSamples(true)}
            onMouseLeave={() => setSamples(false)}
          >
            SAMPLES
            <div
              className={
                samples ? "nav-line-hover-true" : "nav-line-hover-false"
              }
            ></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
