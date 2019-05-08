import React from 'react';
import Radium from 'radium';
import theme from '../../../theme.js';
import Button from '../../../components/Button';
import Terms from '../../../components/Terms';
import Payment from './Payment';
import Profile from './../../../Profile';
import Price from './Price';

const Info = ({
  sportingGood,
  session,
  rental,
  actions
}) =>(
  <div style={ styles.container }>
    <div style={ styles.reviewsContainer }>
      <Price sportingGood={ sportingGood } rental={ rental }/>
      { rental.startDate && rental.endDate ? <Terms actions={ actions } isChecked={ rental.agreedToTerms } error={ rental.errors }/> : null }
      <Button
        customStyles={ styles.rentBtn }
        disabled={ !(rental.startDate && rental.endDate) || !rental.agreedToTerms }
        onClick={ () => {
          if (session.user.isVerified) {
            actions.openModal(<Payment actions={ actions } sportingGood={ sportingGood } rental={ rental } user={ session.user }/>)
          } else {
            actions.openModal(<Profile/>)
          }
        }}>
        Rent
      </Button>
    </div>
  </div>
);

const styles = {
  container: {
    borderBottom: `solid 1px ${ theme.colors.border }`,
    marginBottom: 30,
    paddingBottom: 10,
    [theme.media.tabletAndAbove]: {
      padding: 20,
      border: `solid 1px ${ theme.colors.border }`
    }
  },
  reviewsContainer: {
    marginTop: 6
  },
  rentBtn: {
    ...theme.btn,
    width: '100%',
    margin: '10px 0'
  }
};

export default Radium(Info);
