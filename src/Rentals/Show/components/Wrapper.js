import React, { useEffect, Fragment } from 'react';
import theme from './../../../theme.js';
import Moment from 'moment';
import { Map, Marker } from './../../../components/Map';
import withStyles from './../../../hocs/withStyles';
import Loader from './../../../Loading';
import Cancel from './Cancel';
import Message from './Message';

const Wrapper  = props => {

  const {
    rental,
    loading,
    actions,
    match,
    styles
  } = props;

  useEffect(() => {
    actions.fetchRental(match.params);
  }, []);

  if (!rental) return null;

  const { owner, renter, cancelled } = rental;
  const { coordinates } = owner;

  return loading ?
    <Loader/> :
    (<Fragment>
      <Map latitude={ coordinates.lat} longitude={ coordinates.lng }>
        <Marker lat={ coordinates.lat } lng={ coordinates.lng }/>
      </Map>
      <section style={ styles.container }>
          <div style={ styles.infoContainer }>
            <div>
            {
              cancelled ?
                <h3 style={ styles.cancelledTxt }>Rental Has Been Cancelled</h3> :
                null
            }
            <h4 style={ styles.dates }>
              { Moment(rental.startDate).format('dddd, MMM Do') }
              <span style={ styles.smallText }> till </span>
              { Moment(rental.endDate).format('dddd, MMM Do') }
            </h4>
            <h2 style={ styles.title }>{ rental.sportingGood.title }</h2>
            <p style={styles.option} onClick={() => actions.openModal(<Message {...props} />)}>Message {rental.owned ? renter.firstname : owner.firstname }</p>
            {
              cancelled ?
              null :
              <p onClick={ () => actions.openModal(<Cancel rental={ rental } actions={ actions }/>) } style={ styles.option }>Cancel Rental</p>
            }
            </div>
            <div style={ styles.image }></div>
          </div>
          {
            rental.owned ? (
              <Fragment>
                <h4 style={styles.borderTop}>Renter:</h4>
                <h4>{ renter.firstname }</h4>
              </Fragment>
            ) : (
              <Fragment>
                <h4 style={ styles.borderTop }>Pickup Address:</h4>
                <h4>{owner.firstname}</h4>
                <h4>{ owner.unit } { owner.street_number }, { owner.street }, { owner.city }, { owner.state }, { owner.zip }, { owner.country }</h4>
              </Fragment>
            )
          }
          <h4 style={ styles.borderTop }>Total Cost:</h4>
          <h4>${ rental.total }</h4>
      </section>
    </Fragment>)

};

const styles = ({ rental }) => ({
  ...theme,
  container: {
    ...theme.container,
    alignItems: 'left',
    height: '100%',
    margin: '20px auto'
  },
  borderTop: {
    borderTop: `solid 1px ${ theme.colors.border }`,
    paddingTop: 15
  },
  option: {
    color: theme.colors.primary,
    cursor: 'pointer'
  },
  cancelledTxt: {
    color: theme.colors.error.color
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0'
  },
  image: {
    backgroundImage: `url(${ process.env.REACT_APP_API_DOMAIN + rental.sportingGood.primaryImage })`,
    backgroundSize:  'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: 400,
    height: 'auto'
  }
});

export default withStyles(Wrapper, styles);
