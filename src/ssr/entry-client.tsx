import React from 'react';
import ReactDOM from 'react-dom/client';

import { getNewStore } from '../redux/store';

import Entry from '../Entry';

const preloadedState = window.__PRELOADED_STATE__;
const store = getNewStore(preloadedState);
delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(document.getElementById('App') as HTMLElement, <Entry store={store} />);
