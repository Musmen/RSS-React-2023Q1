import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cardFormReducer from './slices/cardForm.slice';
import searchReducer from './slices/search.slice';
import flickrApi from './slices/flickrApi.slice';

const rootReducer = combineReducers({
  search: searchReducer,
  cardForm: cardFormReducer,
  [flickrApi.reducerPath]: flickrApi.reducer,
});

export const getNewStore = <T>(preloadedState?: T) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
    preloadedState,
  });

export const store = getNewStore();

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
