import React from 'react';
import { Link } from "react-router-dom";
import theme from '../../theme.js';

import ProfileIcon from '../../components/icons/Profile.js';

export default ({
  session,
  actions
}) => (
  <nav style={ styles.wrapper }>
    <Link to="/">
      <img style={ styles.logo } src="https://s3-us-west-2.amazonaws.com/equipt-assets/logo.png" alt="Equipt Logo"/>
    </Link>
    {
      session.authenticated ?
      (
        <div style={ styles.session }>
          <div style={{ marginTop: 7 }}>
          {
            session.user.profile ?
            <img src={ session.user.profile } alt="Profile Image" style={ styles.profile }/> :
            <ProfileIcon fill="white" width="35" height="35"/>
          }
          </div>
          <button style={ styles.link } onClick={ e => {
            e.preventDefault();
            actions.logout();
          }}>Logout</button>
        </div>
      ) : (
        <div style={ styles.session }>
          <Link style={ styles.link } to="/login">Login</Link>
          <Link style={ styles.link } to="/signup">Signup</Link>
        </div>
      )
    }
  </nav>
)

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    background: theme.colors.primary
  },
  logo: {
    height: 50,
    width: 50
  },
  session: {
    width: 140,
    paddingRight: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  link: {
    color: '#fff',
    lineHeight: 3,
    fontSize: 15,
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  profile: {
    borderRadius: '100%'
  }
}
