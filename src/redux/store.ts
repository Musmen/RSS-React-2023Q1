import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cardFormReducer from './slices/cardForm.slice';
import searchReducer from './slices/search.slice';
import flickrApi from './slices/flickrApi.slice';

const rootReducer = combineReducers({
  search: searchReducer,
  cardForm: cardFormReducer,
  [flickrApi.reducerPath]: flickrApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
