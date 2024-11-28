import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from 'react-router-dom' for navigation

const Header = () => {
  // State to track whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // The main header section of the page
    <header className="header">
      {/* The main heading of the page (website name or logo) */}
      <h1 className="logo">Dineshkumar</h1>

      {/* Toggle button for mobile */}
      <button 
        className="menu-toggle" 
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation menu for the site */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`} aria-label="Main Navigation">
        {/* Navigation links */}
        <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={toggleMenu}>
          Home
        </NavLink>

        <NavLink exact to="/AdditionalInfo" activeClassName="active" className="nav-link" onClick={toggleMenu}>
          Resume
        </NavLink>

        <NavLink to="/skills" activeClassName="active" className="nav-link" onClick={toggleMenu}>
          Skills
        </NavLink>

        <NavLink to="/projects" activeClassName="active" className="nav-link" onClick={toggleMenu}>
          Projects
        </NavLink>

        <NavLink to="/contact" activeClassName="active" className="nav-link" onClick={toggleMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
