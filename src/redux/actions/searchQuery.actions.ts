import { createAction } from '@reduxjs/toolkit';

export const updateSearchQuery = createAction<string>('UPDATE_SEARCH_QUERY');
