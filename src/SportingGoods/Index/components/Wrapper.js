import React, { useEffect } from 'react';
import theme from '../../../theme.js';

import Tile from './Tile';
import Filter from './Filter';
import Loading from './../../../Loading';

const Wrapper = props => {

  useEffect(() => {
    props.actions.fetchSportingGoods();
  }, []);

  const { results } = props.sportingGoods;

  return (
    <section style={ styles.container }>
      <Filter { ...props }/>
      {
        props.loading ? <Loading/> : (
          props.sportingGoods.results.length ? (
            <div style={ styles.tiles }>
              { results.map(sportingGood => <Tile { ...sportingGood } key={ `tile_${ sportingGood.slug }` }/>) }
            </div>
          ) : (
            <h4>Sorry, We don't have this yet!</h4>
          )
        )
      }
    </section>
  );

}

const styles = {
  container: {
    ...theme.container,
    height: '100%'
  },
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 40
  }
}

export default Wrapper;
