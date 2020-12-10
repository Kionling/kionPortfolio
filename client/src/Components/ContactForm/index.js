import React from "react";
import contactFormStyles from "../ContactForm/contactForm.css";

function ContactForm() {
  return (
    <div className="row container center white">
      <div className="">
        <h1 className="bold800" id="contactMe">
          Contact Me, Send an Email.
        </h1>
      </div>
      <div className="col l6">
        <form>
          <div className="row">
            <label className="white-text bold800">Email</label>
            <input
              placeholder="Email"
              id="emailForm"
              className="white center"
              type="email"
            ></input>
          </div>
          <div className="row">
            <label className="white-text bold800">Message...</label>
            <textarea id="textarea1" class=" white"></textarea>
          </div>
          <div className="row">
            <button
              className="btn #ef5350 red lighten-1 bold800"
              id="sendEmail"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
