import { createAction } from '@reduxjs/toolkit';
import { CardType } from '../../models/card';

export const updateSearchRequest = createAction<string>('UPDATE_SEARCH_REQUEST');
export const addSearchResultCards = createAction<CardType[]>('ADD_SEARCH_RESULT_CARDS');
