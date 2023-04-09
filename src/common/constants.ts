export const PAGES_CONFIG = [
  {
    pageName: 'Main Page',
    path: '/',
  },
  {
    pageName: 'About Page',
    path: '/about',
  },
  {
    pageName: 'Form Page',
    path: '/form',
  },
  {
    pageName: '404 Page',
    path: '*',
  },
];

const LS_KEY_PREFIX = 'RSS-React-Component';

export const LOCAL_STORAGE_KEYS = {
  DEFAULT: `${LS_KEY_PREFIX}-Store`,
  SEARCH_VALUE: `${LS_KEY_PREFIX}-Search-Value`,
};

export const ERROR_MESSAGES = {
  DEFAULT: 'Sorry, something went wrong. Check your I-net connection or try agin later...',
};

export const ONE_SECOND_IN_MILLISECONDS = 1000;
