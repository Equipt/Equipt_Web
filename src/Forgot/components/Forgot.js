import React from 'react';
import Radium from 'radium';
import theme from '../../theme.js';
import Input from '../../components/Input';

const Forgot = ({
  actions,
  form,
  history
}) => (
  <section style={ styles.container }>
    <h2 style={ styles.text }>Forgot Your Password, No Sweat!</h2>
    <p style={ styles.text }>
      We will send you a reset link!
      <p style={ styles.goBack } onClick={ () => history.goBack() }>Go Back</p>
    </p>
    <form style={ styles.form } onSubmit={ e => {
      e.preventDefault();
      actions.forgotPassword();
    }}>
      <Input customStyles={ styles.input } placeholder="Email" value={ form.email } onChange={ email => actions.updatedEmail(email) }/>
      <button style={ styles.getLinkBtn } type="submit">Get Link</button>
    </form>
  </section>
);

const styles = {
  container: {
    ...theme.container,
    [theme.media.tabletAndAbove]: {
      width: '70%'
    },
    [theme.media.desktopAndAbove]: {
      width: '800px'
    }
  },
  text: {
    position: 'relative',
    width: '100%',
    lineHeight: 2,
    textAlign: 'left',
    margin: 0
  },
  form: {
    width: '100%'
  },
  input: {
    width: '100%'
  },
  getLinkBtn: {
    ...theme.btn,
    width: '100%'
  },
  goBack: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontWeight: 'normal',
    fontSize: 12,
    cursor: 'pounter'
  }
}

export default Radium(Forgot);
