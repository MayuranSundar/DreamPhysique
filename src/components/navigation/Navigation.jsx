import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsDiscord } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import './navigation.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="navigation__logo">
        <a><li><Link to="/">DREAM PHYSIQUE</Link></li></a>
      </div>

      <div className="navigation__menu">
        <div className="navigation__menu-icon" onClick={handleMenuClick}>
          <div className={`navigation__menu-icon-line ${showMenu ? 'open' : ''}`}></div>
          <div className={`navigation__menu-icon-line ${showMenu ? 'open' : ''}`}></div>
          <div className={`navigation__menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        </div>
        <ul className={`navigation__menu-links ${showMenu ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <div className="navigation__link__social">
            <li><a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'><RiInstagramFill /></a></li>
            <li><a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'><BsFacebook /></a></li>
            <li><a href="https://discord.com/" target='_blank' rel='noopener noreferrer'><BsDiscord /></a></li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
