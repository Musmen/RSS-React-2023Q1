import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardFormReducer } from './reducers/cardForm.reducer';
import { searchQueryReducer } from './reducers/searchQuery.reducer';

const rootReducer = combineReducers({
  searchQuery: searchQueryReducer,
  cardForm: cardFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
