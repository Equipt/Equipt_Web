import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import * as modalActions from '../Modal/actions.js';

import Nav from './components/Nav';

const mapState = (state) => ({
  session: state.session
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions, ...modalActions }, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Nav);
