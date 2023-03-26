import './Main.css';

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';
import CardFormPage from '../../pages/CardFormPage/CardFormPage';

class Main extends Component {
  render() {
    return (
      <main className="Main__centralizer centralizer">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/form'} element={<CardFormPage />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
