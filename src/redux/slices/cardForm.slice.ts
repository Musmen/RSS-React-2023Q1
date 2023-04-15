import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BigCardType } from '../../models/card';

const cardFormInitialState = {
  cards: [] as BigCardType[],
};

const cardFormSlice = createSlice({
  name: 'cardForm',
  initialState: cardFormInitialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<BigCardType>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addFormCard } = cardFormSlice.actions;
export default cardFormSlice.reducer;
