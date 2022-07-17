import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 450 ? "scrolling" : null}`}>
      <div className={`navbar-logo ${isScrolling > 450 ? "visibility" : null}`} onClick={toTheTop}>
        <img className="logo"
          src="./2.png"
          alt="logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
