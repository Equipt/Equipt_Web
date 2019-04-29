import React from 'react';
import Radium from 'radium';
import Tile from './Tile';
import theme from './../../theme.js';
import { randomKey } from './../../helpers.js';

const List = ({
  schedule
}) => {

  if (!schedule) {
    return null;
  }

  return (
    <div>
      { schedule.owned.length ? <h2 style={ styles.title }>Your Renting Out These</h2> : null }
      <div style={ styles.list }>
        { schedule.owned.map(rental => <Tile key={ randomKey() } { ...rental }/>) }
      </div>
      { schedule.active.length ? <h2 style={ styles.title }>Your Upcoming Rentals</h2> : null }
      <div style={ styles.list }>
        { schedule.active.map(rental => <Tile key={ randomKey() } { ...rental }/>) }
      </div>
      { schedule.completed.length ? <h2 style={ styles.title}>Completed Rentals</h2> : null }
      <div style={ styles.list }>
        { schedule.completed.map(rental => <Tile key={ randomKey() } { ...rental }/>) }
      </div>
    </div>
  )

}

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40
  },
  title: {
    margin: '40px 0 0',
    paddingBottom: 20,
    borderBottom: `solid 1px ${ theme.colors.border }`
  }
}

export default Radium(List);
