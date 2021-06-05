import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import HandGlass from '../../img/handGlass.png';
import CamIcon from '../../img/CamIcon.png';
import './style.css';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const Link = ({ to, children }) => {
    const handleClick = () => setOpen(false);

    return (
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
    );
  };

  return (
    <header>
      <div className="topbar">
        <div className="topbar__logo">
          <Link to="/">
            <img src={CamIcon} className="topbar__pict" />
            <div className="topbar__name">DEJ SI FILM</div>
          </Link>
        </div>
        <div className="topbar__navigation">
          <nav className="navigation">
            <Link to="/quiz">Kvíz</Link>
            <Link to="/trending">TOP10</Link>
          </nav>
        </div>
        <nav
          className={
            isOpen ? 'topbar__mobile-nav is-open' : 'topbar__mobile-nav'
          }
        >
          <Link to="/about-films">O filmech</Link>
          <Link to="/quiz">Kvíz</Link>
          <Link to="/trending">TOP10</Link>
        </nav>
        <div className="topbar__hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#1f156b" />
        </div>
      </div>
    </header>
  );
};

export default Header;
