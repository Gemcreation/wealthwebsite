import React, { useState } from 'react';
import headerLogo from '../assets/images/WEALTH LOGO.png';
import headerLogo2 from '../assets/images/WEALTH LOGO2.png';

//wealth interior and exterior project for my bro construsction work
// Navbar section to providing primary navigation across the site
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Logo left */}
        <div className="navbar-brand"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          <img src={headerLogo} className="brand-icon" alt="logo" />
          <span className="brand-text">
            <img src={headerLogo2} className="brand-text" alt="logo" />
            {/* below is the brand name text used before creating the logo with coreldraw */}
            {/* WEALTH */}
          </span>
        </div>

        {/* Desktop Links */}
        <ul className={`navbar-links desktop-only`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Icons */}
        <div className="navbar-actions">
          <button className="icon-button" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button className="icon-button menu-toggle" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
