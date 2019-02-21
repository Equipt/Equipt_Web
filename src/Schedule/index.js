import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';

import Wrapper from './components/Wrapper';

const mapState = (state) => ({
  schedule: state.schedule
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Wrapper);
