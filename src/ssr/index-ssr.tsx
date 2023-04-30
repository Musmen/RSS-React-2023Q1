import React from 'react';
import App from '../containers/App/App';

function IndexSSR() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>React SSR/SSG</title>
      </head>
      <body>
        <div id="App">
          <App />
        </div>
      </body>
    </html>
  );
}

export default IndexSSR;
