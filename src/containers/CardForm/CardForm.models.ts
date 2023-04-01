import { CardType } from '../../models/card';

export interface Props {
  addCard: (card: CardType) => void;
  renderMessage: () => void;
}

export interface State {
  validationErrorsMessages: { [key: string]: string };
}

export const DEFAULT_STATE: State = {
  validationErrorsMessages: {
    author: '',
    imageTitle: '',
    date: '',
    responsibility: '',
    file: '',
    imageType: '',
    gender: '',
  },
};
