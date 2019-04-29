import React from 'react';
import Radium from 'radium';
import theme from '../../../theme.js';
import StarRating from 'react-star-ratings';
import Terms from '../../../components/Terms';
import ProfileIcon from '../../../components/icons/Profile';
import Payment from './Payment';
import Profile from './../../../Profile';

const Info = ({
  sportingGood,
  session,
  rental,
  actions
}) => {

  const hasDatesSelected = rental.startDate && rental.endDate;

  return (
    <div style={ styles.container }>
      <div style={ styles.reviewsContainer }>
        {
          sportingGood.user.profile ?
          <img src={ sportingGood.user.profile } alt="" style={ styles.profile }/> :
          <ProfileIcon fill="white" width="35" height="35"/>
        }
        <StarRating rating={ sportingGood.overallRating }
                    starRatedColor={ theme.colors.primary }
                    starDimension="20px"
                    starSpacing="2px"/>
        <p style={ styles.totalRatings }>{ sportingGood.totalRatings } Reviews</p>
      </div>
      <h3>{ sportingGood.title }</h3>
      <h5>{ sportingGood.brand } - { sportingGood.model }</h5>
      <h3>${ sportingGood.pricePerDay }<span style={ styles.smallText }>Per Day</span></h3>
      <h3>${ sportingGood.pricePerWeek }<span style={ styles.smallText }>Per Week</span></h3>
      { hasDatesSelected ? <h3>{ rental.startDate }<span style={ styles.smallText }>till</span>{ rental.endDate }</h3> : null }
      { rental.total ? <h2>${ rental.total }</h2> : null }
      { hasDatesSelected ? <Terms actions={ actions } isChecked={ rental.agreedToTerms } error={ rental.errors }/> : null }
      <button style={ styles.rentBtn }
              disabled={ !hasDatesSelected || !rental.agreedToTerms }
              onClick={ () => {
                if (session.user.isVerified) {
                  actions.openModal(<Payment actions={ actions } rental={ rental } user={ session.user }/>)
                } else {
                  actions.openModal(<Profile/>)
                }
              }}>
              Rent
      </button>
    </div>
  )
};

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
  smallText: {
    margin: '0 4px',
    fontSize: 12
  },
  text: {
    lineHeight: 0
  },
  totalRatings: {
    margin: 0,
    padding: 0,
    textAlign: 'right',
    fontSize: 14
  },
  rentBtn: {
    ...theme.btn,
    width: '100%',
    margin: '10px 0'
  }
};

export default Radium(Info);
