import { CardType } from '../../models/card';

export interface Props {
  addCard: (card: CardType) => void;
  showMessage: () => void;
}

export interface State {
  validationErrorsMessages: { [key: string]: string };
}

export const DEFAULT_STATE: State = {
  validationErrorsMessages: {
    author: '',
    title: '',
    date: '',
    responsibility: '',
    file: '',
    type: '',
    gender: '',
  },
};
