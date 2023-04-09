export interface FlickrPhoto {
  id: string;
  url_m: string;
  dateupload: string;
  ownername: string;
  title: string;
}

export interface FlickrSearchResponse {
  photos: {
    photo: FlickrPhoto[];
  };
}

export interface FlickrPhotoResponse {
  photo: {
    id: string;
    secret: string;
    server: string;
    dateuploaded: string;
    owner: {
      username: string;
      realname: string;
    };
    title: {
      _content: string;
    };
    description: {
      _content: string;
    };
    views: number;
  };
}
