import React, { Component } from 'react';
import theme from './../../../theme.js';
import Input from './../../../components/Input';
import Button from './../../../components/Button';

import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  PostalCodeElement,
  injectStripe,
  Elements,
  StripeProvider
} from 'react-stripe-elements';

const Payment = ({
  actions,
  stripe
}) => (
  <section>
    <form onSubmit={ e => {
      e.preventDefault();
      actions.processPayment(stripe);
    }}>
      <CardNumberElement className="stripe__input"/>
      <CardExpiryElement className="stripe__input stripe__input_expiry"/>
      <CardCVCElement className="stripe__input stripe__input_cvc"/>
      <PostalCodeElement className="stripe__input"/>
      <input style={ styles.btn } type="submit" value="Pay"/>
    </form>
  </section>
);

const styles = {
  btn: {
    ...theme.btn
  },
  base: {
    ...theme.input
  }
}

const PaymentForm = injectStripe(Payment);

const PaymentWrapper = props => (
  <StripeProvider apiKey={ process.env.REACT_APP_STRIPE_KEY }>
    <Elements>
      <PaymentForm { ...props }/>
    </Elements>
  </StripeProvider>
);

export default PaymentWrapper;
