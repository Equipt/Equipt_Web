import types from './types.js';
import { sessionService } from 'redux-react-session';
import { clearAlert, setAlert } from '../Alert/actions.js';

export const updateProfile = cb => async(dispatch, getState, { api }) => {

  const data = getState()['@form/profile'];

  try {

    const user = await api.put(`/user/${ data.id }`, {
      user: { ...data, terms: true }
    });

    sessionService.saveUser(user);

    cb && cb();

  } catch(user) {

    dispatch({
      type: types['@PROFILE/SET_ERRORS'],
      payload: user.errors
    });

  }

}

export const setupForm = () => async(dispatch, getState) => {

  const session = getState()['session'];

  dispatch({
    type: types['@PROFILE/SET_INITIAL_STATE'],
    payload: session.user
  });

}

export const _bindOnChange = (field, value) => async(dispatch) => {

  await dispatch(clearAlert());

  dispatch({
    type: types['@PROFILE/CLEAR_ERROR'],
    payload: { field }
  })

  dispatch({
    type: types['@PROFILE/ON_CHANGE'],
    payload: {
      [ field ]: value
    }
  });

};

export const verify = pin => async(dispatch, getState, { api }) => {

  try {

    const user = await api.post('/phone/verify', { pin });

    sessionService.saveUser(user);

  } catch(err) {

    dispatch(setAlert(err));

  }

}
