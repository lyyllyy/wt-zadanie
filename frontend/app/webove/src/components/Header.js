import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-header">
          <div className="nav-logo">
            <a href="/" className="logo">
              <img src="icons/Heading.png" alt="Logo" />
            </a>
          </div>
          <div className="nav-menu-btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav_links" id="nav-links">
          <li><a href="/contact">Registrácia</a></li>
          <li><a href="/HowItWorks">How it works?</a></li>
          <li><a href="/upravy_vylepsenia">Úpravy/Vylepšenia</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
