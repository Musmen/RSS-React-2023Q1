import './Header.css';

import React from 'react';

import Logo from '../../components/Logo/Logo';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageInfo from '../../containers/PageInfo/PageInfo';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Logo />
        <NavigationBar />
        <PageInfo />
      </header>
    );
  }
}

export default Header;
