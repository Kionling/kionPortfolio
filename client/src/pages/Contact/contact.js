import React from "react";
import M from "materialize-css";
import Styling from "./contact.css";
import Contact1 from "./images/contact1.gif";
import Contact2 from "./images/2fd522ba5ca93afdc3ef65193422f377.gif";
import Contact3 from "./images/db4d71776f520fac4a00d0fb20cb518c.gif";
import { Link } from "react-router-dom";
import contactForm from "../../Components/contactForm"
import moment from "moment";
function Contact() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s9">
            {" "}
            <h3 id="contact-nav">
              <Link to="/" class="black-text">
                Contact Me!
              </Link>
            </h3>
          </div>
          <div class="col s3" id="current-date">
            {moment().format("MMMM Do YYYY")}
          </div>
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
            </ul>
          </div>
        </nav>
      </div>
<div><contactForm></contactForm></div>
      <div id="github"></div>
      <div class="section white">
        <div class="row container">
          <h2 class="header Bold">
            <a href="https://www.github.com/kionling" target="_blank">
              Github
            </a>
          </h2>
          <p class="grey-text text-darken-3 lighten-3 Bold">
            Here I frequently create, update, and work on various projects I
            have created through the years. All projects will contain a
            comprehensive README with descriptions of all projects.
          </p>
        </div>
      </div>
      <div id="linkedIn"></div>
      <div class="section white">
        <div class="row container">
          <h2 class="header Bold">
            <a
              href="https://www.linkedin.com/in/daniel-jauregui-velazquez-b64a80172/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h2>
          <p class="grey-text text-darken-3 lighten-3 Bold">
            Connect with me on LinkedIn! I post recent project updates and my
            coding habits. My skills, education, and experience will be located
            with this page.
          </p>
        </div>
      </div>
      <footer class="page-footer #00e5ff cyan accent-3">
        <div class="container">
          <div class="row ">
            <div class="col l6 s12">
              <h5 class="white-text">Daniel Jauregui</h5>
              <p class="grey-text text-lighten-4">
                Full Stack Web Developer/Software Engineer
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Support Me!</h5>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/daniel-jauregui-velazquez-b64a80172/"
                    class="white-text"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Kionling"
                    class="white-text"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2020 Daniel Jauregui</div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
