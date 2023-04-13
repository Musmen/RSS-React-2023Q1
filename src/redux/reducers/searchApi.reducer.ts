import { createReducer } from '@reduxjs/toolkit';
import { updateSearchRequest, addSearchResultCards } from '../actions/searchApi.actions';
import { CardType } from '../../models/card';

const searchApiInitialState = {
  request: '',
  resultCards: [] as CardType[],
};

export const searchApiReducer = createReducer(searchApiInitialState, (builder) => {
  builder.addCase(updateSearchRequest, (state, { payload }) => ({ ...state, request: payload }));
  builder.addCase(addSearchResultCards, (state, { payload }) => ({
    ...state,
    resultCards: payload,
  }));
});
