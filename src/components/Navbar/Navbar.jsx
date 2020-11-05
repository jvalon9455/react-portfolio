import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setNavState(!navState);
  const navMenu = () => setNavState(false);

  const showBtn = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showBtn);

  return (
    
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          John "Jimmy" Alonso
        </Link>
        <div className="coffee" onClick={handleClick}>
        </div>
        <ul className={navState ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links" onClick={navMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-links" onClick={navMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links" onClick={navMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  
  );
};

export default Navbar;
