export interface CardType {
  id?: string;
  title: string;
  imgSrc: string;
  author: string;
  date: string;
}

export interface BigCardType extends CardType {
  authorGender?: string;
  type?: string;
  responsibility?: boolean;
}
