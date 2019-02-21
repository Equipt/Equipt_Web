import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';

import Modal from './components/Modal';

const mapState = (state) => ({
  modal: state.modal
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Modal);
