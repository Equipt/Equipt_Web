import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';
import { Link } from "react-router-dom";
import Radium from 'radium';

const StyledLink = Radium(Link);

class Wrapper extends Component {

  static propTypes = {

  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchSchedule();
  }

  render() {

    const { schedule } = this.props;

    return (
      <section style={ theme.container }>
        <StyledLink to="/sporting_goods/new" style={ theme.btn }>Add A Item</StyledLink>
        {
          schedule.map(rental => (
            <li>{ rental.title }</li>
          ))
        }
      </section>
    )
  }

}

export default Radium(Wrapper);
