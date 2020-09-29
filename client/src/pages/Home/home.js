import React, { useEffect } from "react";
import M from "materialize-css";
import Styles from "./home.css";
import Koi from "./image/koi.gif";
import HIKR from "./image/signinHikr.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s9">
            {" "}
            <h3 id="nav-banner">
              <Link to="/" class="black-text">
                Daniel Jauregui
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
                <a
                  href="https://www.instagram.com/kionling1/"
                  class="black-text"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-jauregui-velazquez-b64a80172/"
                  class="black-text"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kionling"
                  class="black-text"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row center" id="firstBanner">
        <div id="firstImage" class="col l12 s12 #000000 black">
          <Link to="https://hikr-journal.herokuapp.com/">
            <img src={HIKR} id="HIKR-image" alt="HIKR project logo" />
          </Link>
          <Link to="/portfolio">
            <h2 id="firstBanText" class="white-text">
              The Newest Project.
            </h2>
          </Link>
        </div>
      </div>

      <div id="portfolioRow" class="row">
        <div id="portfolioBan" class="col s7 l8 #00acc1 cyan darken-1"></div>

        <div id="portfolioLinks" class="col s5 l4  #f50057 pink accent-3">
          <h4 class="right Bold">Portfolio</h4>
          <Link to="/portfolio" class="black-text">
            <p class="left Bold" id="exploreTag">
              ←Explore
            </p>
          </Link>
        </div>
      </div>

      <div class="row" id="contactRow">
        <div id="portfolioLinks" class="col s5 l4  #40c4ff light-blue accent-2">
          <h4 className="Bold">Contact</h4>

          <p class="right Bold" id="exploreTag">
            <Link to="/contact" class="black-text">
              Explore→
            </Link>
          </p>
        </div>

        <div class="col s7 l8 " id="contactBanner"></div>
      </div>

      <div class="row" id="aboutRow">
        <div class="col s7 l8 #00acc1 cyan darken-1" id="aboutBanner"></div>

        <div id="portfolioLinks" class="col s5 l4  #1de9b6 teal accent-3">
          <h4 class="right Bold">About Me</h4>

          <p class="left Bold" id="exploreTag">
            <Link to="/aboutMe" class="black-text">
              ←Explore
            </Link>
          </p>
        </div>
      </div>

      <div class="parallax-container">
        <h1 className="white-text Bold">Peace.</h1>
        <div class="parallax">
          <img src={Koi} alt="Aesthetic koi fish pond" />
        </div>
      </div>
      <footer class="page-footer #7c4dff deep-purple accent-2">
        <div class="container">
          <div class="row ">
            <div class="col l6 s12">
              <h5 class="white-text">Daniel Jauregui</h5>
              <p class="grey-text text-lighten-4">Web Dev Guy</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Support Me!</h5>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/kionling1/"
                    class="white-text"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/kionling1"
                    class="white-text"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
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

export default Home;
