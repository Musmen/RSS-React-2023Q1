import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../models/card';

const searchInitialState = {
  request: '',
  resultCards: [] as CardType[],
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    updateSearchRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    addSearchResultCards: (state, action: PayloadAction<CardType[]>) => {
      state.resultCards = action.payload;
    },
  },
});

export const { updateSearchRequest, addSearchResultCards } = searchSlice.actions;
export default searchSlice.reducer;
