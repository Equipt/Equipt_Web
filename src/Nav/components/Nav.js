import React from 'react';
import { Link } from "react-router-dom";
import theme from '../../theme.js';
import Radium from 'radium';
import ProfileIcon from '../../components/icons/Profile.js';
import ShutDown from '../../components/icons/ShutDown.js';
import Profile from '../../Profile';

const StyledLink = Radium(Link);

const Nav = ({
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
          <StyledLink style={ styles.btn } to="/sporting_goods/new">Add A Item</StyledLink>
          <StyledLink style={ styles.btn } to="/schedule">Schedule</StyledLink>
          <div style={{ marginTop: 7 }} onClick={ () => actions.openModal(<Profile/>) }>
          {
            session.user.profile ?
            <img src={ session.user.profile } alt="" style={ styles.profile }/> :
            <div>
              <ProfileIcon fill="white" width="35" height="35"/>
            </div>
          }
          </div>
          <span onClick={ e => {
            e.preventDefault();
            actions.logout();
          }}>
            <ShutDown fill="#fff" width={ 36 } customStyles={ styles.logout }/>
          </span>
        </div>
      ) : (
        <div style={ styles.session }>
          <StyledLink style={ styles.link } to="/login">Login</StyledLink>
          <StyledLink style={ styles.link } to="/signup">Signup</StyledLink>
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
  btn: {
    ...theme.btn,
    margin: '0 20px 0 0',
    padding: '14px 25px',
    fontSize: 16
  },
  session: {
    paddingRight: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    ...theme.btn,
    minHeight: 40,
    margin: '0 5px',
    color: '#fff',
    lineHeight: 3,
    fontSize: 12,
    textDecoration: 'none',
    background: 'none',
    cursor: 'pointer',
    [theme.media.tabletAndAbove]: {
      fontSize: 16,
      margin: '0 10px'
    }
  },
  profile: {
    borderRadius: '100%'
  },
  logout: {
    marginTop: 3,
    marginLeft: 15
  }
}

export default Radium(Nav);
