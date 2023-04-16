import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  parseFlickrPhotoResponseToCard,
  parseFlickrResponseToCards,
} from '../../services/flickr/flickr.service';
import { API_URL } from '../../services/flickr/flickr.constants';

import { CardType } from '../../models/card';
import { CustomFetchError } from '../../models/errors';

const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.flickr.com/services/rest',
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomFetchError, unknown>,
  endpoints: (builder) => ({
    fetchPhotosBySearchRequest: builder.query<CardType[], string>({
      query: (searchQuery) => `${API_URL.SEARCH_REQUEST}${searchQuery}`,
      transformResponse: parseFlickrResponseToCards,
    }),
    fetchPhotoInfoById: builder.query<CardType, string>({
      query: (photoId) => `${API_URL.GET_INFO_REQUEST}${photoId}`,
      transformResponse: parseFlickrPhotoResponseToCard,
    }),
  }),
});

export default flickrApi;
export const { useFetchPhotosBySearchRequestQuery, useFetchPhotoInfoByIdQuery } = flickrApi;
