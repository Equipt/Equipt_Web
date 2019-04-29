import types from './types.js';

import { showLoader } from '../Loading/actions.js';

export const fetchSchedule = () => async(dispatch, getState, { api }) => {

  dispatch(showLoader(true));

  const ownersRentals = await api.get('/owner/rentals');

  await dispatch(showLoader(false));

  dispatch({
    type: types.FETCH_SCHEDULE,
    payload: ownersRentals
  });

}
