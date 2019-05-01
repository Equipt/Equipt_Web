import types from './types.js';
import { showLoader } from './../../Loading/actions.js';

export const setRental = rental => ({
  type: types.SET_RENTAL,
  payload: rental
});

export const clearRental = () => ({
  type: types.CLEAR_RENTAL,
  payload: null
});

export const agreeToTerms = () => ({
  type: types.AGREE_TO_RENTAL_TERMS,
  payload: null
});

export const fetchRental = ({ slug, hash }) =>
  async(dispatch, getState, { api }) => {

  await dispatch(showLoader(true));
  dispatch(clearRental());

  const rental = await api.get(`/sporting_goods/${ slug }/rentals/${ hash }`);

  await dispatch(showLoader(false));

  dispatch(setRental(rental));

}
