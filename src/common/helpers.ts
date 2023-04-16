import { SerializedError } from '@reduxjs/toolkit';
import { CustomFetchError } from '../models/errors';

export const getRandom = (maxNumber: number) => Math.floor(Math.random() * maxNumber);

export const getErrorMessage = (errorInstance: CustomFetchError | SerializedError) => {
  if ('status' in errorInstance) {
    if ('error' in errorInstance) {
      return errorInstance.error;
    }
    return JSON.stringify(errorInstance.data);
  }
};
