import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import alert from './Alert/reducer.js';
import forgot from './Forgot/reducer.js';
import login from './Login/reducer.js';
import loading from './Loading/reducer.js';
import modal from './Modal/reducer.js';
import signup from './Signup/reducer.js';
import schedule from './Schedule/reducer.js';
import sportingGoods from './SportingGoods/Index/reducer.js';
import sportingGood from './SportingGoods/Show/reducer.js';
import rental from './Rental/Show/reducer.js';

export default combineReducers({
  alert,
  modal,
  schedule,
  sportingGoods,
  sportingGood,
  rental,
  loading,
  session: sessionReducer,
  '@form/forgot': forgot,
  '@form/login': login,
  '@form/signup': signup
});
