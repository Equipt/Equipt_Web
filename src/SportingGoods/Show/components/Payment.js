import React from 'react';
import StarRating from 'react-star-ratings';
import ProfileIcon from '../../../components/icons/Profile';
import theme from './../../../theme.js';
import Button from './../../../components/Button';
import Info from './Info';
import Price from './Price';

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
  stripe,
  rental,
  sportingGood,
  session
}) => {

  return (
    <section>
      <h2>Payment</h2>
      <div style={ styles.flex }>
        <div style={ styles.leftRail }>
          <form style={ styles.form } onSubmit={ e => {
            e.preventDefault();
            actions.processPayment(stripe);
          }}>
            <CardNumberElement className="stripe__input"/>
            <CardExpiryElement className="stripe__input stripe__input_expiry"/>
            <CardCVCElement className="stripe__input stripe__input_cvc"/>
            <PostalCodeElement className="stripe__input"/>
            <Button type="submit" isLoading={ false } onClick={ () => false }>Confirm and Pay</Button>
          </form>
        </div>
        <div style={ styles.rightRail }>
          <Price sportingGood={ sportingGood } rental={ rental }/>
        </div>
      </div>
    </section>
  )
};

const styles = {
  flex: {
    display: 'flex'
  },
  leftRail: {
    width: '60%',
    padding: 20
  },
  rightRail: {
    width: '40%',
    padding: 20,
    border: `1px solid ${ theme.colors.border }`
  },
  reviewsContainer: {
    float: 'right',
    marginTop: 6
  },
  profile: {
    display: 'block',
    margin: '0 auto',
    width: 50,
    height: 50,
    borderRadius: '100%'
  },
  totalRatings: {
    margin: 0,
    padding: 0,
    textAlign: 'right',
    fontSize: 14
  },
  smallText: {
    margin: '0 4px',
    fontSize: 12
  },
  form: {
    width: '100%'
  },
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
