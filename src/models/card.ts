export interface CardType {
  id?: string;
  title: string;
  imgSrc: string;
  author: string;
  date: string;
  description?: string;
  views?: number;
}

export interface BigCardType extends CardType {
  authorGender?: string;
  type?: string;
  responsibility?: boolean;
}
