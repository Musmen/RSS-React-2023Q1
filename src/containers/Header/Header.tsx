import './Header.css';

import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageInfo from '../../containers/PageInfo/PageInfo';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__centralizer centralizer">
          <Logo />
          <div className="Header__wrapper">
            <NavigationBar />
            <PageInfo />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
