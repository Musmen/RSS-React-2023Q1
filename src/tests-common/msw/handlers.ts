import { rest } from 'msw';
import { API_URL } from '../../services/flickr/flickr.constants';
import { MOCK_FLICKR_API_RESPONSE } from '../mockFlickrApiResponse';

export const handlers = [
  rest.get(`${API_URL.BASE}${API_URL.SEARCH_REQUEST}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_FLICKR_API_RESPONSE));
  }),
];
