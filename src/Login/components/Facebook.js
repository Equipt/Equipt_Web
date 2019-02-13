import React from 'react';
import PropTypes from 'prop-types';

import FacebookLogin from 'react-facebook-login';

const Facebook = ({
  facebookLogin
}) => (
  <FacebookLogin
    appId={ process.env.REACT_APP_FACEBOOK_ID }
    autoLoad={ false }
    fields="name,email,picture"
    disableMobileRedirect={ true }
    callback={ facebookLogin }
  />
);

Facebook.propTypes = {
  facebookLogin: PropTypes.func.isRequired
}

export default Facebook;
