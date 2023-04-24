import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

// import { store } from 'redux/store';
import { Provider } from 'react-redux';

import App from './containers/App/App';
import { store } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';

export function render(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
}
