import types from './types.js';

import * as loadingActions from '../Loading/actions.js';

export const fetchSchedule = () => async(dispatch, getState, { api }) => {

  const ownersRentals = await api.get('/owner/rentals');

   dispatch(loadingActions.showLoader(true));

  dispatch({
    type: types.FETCH_SCHEDULE,
    payload: ownersRentals
  });

}
