import React from 'react';
import theme from '../../../theme.js';
import StarRating from 'react-star-ratings';

const Info = ({
  title,
  model,
  pricePerDay,
  pricePerWeek,
  overallRating,
  totalRatings
}) => (
  <div style={ styles.container }>
    <div style={ styles.reviewsContainer }>
      <StarRating rating={ overallRating }
                  starRatedColor={ theme.colors.primary }
                  starDimension="20px"
                  starSpacing="2px"/>
      <p style={ styles.totalRatings }>{ totalRatings } Reviews</p>
    </div>
    <h3>{ title }</h3>
    <h5>{ model }</h5>
    <h3>${ pricePerDay }<span style={ styles.perText }>Per Day</span></h3>
    <h3>${ pricePerWeek }<span style={ styles.perText }>Per Week</span></h3>
    <button style={ styles.rentBtn }>Rent</button>
  </div>
);

const styles = {
  container: {
    padding: 20,
    border: `solid 1px ${ theme.colors.border }`
  },
  reviewsContainer: {
    float: 'right',
    marginTop: 6
  },
  perText: {
    marginLeft: 4,
    fontSize: 12
  },
  text: {
    lineHeight: 0
  },
  totalRatings: {
    margin: 0,
    padding: 0
  },
  rentBtn: {
    ...theme.btn,
    width: '100%',
    margin: '10px 0'
  }
};

export default Info;
