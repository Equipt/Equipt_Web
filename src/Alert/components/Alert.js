import React from 'react';
import theme from '../../theme.js';
import withStyles from '../../hocs/withStyles.js';
import CloseIcon from '../../components/icons/Close.js';

const colors = theme.colors;

const Alert = ({
  alert,
  actions,
  styles
}) => alert ? (
  <section style={ styles.wrapper }>
    { alert.error || alert.info }
    <div style={ styles.close } onClick={ () => actions.clearAlert() }>
      <CloseIcon fill={ alert.error ? colors.error.color : colors.info.color  } width={ 15 }/>
    </div>
  </section>
) : null;

const styles = ({
  alert
}) => ({
  wrapper: {
    position: 'fixed',
    right: 5,
    top: 30,
    minWidth: 440,
    height: 50,
    padding: '10px 40px 0 10px',
    fontSize: 15,
    lineHeight: 1.8,
    color: alert && alert.error ? colors.error.color : colors.info.color,
    border: `solid 2px ${ alert && alert.error ? colors.error.border : colors.primary }`,
    background: '#fff',
    fontWeight: 'bold',
    zIndex: 10000
  },
  close: {
    position: 'absolute',
    top: 2,
    right: 7,
    cursor: 'pointer'
  }
});

export default withStyles(Alert, styles);
