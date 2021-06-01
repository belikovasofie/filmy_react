import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
  <header>
    <div className="topbar">
      <div className="topbar__logo">
        <div className="site__pict"></div>
        <div className="site__name">DEJ SI FILM</div>
      </div>
      <div className="site__navigation">
        <nav className="navigation">
          <a href="#">O Filmech</a>
          <a href="#">Kvíz</a>
          <a href="#">
            <input type="search" id="search" placeholder="Search..." />
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
