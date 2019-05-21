import types from './types.js';
import { showLoader } from './../../Loading/actions.js';
import { setAlert } from '../../Alert/actions.js';
import { closeModal } from '../../Modal/actions.js';

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
    const message = await api.put(`/rentals/${ rental.hashId }/cancel`, {
      ...rental,
      ...data
    });
    history.push('/sporting_goods');
    dispatch(setAlert(message));
  } catch(err) {
    dispatch(setAlert(err));
  } finally {
    dispatch(closeModal());
  }

}

export const fetchRental = ({ slug, hash, owner = false }) =>
  async(dispatch, getState, { api }) => {

  await dispatch(showLoader(true));
  dispatch(clearRental());

  const rental = await api.get(`${ owner ? '/owner': '' }/sporting_goods/${ slug }/rentals/${ hash }`);

  await dispatch(showLoader(false));

  dispatch(setRental(rental));

}

export const sendMessage = message =>
  async(dispatch, getState, { api }) => {

  const { rental } = getState();

  try {
    const data = await api.post(`/rentals/${ rental.hashId }/send_message`, { message });
    dispatch(setRental(data));
  } catch(err) {
    dispatch(setAlert(err));
  }

}
