import React from "react";
import { Link } from "react-router-dom";
import noMatchStyles from "./noMatch.css";
import moment from "moment"

function NoMatch() {
  return (
    <div className="container ">
      <div id="current-Date">{moment().format("MMMM Do YYYY")}</div>
      <div class="first-text">Sorry you weren't supposed to see this.</div>
      <div class="second-text">This page does not exist.</div>
      <div class="third-text">Sorry for the inconvinience. </div>
      <div class="fourth-text">Please feel free to leave this page.</div>
      <div class="fifth-text">Go <Link to="/">Home</Link></div>
    </div>
  );
}

export default NoMatch;
