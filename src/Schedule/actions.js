import types from './types.js';

export const fetchSchedule = () => async(dispatch, getState, { api }) => {

  const ownersRentals = await api.get('/owner/rentals');

  dispatch({
    type: types.FETCH_SCHEDULE,
    payload: ownersRentals
  });

}
