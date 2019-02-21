import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';

import Forgot from './components/Forgot';

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapState = (state) => ({
  form: state['@form/forgot']
});

export default connect(mapState, mapDispatch)(Forgot);
