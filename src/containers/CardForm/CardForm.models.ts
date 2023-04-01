import { CardType } from '../../models/card';

export interface CardFormProps {
  addCard: (card: CardType) => void;
  renderMessage: () => void;
}

export interface CardFormState {
  author: string;
  imageTitle: string;
  date: string;
  responsibility: boolean;
  file: FileList;
  imageType: string;
  gender: string;
}

export const DEFAULT_STATE: CardFormState = {
  author: '',
  imageTitle: '',
  date: '',
  responsibility: false,
  file: {} as FileList,
  imageType: '',
  gender: '',
};
