import { createReducer } from '@reduxjs/toolkit';
import { addFormCard } from '../actions/cardForm.actions';
import { BigCardType } from '../../models/card';

const cardFormInitialState = {
  cards: [] as BigCardType[],
};

export const cardFormReducer = createReducer(cardFormInitialState, (builder) => {
  builder.addCase(addFormCard, (state, { payload }) => ({
    cards: [...state.cards, payload],
  }));
});
