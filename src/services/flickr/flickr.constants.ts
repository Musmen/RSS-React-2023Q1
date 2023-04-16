const API_KEY = '34a02cf672f66495b60f5da1679bdcd7';

const URL_POSTFIX = '&format=json&nojsoncallback=1';

const URLS = {
  BASE: 'https://www.flickr.com/services/rest/',
  PHOTOS: '?method=flickr.photos.',
  SEARCH: 'search',
  GET_INFO: 'getInfo',
  KEY: `&api_key=${API_KEY}`,
  CONFIG: {
    SEARCH: `&media=photos&content_type=1&content_types=0&extras=url_m,date_upload,owner_name${URL_POSTFIX}`,
    GET_INFO: URL_POSTFIX,
  },
};

export const API_URL = {
  BASE: URLS.BASE,
  SEARCH_REQUEST: `${URLS.PHOTOS}${URLS.SEARCH}${URLS.KEY}${URLS.CONFIG.SEARCH}&text=`,
  GET_INFO_REQUEST: `${URLS.PHOTOS}${URLS.GET_INFO}${URLS.KEY}${URLS.CONFIG.GET_INFO}&photo_id=`,
};
