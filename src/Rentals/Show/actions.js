import types from './types.js';
import { showLoader } from './../../Loading/actions.js';
import { setAlert } from '../../Alert/actions.js';

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

export const cancelRental = data =>
  async(dispatch, getState, { api, history }) => {

  const { rental } = getState();

  try {
    const message = await api.put(`/sporting_goods/${ rental.sportingGood.slug }/rentals/${ rental.hashId }/cancel`, data);
    history.push('/sporting_goods');
    dispatch(setAlert(message));
  } catch(err) {
    dispatch(setAlert(err));
  }


}

export const fetchRental = ({ slug, hash }) =>
  async(dispatch, getState, { api }) => {

  await dispatch(showLoader(true));
  dispatch(clearRental());

  const rental = await api.get(`/sporting_goods/${ slug }/rentals/${ hash }`);

  await dispatch(showLoader(false));

  dispatch(setRental(rental));

}
