import { BigCardType, CardType } from 'models/card';

export interface State {
  cards: Array<CardType | BigCardType>;
  isMessageVisible: boolean;
}

export const DEFAULT_STATE: State = {
  cards: [],
  isMessageVisible: false,
};
