import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from 'react-router-dom' for navigation

const Header = () => {
  return (
    // The main header section of the page
    <header className="header">
      
      {/* The main heading of the page (website name or logo) */}
      <h1 className="logo">Dineshkumar</h1>
      
      {/* Navigation menu for the site */}
      <nav aria-label="Main Navigation">
        {/* Navigation links */}
        <NavLink exact to="/" activeClassName="active" className="nav-link">
          Home
        </NavLink>
        
        <NavLink to="/skills" activeClassName="active" className="nav-link">
          Skills
        </NavLink>
        
        <NavLink to="/projects" activeClassName="active" className="nav-link">
          Projects
        </NavLink>
        
        <NavLink to="/contact" activeClassName="active" className="nav-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
