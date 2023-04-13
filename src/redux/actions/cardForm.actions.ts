import { createAction } from '@reduxjs/toolkit';
import { BigCardType } from '../../models/card';

export const addFormCard = createAction<BigCardType>('ADD_FORM_CARD');
