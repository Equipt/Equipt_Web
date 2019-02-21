import types from './types.js';

import { setAlert } from '../Alert/actions.js';

export const forgotPassword = () => async(dispatch, getState, { api }) => {

  const form = getState()['@form/forgot'];

  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.email)) {
    return dispatch(setAlert({
      error: 'Email is invalid'
    }));
  }

  try {

    const data = await api.post('/forgot_password', form);

    dispatch(setAlert(data));

  } catch(err) {

    dispatch(setAlert(err));

  }

}

export const updatedEmail = email => ({
  type: types['@FORGOT/UPDATED_EMAIL'],
  payload: email
});
