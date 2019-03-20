import React from 'react';
import PinInput from 'react-pin-input';
import theme from './../../theme.js';

const Verification = ({
  actions,
  user
}) => (
  <section style={ styles.wrapper }>
  {
    user.isVerified ? (
      <p style={ styles.verified }>You are now verified!!</p>
    ) : (
      <PinInput
        length={ 4 }
        type="numeric"
        inputStyle={ styles.input }
        inputFocusStyle={ styles.focus }
        onComplete={ pin => actions.verify(pin) }/>
    )
  }
  </section>
);

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    verticallyAlign: 'middle',
    marginTop: 60
  },
  input: {
    width: 60,
    height: 60,
    fontSize: 18,
    margin: '0 15px',
    border: `solid 1px ${ theme.colors.primary }`
  },
  verified: {
    fontSize: 20,
    color: theme.colors.primary
  }
}

export default Verification;
