import { createReducer } from '@reduxjs/toolkit';
import { updateSearchQuery } from '../actions/searchQuery.actions';

const searchQueryInitialState = {
  value: '',
};

export const searchQueryReducer = createReducer(searchQueryInitialState, (builder) => {
  builder.addCase(updateSearchQuery, (state, { payload }) => ({ value: payload }));
});
