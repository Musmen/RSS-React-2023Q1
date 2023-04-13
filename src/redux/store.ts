import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardFormReducer } from './reducers/cardForm.reducer';
import { searchApiReducer } from './reducers/searchApi.reducer';

const rootReducer = combineReducers({
  searchApi: searchApiReducer,
  cardForm: cardFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
