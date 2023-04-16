import { CardType } from '../../models/card';
import { FlickrPhoto, FlickrSearchResponse, FlickrPhotoResponse } from './flickr.models';
import { ONE_SECOND_IN_MILLISECONDS } from '../../common/constants';

export const parseFlickrResponseToCards = (
  flickrResponse: FlickrSearchResponse | undefined
): CardType[] => {
  if (!flickrResponse || !flickrResponse.photos || !flickrResponse.photos.photo) return [];

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

const getFlickrImgSrc = (id: string, secret: string, server: string) =>
  `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

export const parseFlickrPhotoResponseToCard = (
  flickrPhotoResponse: FlickrPhotoResponse | undefined
): CardType => {
  if (!flickrPhotoResponse?.photo) return {} as CardType;

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
