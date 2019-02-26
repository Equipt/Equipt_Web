import React, { Component } from 'react';
import theme from '../../../theme.js';
import Radium from 'radium';

import Tile from './Tile';
import Filter from './Filter';
import Loading from './../../../Loading';

class Wrapper extends Component {

  componentDidMount() {
    this.props.actions.fetchSportingGoods();
  }

  render() {

    const { sportingGoods, loading } = this.props;
    const { results } = sportingGoods;

    return (
      <section style={{ ...theme.container, ...styles.container }}>
        <Filter { ...this.props }/>
        {
          loading ? <Loading/> : (
            results.length ? (
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

}

const styles = {
  container: {
    height: '100%'
  },
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40
  }
}

export default Radium(Wrapper);
