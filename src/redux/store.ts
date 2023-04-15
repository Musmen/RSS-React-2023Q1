import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardFormReducer from './slices/cardForm.slice';
import searchReducer from './slices/search.slice';

const rootReducer = combineReducers({
  search: searchReducer,
  cardForm: cardFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
