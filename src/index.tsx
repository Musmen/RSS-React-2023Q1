import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store';

import Entry from './Entry';

ReactDOM.createRoot(document.getElementById('App') as HTMLElement).render(<Entry store={store} />);
