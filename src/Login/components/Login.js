import React from 'react';
import { Link } from "react-router-dom";
import theme from '../../theme.js';
import Radium from 'radium';

import Input from '../../components/Input';
import CheckBox from '../../components/icons/CheckBox';
import Facebook from './Facebook';

const Login = ({
  actions,
  form
}) => (
  <section style={ theme.container }>
    <div style={ theme.form.wrapper }>
      <form onSubmit={ e => {
        e.preventDefault();
        actions.login();
      }}>
        <Input placeholder="Email"
               onChange={ value => actions._bindOnChange('email', value) }
               value={ form.email }
        />
        <Input placeholder="Password"
               onChange={ value => actions._bindOnChange('password', value) }
               value={ form.password }
               password
        />
        <div style={ styles.checkboxContainer } onClick={ () => actions.toggleRememberMe() }>
          <CheckBox isChecked={ form.rememberMe }/>
          <label style={ styles.rememberMeTxt }>Remember me</label>
        </div>
        <button style={ styles.loginBtn } type="submit">Login</button>
        <Link style={ styles.forgotPassword } to="/forgot">Need Help Logging in?</Link>
      </form>
      <div style={ styles.seperator }/>
      <Facebook facebookLogin={ actions.facebookLogin }/>
    </div>
  </section>
)

const styles = {
  loginBtn: {
    ...theme.btn,
    margin: '30px 0 0 0',
    width: '100%'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  rememberMeTxt: {
    marginLeft: 10
  },
  forgotPassword: {
    clear: 'both',
    margin: '10px 0',
    float: 'right'
  },
  seperator: {
    clear: 'both',
    margin: '90px 0 50px',
    textAlign: 'center',
    borderBottom: `solid 1px ${ theme.colors.border }`
  }
}

export default Radium(Login);
