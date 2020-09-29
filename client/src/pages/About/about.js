import React from "react";
import Style from "./about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s9 Bold">
            {" "}
            <h3>
              <Link id="AboutNav" to="/" class="black-text">
                About Me
              </Link>
            </h3>
          </div>
          <div class="col s3" id="current-date"></div>
        </div>
        <nav class="z-depth-0">
          <div class="nav-wrapper #ffffff white ">
            <Link to="#" class="brand-logo center"></Link>
            <ul id="nav-mobile" class="left">
              <li>
                <Link className="bold800" to="/" class="black-text">
                  Home
                </Link>
              </li>
              <li>
                <Link className="bold800" to="/contact" class="black-text">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="bold800" to="/portfolio" class="black-text">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row" id="AboutBanner">
        <div id="AboutDiv" class="col l12 #000000 black">
          <h2 class="white-text col s6 center" id="from">
            From San Jose, California.{" "}
          </h2>
          <h2 class="white-text col s6 center" id="raised">
            Raised in Lathrop, California
          </h2>
        </div>
      </div>

      <div class="container" id="road">
        <h2 className="bold800">Graduated from Lathrop High School in 2019.</h2>
        <p className="bold800">
          I didn't know where my life was heading as soon as I graduated High
          School. I applied to two colleges, San Jose State and San Francisco
          State.
        </p>
        <p className="bold800">
          I got accepted to both colleges and I chose to go to San Jose State.
        </p>
        <p className="bold800">
          I did one semester at San Jose State before I realized that it wasn't
          the place for me at the time.
        </p>
        <p className="bold800">
          I then enrolled into{" "}
          <h3 className="bold800">
            UC Berkeley's Full Stack Web Development program
          </h3>
          <p className="bold800">And am going to graduate soon.</p>
        </p>
        <p className="bold800">
          I found the line of work I am most passionate about. I feel like I
          could thrive here. Grow. Become the individual I want to become.
        </p>
        <p className="bold800">
          I will continously grow the portfolio as time goes on. Hopefully, to
          any future employer reading this, you take the opportunity to reach
          out to me.
        </p>
        <p className="bold800">The sky is the limit.</p>
      </div>
      <footer class="page-footer #1de9b6 teal accent-3" id="AboutFooter">
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

export default About;
