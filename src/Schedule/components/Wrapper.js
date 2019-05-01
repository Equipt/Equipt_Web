import React, { useEffect } from 'react';
import theme from '../../theme.js';
import { Link } from "react-router-dom";
import List from './List';
import Loading from './../../Loading';

const Wrapper = ({
  schedule,
  loading,
  actions
}) => {

  useEffect(() => {
    actions.fetchSchedule();
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <section style={ styles.container }>
      {
        schedule.empty ?
        <div style={ styles.noRentals }>
          <h2 style={ styles.noRentalsTxt }>You haven't rented anything yet!</h2>
          <Link style={ styles.link } to="/sporting_goods">Click here to find an item to rent...</Link>
        </div> :
        <List schedule={ schedule }/>
      }
    </section>
  )

}

const styles = {
  container: {
    ...theme.container,
    height: '100%'
  },
  noRentals: {
    ...theme.container
  },
  link: {
    color: theme.colors.primary,
    fontDecoration: 'none'
  }
}

export default Wrapper;
