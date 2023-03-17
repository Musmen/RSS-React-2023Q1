import './Header.css';

import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageInfo from '../../containers/PageInfo/PageInfo';

class Header extends React.Component {
  render() {
    return (
      <header>
        <NavigationBar />
        <p>
          <PageInfo />
        </p>
      </header>
    );
  }
}

export default Header;
