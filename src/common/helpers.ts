import { ERROR_MESSAGES } from './constants';

export const getRandom = (maxNumber: number) => Math.floor(Math.random() * maxNumber);

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  const result = await response.json();
  if (!response.ok) throw new Error(result?.message || ERROR_MESSAGES.DEFAULT);
  return result;
};
