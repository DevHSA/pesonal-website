import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import Lessons from "./pages/blogposts/Lessons";

function App() {
  return (
    <Router>
      <div className="navwrapper">
        <div className="nav side"></div>
        <div className="nav middle">
          <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/CV">CV & Highlights</Link>
            <Link to="/blog">Blog</Link>

            <span>
              <a href="mailto:harishsa85@gmail.com" target="_blank">
                <i className="ci ci-gmail ci-2x"></i>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/harishsa85/" target="_blank">
                <i className="ci ci-linkedin ci-2x"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/DevHSA" target="_blank">
                <i className="ci ci-github ci-2x"></i>
              </a>
            </span>
            <span>
              <a href="https://twitter.com/HarishS_A/" target="_blank">
                <i className="ci ci-twitter ci-2x"></i>
              </a>
            </span>
            <span>
              <a
                href="https://scholar.google.com/citations?user=QjpPLvkAAAAJ&hl=en"
                target="_blank"
              >
                <i class="ai ai-google-scholar-square ai-2x"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="nav side"></div>
      </div>
      <div className="row">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/16.03.2024/lessons-from-phd-pt-1" element={<Lessons />} />

        </Routes>
      </div>

      <div className="footer">
        <p>&copy; Copyright 2024 Harish S A. Last updated: February 27th, 2025</p>
      </div>
    </Router>
  );
}

export default App;
