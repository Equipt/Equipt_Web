import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import alert from './Alert/reducer.js';
import login from './Login/reducer.js';
import loading from './Loading/reducer.js';
import signup from './Signup/reducer.js';
import sportingGoods from './SportingGoods/Index/reducer.js';

export default combineReducers({
  alert,
  sportingGoods,
  loading,
  session: sessionReducer,
  '@form/login': login,
  '@form/signup': signup
});
