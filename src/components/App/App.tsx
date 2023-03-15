import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '../../routes/Root/Root';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import NotFound from '../../routes/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
