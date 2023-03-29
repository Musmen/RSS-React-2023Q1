import './Logo.css';

import logo from './assets/logo.svg';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink className="logo" to="/">
      <img className="logo__img" src={logo} alt="React-Photo-Relax App Logo" />
      <h1 className="logo__title">React-Photo-Relax</h1>
    </NavLink>
  );
}

export default Logo;
