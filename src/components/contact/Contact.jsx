import React from "react";
import "./Contact.css";
import Form from '../form/Form'

const Contact = () => {
  return (
    <>
    <div className="contact">
      <div className="contact-info">
        <h1>Your Name</h1>
        <p>Based in Your City</p>
      </div>
      <Form/>
      </div>


    </>

  );
};

export default Contact;
