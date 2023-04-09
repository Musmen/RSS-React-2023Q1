import { fetchData } from '../../common/helpers';

import { CardType } from '../../models/card';
import { FlickrPhoto, FlickrSearchResponse, FlickrPhotoResponse } from './flickr.models';

import { API_URL } from './flickr.constants';
import { ONE_SECOND_IN_MILLISECONDS } from '../../common/constants';

const fetchFlickrImage = async (searchQuery: string): Promise<FlickrSearchResponse> => {
  const flickrResponse: FlickrSearchResponse = await fetchData(
    `${API_URL.SEARCH_REQUEST}&text=${searchQuery}`
  );
  return flickrResponse;
};

const parseFlickrResponseToCards = (flickrResponse: FlickrSearchResponse): CardType[] => {
  if (!flickrResponse.photos || !flickrResponse.photos.photo) return [];

  const cards: CardType[] = flickrResponse.photos.photo.map((flickrPhoto: FlickrPhoto) => {
    const { id, url_m, dateupload, ownername, title } = flickrPhoto;
    const card: CardType = {
      id,
      title,
      imgSrc: url_m,
      author: ownername,
      date: new Date(Number(dateupload) * ONE_SECOND_IN_MILLISECONDS).toLocaleDateString(),
    };
    return card;
  });

  return cards;
};

export const getCardsFromFlickr = async (searchQuery: string): Promise<CardType[]> => {
  const flickrResponse: FlickrSearchResponse = await fetchFlickrImage(searchQuery);
  const cards: CardType[] = parseFlickrResponseToCards(flickrResponse);
  return cards;
};

const fetchFlickrPhoto = async (photoId: string): Promise<FlickrPhotoResponse> => {
  const flickrResponse: FlickrPhotoResponse = await fetchData(
    `${API_URL.GET_INFO_REQUEST}&photo_id=${photoId}`
  );
  return flickrResponse;
};

const getFlickrImgSrc = (id: string, secret: string, server: string) =>
  `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

const parseFlickrPhotoResponseToCard = (flickrPhotoResponse: FlickrPhotoResponse): CardType => {
  if (!flickrPhotoResponse.photo) return {} as CardType;

  const { photo } = flickrPhotoResponse;
  const { id, secret, server, dateuploaded, owner, title, description, views } = photo;
  const { username, realname } = owner;

  const card: CardType = {
    id,
    title: title._content,
    imgSrc: getFlickrImgSrc(id, secret, server),
    author: realname || username,
    date: dateuploaded,
    description: description._content,
    views: views,
  };

  return card;
};

export const getPhotoCardFromFlickr = async (photoId: string): Promise<CardType> => {
  const flickrPhotoResponse: FlickrPhotoResponse = await fetchFlickrPhoto(photoId);
  const card: CardType = parseFlickrPhotoResponseToCard(flickrPhotoResponse);
  return card;
};
