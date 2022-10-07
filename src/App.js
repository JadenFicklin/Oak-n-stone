import "./App.css";
import Landing from "./components/Landing";
import ProjectOne from "./components/ProjectOne";
import SelectedWorks from "./components/SelectedWorks";
import Nav from "./components/Nav";
// import { useState } from "react";
import "../src/styles/Nav.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [projects, setProjects] = useState(false);
  // const [about, setAbout] = useState(false);
  // const [contact, setContact] = useState(false);

  // const [nav, setNav] = useState(false);

  // const [homePage, setHomePage] = useState(true);
  // const [projectsPage, setProjectsPage] = useState(false);
  // const [aboutPage, setAboutPage] = useState(false);
  // const [contactPage, setContactPage] = useState(false);

  // setTimeout(() => {
  //   setNav(true);
  // }, 1600);

  // const changeScroll = (position) => {
  //   window.scrollTo(0, position);
  // };

  // const handleHomeClick = () => {
  //   setHomePage(true);
  //   setProjectsPage(false);
  //   setAboutPage(false);
  //   setContactPage(false);
  //   changeScroll(0);
  // };
  // const handleProjectClick = () => {
  //   setHomePage(false);
  //   setProjectsPage(true);
  //   setAboutPage(false);
  //   setContactPage(false);
  //   changeScroll(0);
  // };
  // const handleAboutClick = () => {
  //   setHomePage(false);
  //   setProjectsPage(false);
  //   setAboutPage(true);
  //   setContactPage(false);
  //   changeScroll(0);
  // };
  // const handleContactClick = () => {
  //   setHomePage(false);
  //   setProjectsPage(false);
  //   setAboutPage(false);
  //   setContactPage(true);
  //   changeScroll(0);
  // };

  return (
    <>
      {/* <div className={nav ? "nav-outer" : "nav-outer transparent"}>
        <nav className="nav-inner">
          <div className="nav-logo">
            <img
              src={require("../src/assets/logos/logo.JPG")}
              alt="logo"
              className="nav-logo-inner"
              onClick={handleHomeClick}
            />
          </div>
          <div
            className="nav-sub"
            onMouseEnter={() => setProjects(true)}
            onMouseLeave={() => setProjects(false)}
            onClick={handleProjectClick}
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
            onClick={handleAboutClick}
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
            onClick={handleContactClick}
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

      {homePage && (
        <>
          <Landing />
          <SelectedWorks />
          <ProjectOne />
        </>
      )}
      {projectsPage && (
        <>
          <Projects />
        </>
      )}
      {aboutPage && (
        <>
          <About />
        </>
      )}
      {contactPage && (
        <>
          <Contact />
        </>
      )} */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Nav />
                <Landing />
                <SelectedWorks />
                <ProjectOne />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Projects />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Nav /> <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Nav /> <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <ErrorPage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
