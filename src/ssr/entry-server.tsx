import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';
import { RootState, store } from '../redux/store';

import IndexSSR from './index-ssr';

import { setPreloadedState } from './setPreloadedState';

import { ServerSideRender } from './models/ssr.model';

export const serverSideRender: ServerSideRender = (url, { onShellReady }) => {
  const preloadedState: RootState = store.getState();

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <IndexSSR />
      </StaticRouter>
    </Provider>,
    {
      bootstrapScriptContent: setPreloadedState(preloadedState),
      bootstrapModules: ['/src/ssr/entry-client.tsx'],
      onShellReady,
    }
  );

  return stream;
};
