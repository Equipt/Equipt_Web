import types from './types.js';
import { sessionService } from 'redux-react-session';
import { clearAlert, setAlert } from '../Alert/actions.js';

export const updateProfile = ({ nextTab, basic = false }) => async(dispatch, getState, { api, history }) => {

  const data = getState()['@form/profile'];

  try {

    dispatch(isLoading(true));

    const user = basic ?
      await api.put(`/user/basic`, { user: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        terms: true
      }}) :
      await api.put(`/user/${ data.id }`, { user: { ...data, terms: true } });

    sessionService.saveUser(user);

    if (nextTab) {
      dispatch(changedTab(nextTab));
    }

  } catch(data) {

    if (data.errors['address.invalid']) {
      dispatch(setAlert({ error: 'Sorry, the address you entered could not be found' }));
    }

    dispatch({
      type: types['@PROFILE/SET_ERRORS'],
      payload: data.errors
    });

  } finally {

    dispatch(isLoading(false));

  }

}

export const setAddress = data => {

  const components = data.address_components;

  const address = {
    number: components[0].long_name,
    street: components[1].long_name,
    city: components[2].long_name,
    state: components[3].long_name,
    country: components[4].long_name,
    zip: components[5].long_name
  }

  return {
    type: types['@PROFILE/SET_ADDRESS'],
    payload: address
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

  } catch({ data }) {

    dispatch(setAlert(data));

  }

}

export const changedTab = nextTab => ({
  type: types['@PROFILE/CHANGE_TAB'],
  payload: nextTab
});

export const isLoading = isLoading => ({
  type: types['@PROFILE/IS_LOADING'],
  payload: isLoading
});
