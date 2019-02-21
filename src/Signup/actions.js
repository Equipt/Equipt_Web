import types from './types.js';
import { sessionService } from 'redux-react-session';

import * as alertActions from '../Alert/actions.js';

export const signup = () => async(dispatch, getState, { api, history }) => {

  const data = getState()['@form/signup'];

  try {

    const user = await api.post('/user', { user: data });

    sessionService.saveSession({ token: user.token });
    sessionService.saveUser(user);

    await dispatch(alertActions.clearAlert());
    await dispatch(_clearForm());

    history.push('/sporting_goods');

  } catch({ errors }) {

    dispatch(_setErrors(errors));

  }

}

export const agreeToTerms = () => ({
    type: types['@SIGNUP/AGREE_TO_TERMS'],
    payload: true
});

export const _bindOnChange = (field, value) => async(dispatch) => {

  await dispatch(alertActions.clearAlert());
  await dispatch(_clearError(field));

  dispatch({
    type: types['@SIGNUP/ON_CHANGE'],
    payload: {
      [ field ]: value
    }
  });

};

export const _clearForm = () => ({
  type: types['@SIGNUP/CLEAR_FORM'],
  payload: null
});

export const _clearError = field => ({
  type: types['@SIGNUP/CLEAR_ERROR'],
  payload: field
});

export const _setErrors = errors => ({
  type: types['@SIGNUP/HAS_ERRORS'],
  payload: errors
});
