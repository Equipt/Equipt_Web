import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions.js';
import * as modalActions from './../../Modal/actions.js';
import * as rentalActions from './../../Rental/Show/actions.js';


import Wrapper from './components/Wrapper';

const mapState = ({ sportingGood, rental, loading }) => ({
  sportingGood,
  rental,
  loading
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...actions,
      ...modalActions,
      ...rentalActions
    }, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Wrapper);
