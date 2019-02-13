import { sessionService } from 'redux-react-session';

export const logout = () => async(dispatch, getState, { history }) => {

  sessionService.deleteSession();
  sessionService.deleteUser();

  history.push('/login');

}
