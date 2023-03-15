import './Root.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

class Root extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
