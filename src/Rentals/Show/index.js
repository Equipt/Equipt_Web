import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import * as modalActions from './../../Modal/actions.js';

import Wrapper from './components/Wrapper';

const mapState = ({
  rental,
  loading
}) => ({
  rental,
  loading
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...actions,
      ...modalActions
    }, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Wrapper);
