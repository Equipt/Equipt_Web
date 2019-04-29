import React, { useEffect, Fragment } from 'react';
import theme from './../../../theme.js';
import { Map, Marker } from './../../../components/Map';

const Wrapper  = ({
  rental,
  actions,
  match
}) => {

  useEffect(() => {
    actions.fetchRental(match.params);
  }, []);

  if (!rental) return null;

  const { owner } = rental;
  const { coordinates } = owner;

  return (
    <Fragment>
      <Map latitude={ coordinates.lat} longitude={ coordinates.lng }>
        <Marker lat={ coordinates.lat } lng={ coordinates.lng }/>
      </Map>
      <section style={ styles.container }>
      
      </section>
    </Fragment>
  )

};

const styles = {
  container: {
    ...theme.container,
    height: '100%'
  }
}

export default Wrapper;
