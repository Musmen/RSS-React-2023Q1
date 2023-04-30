import { RootState } from '../redux/store';

export const setPreloadedState = (preloadedState?: RootState) =>
  `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`;
