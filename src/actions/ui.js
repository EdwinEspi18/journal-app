import { types } from '../types/types';

export const setError = (msg) => {
  return { type: types.uiSetError, payload: msg };
};

export const removeError = () => {
  return { type: types.uiRemoveError };
};

export const startLoading = () => {
  return { type: types.uiStartLoading, payload: true };
};
export const finishLoading = () => {
  return { type: types.uiFinishLoading, payload: false };
};
