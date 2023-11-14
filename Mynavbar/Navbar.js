import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mysecond, setMySecond] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



//   const mymenu = () => {
//     setMySecond(!mysecond);
//   }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            MyLogo.
          </a>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
{/* 
      <div className={`mybars ${mysecond ? 'active' : ''}`} onClick={mymenu}>
      <span className="newbars"></span>
      <span className="newbars"></span>
      <span className="newbars"></span>
    </div> */}
    </>
  );
};

export default Navbar;
