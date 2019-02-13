import React from 'react';
import { Link } from "react-router-dom";
import theme from '../../theme.js';

import Input from '../../components/Input';
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
        <Input placeholder="email"
               onChange={ value => actions._bindOnChange('email', value) }
               value={ form.email }
        />
        <Input placeholder="password"
               onChange={ value => actions._bindOnChange('password', value) }
               value={ form.password }
               password
        />
        <input  style={{ ...styles.checkbox, ...theme.checkbox }}
                type="checkbox"
        />
        <label style={ styles.rememberMeTxt }>Remember me</label>
        <button style={{ ...theme.btn, ...styles.loginBtn }} type="submit">Login</button>
        <Link style={ styles.forgotPassword } to="/forgot_password">Need Help Logging in?</Link>
      </form>
      <p style={ styles.seperator }>Or</p>
      <Facebook facebookLogin={ actions.facebookLogin }/>
    </div>
  </section>
)

const styles = {
  loginBtn: {
    marginTop: 30,
    width: '100%'
  },
  checkbox: {
    float: 'left'
  },
  rememberMeTxt: {
    float: 'left',
    marginLeft: 5
  },
  forgotPassword: {
    clear: 'both',
    margin: '10px 0',
    float: 'right'
  },
  seperator: {
    clear: 'both',
    margin: '40px 0',
    textAlign: 'center'
  }
}

export default Login;
