import React, { useEffect, Fragment } from 'react';
import theme from './../../../theme.js';
import Moment from 'moment';
import { Map, Marker } from './../../../components/Map';
import Loader from './../../../Loading';
import Cancel from './Cancel';

const Wrapper  = ({
  rental,
  loading,
  actions,
  match
}) => {

  useEffect(() => {
    actions.fetchRental(match.params);
  }, []);

  if (!rental) return null;

  const { owner } = rental;
  const { coordinates } = owner;

  return loading ?
    <Loader/> :
    (<Fragment>
      <Map latitude={ coordinates.lat} longitude={ coordinates.lng }>
        <Marker lat={ coordinates.lat } lng={ coordinates.lng }/>
      </Map>
      <section style={ styles.container }>
          <h4 style={ styles.dates }>
            { Moment(rental.startDate).format('dddd, MMM Do') }
            <span style={ styles.smallText }> till </span>
            { Moment(rental.endDate).format('dddd, MMM Do') }
          </h4>
          <h2 style={ styles.title }>{ rental.sportingGood.title }</h2>
          <a style={ styles.option } href={ `tel:${ owner.phone }` }>Call Owner</a>
          <p style={ styles.option }>Message the Owner</p>
          <p onClick={ () => actions.openModal(<Cancel rental={ rental }/>) } style={ styles.option }>Cancel Rental</p>
          <h4 style={ styles.borderTop }>Pickup Address</h4>
          <h4>{ owner.unit } { owner.street_number }, { owner.street }, { owner.city }, { owner.state }, { owner.zip }, { owner.country }</h4>
          <h4 style={ styles.borderTop }>Total Cost</h4>
          <h4>${ rental.total }</h4>
      </section>
    </Fragment>)

};

const styles = {
  ...theme,
  container: {
    ...theme.container,
    alignItems: 'left',
    height: '100%',
    margin: '50px'
  },
  borderTop: {
    borderTop: `solid 1px ${ theme.colors.border }`,
    paddingTop: 15
  },
  option: {
    color: theme.colors.primary
  }
}

export default Wrapper;
