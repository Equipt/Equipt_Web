import React from 'react';
import theme from '../../theme.js';
import Input from '../../components/Input.js';

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
        />
        <Input placeholder="Last Name"
               onChange={ value => actions._bindOnChange('lastname', value) }
               value={ form.lastname }
               errors={ form.errors.lastname }
        />
        <Input placeholder="Email"
               onChange={ value => actions._bindOnChange('email', value) }
               value={ form.email }
               errors={ form.errors.email }
        />
        <Input placeholder="Password"
               onChange={ value => actions._bindOnChange('password', value) }
               value={ form.password }
               errors={ form.errors.password }
               password
        />
        <Input placeholder="Password Confirmation"
               onChange={ value => actions._bindOnChange('passwordConfirmation', value) }
               value={ form.passwordConfirmation }
               errors={ form.errors.password_confirmation }
               password
        />
        <button style={{ ...theme.btn, ...styles.signupBtn }} type="submit">Signup</button>
      </form>
    </div>
  </section>
)

const styles = {
  signupBtn: {
    marginTop: 30,
    width: '100%'
  }
}

export default Signup;
