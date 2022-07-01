import React from 'react';
import "./Navbar.css";


const Navbar = ({isScrolling}) => {
  return (
    <nav className={ `navbar ${isScrolling > 20 ?  "scrolling" : null}`}>  
        <div className='navbar-logo'>Your Name</div>
    </nav>
  )
}

export default Navbar