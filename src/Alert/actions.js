import types from './types.js';

export const setAlert = alert => ({
  type: types.SET_ALERT,
  payload: alert
});

export const clearAlert = () => ({
  type: types.SET_ALERT,
  payload: null
});
