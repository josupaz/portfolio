import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
      <h3>About us</h3>
        <p>We are a company based in Argentina that gives remote support to clients all over the world.</p>
        <p>
        

Our main area is networking, and we are specialized on tasks like Network design, Cisco devices configuration and troubleshooting, remote hands support, devices replacement, servers troubleshooting.
        </p>
      </div>
      <div className="about-img">
        <img
          src="./about.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
