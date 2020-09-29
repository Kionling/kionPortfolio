import React from "react";
import M from "materialize-css";
import Styl from "./portfolio.css";
import Danny from "./images/Dan.jpg";
import HIKR from "./images/signinHikr.png";
import PlanNJam from "./images/planN.png";
import EmployeeGen from "./images/password.png";
import PC from "./images/pc.png";
import Weather from "./images/weatherDash.png";
import Train from "./images/trainMoving.gif";
import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s9">
            {" "}
            <h3 id="portfolioNav">
              <a href="/" class="black-text">
                The Project Board.
              </a>
            </h3>
          </div>
          <div class="col s3" id="current-date"></div>
        </div>
        <nav class="z-depth-0">
          <div class="nav-wrapper #ffffff white ">
            <a href="#" class="brand-logo center"></a>
            <ul id="nav-mobile" class="left">
              <li>
                <a href="/" class="black-text bold800 ">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" class="black-text bold800">
                  Contact
                </a>
              </li>
              <li>
                <a href="/aboutMe" class="black-text bold800">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3 ">
          <div class="card-panel #f50057 pink accent-3 z-depth-0" id="cardDiv">
            <div class="row valign-wrapper ">
              <div class="col s2">
                <img src={Danny} alt="Danny" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="white-text" id="spanWeight">
                  This is a message from the creator. As a student of UC
                  Berkeley's Full Stack Web Development program, we create
                  projects on the lessons we are given through the course. These
                  projects are highly self-driven. In order to complete these
                  assignments, it requires dedication, self-motivation, and
                  passion for which I am a student diving into the unknown.
                  Below are my versions of the assignments we were given. I will
                  showcase the top ones I loved to create. I will also link the
                  rest of my projects through my Github!
                </span>

                <span class="white-text" id="spanWeight">
                  I'd like to thank my Dad for always pushing me to excel and to
                  continue fighting. He's pushes me to my brink. Making me the
                  confident Web Developer I am today. Love you Dad.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row center" id="projectHIKRDiv">
        <div id="portfolioBanner" class="col l12 #000000 black">
          <a href="https://hikr-journal.herokuapp.com/">
            <img src={HIKR} id="bannerImage" alt="HIKR project logo" />
          </a>
          <a href="/portfolio">
            <h2 id="bannerTitle" class="white-text Bold">
              Project HIKR.
            </h2>
          </a>
        </div>
      </div>

      <div class="container">
        <div class="row ">
          <div class="col l4 ">
            <div class="card #03a9f4 light-blue">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={PlanNJam} alt="PlanNJam" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Plan N' Jam
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://liza-p.github.io/project-1/"
                    class="white-text"
                  >
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  First Group Project<i class="material-icons right">close</i>
                </span>
                <p>
                  This was my first group project. Royce williams and Liza
                  Poliachenko were my partners and they handled the back-end
                  functionality of this project. I worked on the front-end
                  entirely by myself. No help. Nothing. Just me. I'm definitely
                  proud of the work I've done in this project. Take a look for
                  yourself! Are you in need of a planner? Are you disorganized?
                  Look no further, Plan N' Jam ensures, "If there's a plan, then
                  there's a Jam!"
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 ">
            <div class="card #ffab00 amber accent-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  class="activator"
                  src={EmployeeGen}
                  alt="password generator"
                />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Employee Generator
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://github.com/Kionling/employee-summary2"
                    class="white-text"
                  >
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Employees...ugh<i class="material-icons right">close</i>
                </span>
                <p>
                  {" "}
                  Here is a project I created using node, jest, and inquirer all
                  at once. It's a complicated series of questions to develop an
                  employee board for the user. You can generate a manager,
                  intern, and an engineer. Check it out!{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col l4 ">
            <div class="card #d500f9 purple accent-3">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={Weather} alt="Weather Dashboard" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Weather Dashboard
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://kionling.github.io/Weather-dashboard/"
                    class="white-text"
                  >
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  APIs...Apple Pie<i class="material-icons right">close</i>
                </span>
                <p>
                  My first time using APIs. Third party that is. It was so easy
                  and exciting! I was really happy with the look and
                  functionality. The back-end portion of saving information was
                  the hardest to do, but I loved it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col l12">
            <div class="card small #f48fb1 pink lighten-3 ">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={PC} alt="pcxparts" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Pc parts wishlist
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a href="pcpartswish.herokuapp.com/" class="white-text">
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  I need handlebars to ride this bike
                  <i class="material-icons right">close</i>
                </span>
                <p>
                  With the new given concept of handlebars and mysql, we are
                  given a task to use both of them. This project is created
                  simply by using mysql, express, and handlebars to create a pc
                  build organizer for the user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container" id="parallaxText">
        <div class="parallax">
          <img src={Train} alt="train moving" />
        </div>
        <h1 id="seeMore">
          <a href="https://github.com/kionling" class="white-text">
            Want to see more? Click here!
          </a>
        </h1>
      </div>

      <footer class="page-footer #ffc400 amber accent-3">
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

export default Portfolio;
