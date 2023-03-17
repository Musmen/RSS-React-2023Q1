import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
