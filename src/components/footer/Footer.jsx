import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './footer.css'
import {BsFacebook, BsDiscord } from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer>
      <p className="footer__logo">Dream Physique</p>
      <ul className="permalinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'><RiInstagramFill /></a>
        <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'><BsFacebook /></a>
        <a href="https://discord.com/" target='_blank' rel='noopener noreferrer'><BsDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arber Krasniqi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
