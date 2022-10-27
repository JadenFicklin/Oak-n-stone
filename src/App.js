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
import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oak and Stone</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="utah construction remodel cabinets oak and stone"
        />
      </Helmet>

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
