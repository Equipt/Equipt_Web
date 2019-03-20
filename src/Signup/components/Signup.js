import React from 'react';
import Radium from 'radium';
import theme from '../../theme.js';
import Input from '../../components/Input.js';
import Terms from '../../components/Terms';

const Signup = ({
  actions,
  form
}) => (
  <section style={ theme.container }>
    <div style={ theme.form.wrapper }>
      <form onSubmit={ e => {
        e.preventDefault();
        actions.signup();
      }}>
        <Input placeholder="First Name"
               onChange={ value => actions._bindOnChange('firstname', value) }
               value={ form.firstname }
               errors={ form.errors.firstname }
               canClear={ true }
        />
        <Input placeholder="Last Name"
               onChange={ value => actions._bindOnChange('lastname', value) }
               value={ form.lastname }
               errors={ form.errors.lastname }
               canClear={ true }
        />
        <Input placeholder="Email"
               onChange={ value => actions._bindOnChange('email', value) }
               value={ form.email }
               errors={ form.errors.email }
               canClear={ true }
        />
        <Input placeholder="Password"
               onChange={ value => actions._bindOnChange('password', value) }
               value={ form.password }
               errors={ form.errors.password }
               canClear={ true }
               type="password"
        />
        <Input placeholder="Password Confirmation"
               onChange={ value => actions._bindOnChange('passwordConfirmation', value) }
               value={ form.passwordConfirmation }
               errors={ form.errors.password_confirmation }
               canClear={ true }
               type="password"
        />
        <Terms actions={ actions } isChecked={ form.terms }/>
        { form.errors.terms ? <span style={ styles.error }>{ form.errors.terms }</span> : null }
        <button style={{ ...theme.btn, ...styles.signupBtn }} type="submit">Signup</button>
      </form>
    </div>
  </section>
)

const styles = {
  signupBtn: {
    marginTop: 30,
    width: '100%'
  },
  error: {
    float: 'right',
    marginTop: -38,
    fontSize: 10,
    color: theme.colors.error.color
  }
}

export default Radium(Signup);
