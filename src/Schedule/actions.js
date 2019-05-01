import types from './types.js';

import { showLoader } from '../Loading/actions.js';

export const clearSchedule = () => ({
  type: types.CLEAR_SCHEDULE,
  payload: null
});

export const setSchedule = rentals => ({
  type: types.SET_SCHEDULE,
  payload: rentals
});

export const fetchSchedule = () => async(dispatch, getState, { api }) => {

  await dispatch(clearSchedule());
  dispatch(showLoader(true));

  const rentals = await api.get('/owner/rentals');

  await dispatch(showLoader(false));

  dispatch(setSchedule(rentals));

}
