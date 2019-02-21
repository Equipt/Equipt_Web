import React from 'react';
import theme from '../../../theme.js';
import withStyles from '../../../hocs/withStyles.js';
import { Link } from "react-router-dom";
import Radium from 'radium';
import StarRating from 'react-star-ratings';

const Tile = ({
  title,
  primary_image,
  brand,
  price_per_day,
  styles,
  slug,
  overall_rating
}) => (
  <div style={ styles.container }>
    <Link to={ `/sporting_goods/${ slug } `} style={ styles.link }>
      <div style={ styles.image }/>
      <h4 style={ styles.title }>${ price_per_day } Per Day - { title }</h4>
      <p style={ styles.brand }>{ brand }</p>
      <StarRating rating={ overall_rating }
                  starRatedColor={ theme.colors.primary }
                  starDimension="20px"
                  starSpacing="2px"/>
    </Link>
  </div>
)

const styles = props => ({
  container: {
    width: '100%',
    [theme.media.tabletAndAbove]: {
      width: '47.5%'
    },
    [theme.media.desktopAndAbove]: {
      width: '30%'
    },
    marginBottom: 80
  },
  brand: {
    margin: '5px 0 20px'
  },
  link: {
    textDecoration: 'none'
  },
  image: {
    width: '100%',
    height: 204,
    backgroundColor: theme.colors.primary,
    backgroundImage: `url(${ process.env.REACT_APP_SERVER_DOMAIN + props.primary_image })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
});

export default withStyles(Radium(Tile), styles);
