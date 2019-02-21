import types from './types.js';

import { showLoader} from '../../Loading/actions.js';

export const fetchSportingGood = id => async(dispatch, getState, { api }) => {

  dispatch(showLoader(true));

  const sportingGood = await api.get(`/sporting_goods/${ id }`);

  await dispatch({
    type: types.SET_SPORTING_GOOD,
    payload: sportingGood
  });

  dispatch(showLoader(false));

}
