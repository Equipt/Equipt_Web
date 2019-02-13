import React, { Component } from 'react';
import theme from '../../../theme.js';

import Tile from './Tile';
import Filter from './Filter';

export default class Wrapper extends Component {

  componentDidMount() {
    this.props.actions.fetchSportingGoods();
  }

  render() {

    const { sportingGoods, loading } = this.props;
    const { results, total } = sportingGoods;

    if (loading) {
      return null;
    }

    return (
      <section style={ theme.container }>
        <Filter { ...this.props }/>
        <div style={ styles.tiles }>
          { results.map(sportingGood => <Tile { ...sportingGood } key={ `tile_${ sportingGood.slug }` }/>) }
        </div>
      </section>
    );

  }

}

const styles = {
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 40
  }
}
