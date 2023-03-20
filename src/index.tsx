import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App/App';

ReactDOM.createRoot(document.getElementById('App') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
