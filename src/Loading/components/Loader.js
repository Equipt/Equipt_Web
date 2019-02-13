import React from 'react';
import theme from '../../theme.js';
import '../styles.scss';

export default ({ loading }) => loading ? (
  <div style={ theme.container }>
    <div className="loader">
      <div className="fire">
      <div className="flame"></div>
      <div className="flame"></div>
      <div className="flame"></div>
      <div className="flame"></div>
      <div className="flame"></div>
    <div className="logs">
      <div className="logOne"></div>
      <div className="logTwo"></div>
      <div className="flicker"></div>
    </div>
  </div>
</div>
  </div>
) : null;
