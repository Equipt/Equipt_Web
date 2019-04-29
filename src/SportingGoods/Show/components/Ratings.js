import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import StarRating from 'react-star-ratings';
import theme from '../../../theme.js';
import { randomKey } from './../../../helpers.js';

const Ratings = ({
  ratings
}) => (
  <ul style={ styles.listContainer }>
  {
    ratings.length ?
    ratings.map(({ rating, comment, createdAt }, index) => (
      <li key={ randomKey() } style={ styles.listItem }>
        <div style={ styles.starRatingContainer }>
          <StarRating rating={ rating }
                      starRatedColor={ theme.colors.primary }
                      starDimension="20px"
                      starSpacing="2px"/>
        </div>
        <p>
          { comment }
          <i style={ styles.createdAt }>{ createdAt } Ago</i>
        </p>
      </li>
    )) :
    <h3>There are no rentals yet!!</h3>
  }
  </ul>
);

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired
    })
  )
}

const styles = {
  listContainer: {
    padding: 0
  },
  listItem: {
    display: 'flex',
    maxWidth: 630,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: 40,
    borderBottom: `solid 1px ${ theme.colors.border }`,
    [theme.media.tabletAndAbove]: {
      flexDirection: 'row',
      marginTop: 0
    }
  },
  starRatingContainer: {
    [theme.media.tabletAndAbove]: {
      order: 1
    }
  },
  createdAt: {
    display: 'block',
    paddingTop: 10
  }
}

export default Radium(Ratings);
