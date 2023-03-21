import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsDiscord } from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri'
import './navigation.css'
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navigation = () => {
  return (
    <nav>
      <div className="navigation__logo">
        <a>DREAM PHYSIQUE</a>
      </div>
      
      <div className="navigation__menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <div className='navigation__link__social'>
            <li><a href="#"><RiInstagramFill /></a></li>
            <li><a href="#"><BsFacebook /></a></li>
            <li><a href="#"><BsDiscord /></a></li>
          </div>

        </ul>
      </div>
    </nav>
  );
}

export default Navigation