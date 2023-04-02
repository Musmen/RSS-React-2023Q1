import { CardFormState } from './CardForm.models';
import { BigCardType } from '../../models/card';

type GetTodayDateISOStringType = () => string;

export const getTodayDateISOString: GetTodayDateISOStringType = () =>
  new Date().toISOString().split('T')[0];

type GetNewCardType = (cardFormData: CardFormState) => BigCardType;

export const getNewCard: GetNewCardType = (cardFormData: CardFormState) => {
  const { author, gender, imageTitle, date, imageType, responsibility, file } = cardFormData;

  const imageFile = file[0];
  const imageBlob = new Blob([imageFile || '']);

  return {
    author,
    authorGender: gender,
    title: imageTitle,
    date,
    type: imageType,
    imgSrc: URL.createObjectURL(imageBlob),
    responsibility,
  };
};
