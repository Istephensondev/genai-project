import React from 'react';
import './Header.css'; // Assuming the CSS styles are in Header.css

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="./public/logo.jpg" alt="Apple logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
