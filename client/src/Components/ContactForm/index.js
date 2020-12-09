import React from "react";

function ContactForm() {
  return (
    <div className="row container">
      <h1 className="bold800">Contact Me.</h1>
      <form>
        <input placeholder="Email" type="email"></input>

        <input placeholder="password" type="password"></input>
        <button className="btn">Send Email</button>
      </form>
    </div>
  );
}

export default ContactForm;
