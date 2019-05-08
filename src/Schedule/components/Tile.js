import React from 'react';
import withStyles from '../../hocs/withStyles.js';
import Moment from 'moment';
import { Link } from "react-router-dom";
import theme from './../../theme.js';

const Tile = ({
  sportingGood,
  hashId,
  owned,
  startDate,
  endDate,
  styles
}) => (
  <div style={ styles.tile }>
    <Link style={ styles.link } to={ `${ owned ? 'owner' : '' }/sporting_goods/${ sportingGood.slug }/rentals/${ hashId }` }>
      <h4 style={ styles.datesTxt }>{ Moment(startDate).format('MMM Do') } - { Moment(endDate).format('MMM Do') }</h4>
      <div style={ styles.image }/>
      <h4>{ sportingGood.title }</h4>
      <p style={ styles.detailsLink }>See details</p>
    </Link>
  </div>
);

const styles = ({
  sportingGood
}) => ({
  tile: {
    maxWidth: '30%',
    minWidth: 300,
    margin: '0 0 50px'
  },
  image: {
    width: '100%',
    height: 200,
    backgroundImage: `url(${ process.env.REACT_APP_SERVER_DOMAIN + sportingGood.primaryImage })`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  link: {
    textDecoration: 'none'
  },
  datesTxt: {
    fontWeight: 'bold',
    marginBottom: 20
  },
  detailsLink: {
    paddingTop: 15,
    borderTop: `solid 1px ${ theme.colors.border }`
  }
});


export default withStyles(Tile, styles);
