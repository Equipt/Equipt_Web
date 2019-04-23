import React from 'react';
import Radium from 'radium';
import Tile from './Tile';

const List = ({
  schedule
}) => (
  <div style={ styles.list }>
    { schedule.map(rental => <Tile { ...rental }/>) }
  </div>
)

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40
  }
}

export default Radium(List);
