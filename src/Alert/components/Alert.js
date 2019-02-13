import React from 'react';
import theme from '../../theme.js';
import withStyles from '../../hocs/withStyles.js';
import CloseIcon from '../../components/icons/Close.js';

const Alert = ({
  alert,
  actions,
  styles: {
    wrapper,
    close
  }
}) => alert ? (
  <section style={ wrapper }>
    { alert.error || alert.info }
    <span onClick={ () => actions.clearAlert() }>
      <CloseIcon customStyles={ close }/>
    </span>
  </section>
) : null;

const styles = ({
  alert
}) => ({
  wrapper: {
    position: 'absolute',
    right: 5,
    top: 80,
    minWidth: 400,
    height: 50,
    padding: 10,
    fontSize: 15,
    lineHeight: 1.8,
    background: alert && alert.error ? theme.colors.error.background : theme.colors.info.background,
    color: alert && alert.error ? theme.colors.error.color : theme.colors.info.color
  },
  close: {
    svg: {
      fill: theme.colors.error.color,
      marginTop: 2,
      float: 'right'
    }
  }
});

export default withStyles(Alert, styles);
