import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
  <header>
    <div className="topbar">
      <NavLink to="/">
        <div className="topbar__logo">
          <div className="topbar__pict"></div>
          <div className="topbar__name">DEJ SI FILM</div>
        </div>
      </NavLink>
      <div className="topbar__navigation">
        <nav className="navigation">
          <NavLink to="/about-films">O filmech</NavLink>
          <NavLink to="/quiz">Kvíz</NavLink>
          <NavLink to="/search">Hledej</NavLink>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
