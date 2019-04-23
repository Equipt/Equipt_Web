import React, { useEffect, Fragment } from 'react';
import theme from '../../theme.js';
import { Link } from "react-router-dom";
import Radium from 'radium';
import List from './List';

const StyledLink = Radium(Link);

const Wrapper = ({
  schedule,
  actions
}) => {

  useEffect(() => {
    actions.fetchSchedule();
  }, []);

  return (
    <Fragment>
      <StyledLink to="/sporting_goods/new" style={ theme.btn }>Add A Item</StyledLink>
      <List schedule={ schedule }/>
    </Fragment>
  )

}

export default Wrapper;
