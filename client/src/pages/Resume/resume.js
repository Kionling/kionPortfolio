import React from "react";
import ResumeStyles from "./resume.css";
import { Link } from "react-router-dom";
function Resume() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s9">
            {" "}
            <h3 id="contact-nav">
              <Link to="/" class="black-text">
                Resume
              </Link>
            </h3>
          </div>
          <div class="col s3" id="current-date"></div>
        </div>
        <nav class="z-depth-0">
          <div class="nav-wrapper #ffffff white ">
            <a href="#" class="brand-logo center"></a>
            <ul id="nav-mobile" class="left">
              <li>
                <Link to="/" className="black-text bold800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="black-text bold800">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/aboutMe" class="black-text bold800">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" class="black-text bold800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
<br></br>
<br></br>
      <div className="container z-depth-5">
        <div className="row" id="resumeName">

          <h1 className="bold800">Daniel Jauregui</h1>
        </div>
        <div className="row">
          <div className="col s3">
            <p id="personalDetails">Email: Djvdjv209@gmail.com</p>
          </div>
          <div className="col s3">
            <p id="personalDetails">Phone: (209) 395-9325</p>
          </div>
          <div className="col s3">
            <p id="personalDetails">Address: 16169 Bizzibe St.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <h4>Profile</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
