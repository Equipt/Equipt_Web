import types from './types.js';

import { setRental } from '../../Rentals/Show/actions.js';
import { showLoader } from '../../Loading/actions.js';
import { setAlert } from '../../Alert/actions.js';
import { openModal } from '../../Modal/actions.js';

export const fetchSportingGood = id => async(dispatch, getState, { api }) => {

  dispatch(showLoader(true));

  const sportingGood = await api.get(`/sporting_goods/${ id }`);

  await dispatch({
    type: types.SET_SPORTING_GOOD,
    payload: sportingGood
  });

  dispatch(showLoader(false));

}

export const processPayment = stripe => async(dispatch, getState, { api, history }) => {

  const { rental, sportingGood } = getState();
  const { token, error } = await stripe.createToken(stripe);

  if (error) {
    return dispatch(setAlert({ error: error.message }));
  }

  try {

    const data = await api.post(`/sporting_goods/${ sportingGood.slug }/rentals`, { rental, payment: token });

    dispatch(setRental(data));

    history.push(`/rentals/${ data.hash_id }`);

  } catch(err) {

    if (err.errors) {
      return dispatch(setAlert(err.errors));
    }

    await dispatch(setAlert(err));

  }

}

export const checkAvailability = dates => async(dispatch, getState, { api, history }) => {

  const { sportingGood } = getState();

  if (!dates.startDate || !dates.endDate) return;

  try {

    const rental = await api.post(`/sporting_goods/${ sportingGood.slug }/rentals/check_availability`, dates);

    dispatch(setRental(rental));

  } catch(err) {

    dispatch(setAlert(err));

  }

}
