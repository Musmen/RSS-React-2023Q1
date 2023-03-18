import './Logo.css';

import logo from './assets/logo.svg';

import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <a className="logo" href="#">
        <img className="logo__img" src={logo} alt="React-Photo-Relax App Logo" />
        <h1 className="logo__title">React-Photo-Relax</h1>
      </a>
    );
  }
}

export default Logo;
