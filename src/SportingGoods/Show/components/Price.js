import React from 'react';
import Moment from 'moment';
import StarRating from 'react-star-ratings';
import ProfileIcon from '../../../components/icons/Profile';
import theme from '../../../theme.js';

const Price = ({
  sportingGood,
  rental
}) => (
  <div>
    <div style={ styles.starContainer }>
      <div style={ styles.profileContainer }>
        {
          sportingGood.user.profile ?
          <img src={ sportingGood.user.profile } alt="" style={ styles.profile }/> :
          <ProfileIcon fill={ theme.colors.border } width="40" height="40"/>
        }
      </div>
      <StarRating rating={ sportingGood.overallRating }
                  starRatedColor={ theme.colors.primary }
                  starDimension="20px"
                  starSpacing="2px"/>
      <p style={ styles.totalRatings }>{ sportingGood.totalRatings } Reviews</p>
    </div>
    <h3 style={ styles.title }>{ sportingGood.title }</h3>
    <h5 style={ styles.subTitle }>{ sportingGood.brand } - { sportingGood.model }</h5>
    <h3>${ sportingGood.pricePerDay }<span style={ styles.smallText }>Per Day</span></h3>
    <hr style={ styles.divider }/>
    { rental.startDate && rental.endDate ? (
        <h3>{ Moment(rental.startDate).format('MMM Do') }
            <span style={ styles.smallText }>till</span>
            { Moment(rental.endDate).format('MMM Do') }
        </h3>
      ) : null
    }
    {
      rental.subTotal ? (
        <h3>{ rental.totalDays + 1 }
          <span style={ styles.smallText }>{ rental.totalDays > 0 ? 'days' : 'day' }</span> x ${ sportingGood.pricePerDay }
          <span style={ styles.floatRight }>${ rental.subTotal }</span>
        </h3>) : null
    }
    {
      rental.serviceFee ? (
        <h3>Service Fee<span style={ styles.floatRight }>${ rental.serviceFee }</span></h3>
      ) : null
    }
    {
      rental.total ? (
        <div>
          <hr style={ styles.divider }/>
          <h3>Total (CAD)<span style={ styles.floatRight }>${ rental.total }</span></h3>
        </div>
      ) : null
    }
  </div>
)

const styles = {
  title: {
    width: '65%'
  },
  subTitle: {
    width: '65%'
  },
  profileContainer: {
    height: 40,
    width: 40,
    margin: '0 auto'
  },
  profile: {
    display: 'block',
    margin: '0 auto',
    width: 50,
    height: 50,
    borderRadius: '100%'
  },
  starContainer: {
    float: 'right'
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
  },
  pricePerDay: {
    borderBottom: `solid 1px ${ theme.colors.borderColor }`
  },
  divider: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    margin: '20px 0'
  },
  floatRight: {
    float: 'right'
  }
}

export default Price;
