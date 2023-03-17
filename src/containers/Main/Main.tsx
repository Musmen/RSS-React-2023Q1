import './Main.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
