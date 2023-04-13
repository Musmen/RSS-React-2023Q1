import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchQueryReducer } from './reducers/searchQueryReducer';

const rootReducer = combineReducers({
  searchQuery: searchQueryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
