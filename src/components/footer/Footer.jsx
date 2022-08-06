import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/company/your-tech-hands/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/yourtechhands/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://www.facebook.com/Your-Tech-Hands-113310278100420" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
        <div className="design-by">Developed by Andrelo & Josuelo</div>
      </div>
    </footer>
  );
};

export default Footer;
