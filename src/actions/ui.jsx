import { types } from '../types/types';

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err
});

export const removeError = () => ({
  type: types.uiRemoveError
});

export const startloading = () => ({
  type: types.uiStartLoading
});

export const finishloading = () => ({
  type: types.uiFinishLoading
});