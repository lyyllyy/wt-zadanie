import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="nav-header">
          <div className="nav-logo">
            <a href="/" className="logo">
              <img src="icons/Heading.png" alt="Logo" />
            </a>
          </div>
          <div
            className="nav-menu-btn"
            id="menu-btn"
            onClick={toggleMenu} // Pridáme funkciu na kliknutie
          >
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i> {/* Ikona sa mení */}
          </div>
        </div>
        <ul className={`nav_links ${menuOpen ? "open" : ""}`} id="nav-links">
          <li><a href="/contact">Registrácia</a></li>
          <li><a href="/HowItWorks">How it works?</a></li>
          <li><a href="/upravy_vylepsenia">Výpis registrovaných používateľov</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
