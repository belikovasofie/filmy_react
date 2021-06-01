import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import HandGlass from '../../img/handGlass.png';
import CamIcon from '../../img/CamIcon.png';
import './style.css';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="topbar">
        <div className="topbar__logo">
          <NavLink to="/">
            <img src={CamIcon} className="topbar__pict" />
            <div className="topbar__name">DEJ SI FILM</div>
          </NavLink>
        </div>
        <div className="topbar__navigation">
          <nav className="navigation">
            <NavLink to="/about-films">O filmech</NavLink>
            <NavLink to="/quiz">Kvíz</NavLink>
            <NavLink to="/search">
              <img className="navigation_search" src={HandGlass} />
            </NavLink>
          </nav>
        </div>
        <nav
          className={
            isOpen ? 'topbar__mobile-nav is-open' : 'topbar__mobile-nav'
          }
        >
          <NavLink to="/about-films">O filmech</NavLink>
          <NavLink to="/quiz">Kvíz</NavLink>
          <NavLink to="/search">Hledej</NavLink>
        </nav>
        <div className="topbar__hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#1f156b" />
        </div>
      </div>
    </header>
  );
};

export default Header;
