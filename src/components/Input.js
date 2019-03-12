import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'

import theme from '../theme.js';
import withStyles from '../hocs/withStyles.js';

import Close from './icons/Close.js';

const Input = ({
  customStyles = {},
  placeholder,
  onChange,
  value = '',
  password,
  errors = [],
  styles = {},
  canClear = false
}) => (
  <div style={{ ...styles.container, ...customStyles }}>
    <input onChange={ (e) => onChange(e.target.value) }
           placeholder={ placeholder }
           defaultValue={ value }
           style={ styles.input }
           type={ password ? 'password' : 'text' }
           autoComplete="off"
    />
    {
      canClear && value.length ?
      <div onClick={ () => onChange('') }>
        <Close width="15" fill={ theme.colors.border } customStyles={ styles.close } />
      </div>
      : null
    }
    <p style={ styles.error }>{ errors.join(', ') }</p>
  </div>
);

const styles = ({
  errors = []
}) => ({
  container: {
    position: 'relative',
    margin: '20px 0',
  },
  input: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '15px 25px',
    fontSize: '15px',
    border: `solid 1px ${ errors.length ? theme.colors.error.border : theme.colors.border }`,
    outline: 0,
    zIndex: 0
  },
  error: {
    position: 'absolute',
    right: 5,
    bottom: -5,
    fontSize: 10,
    color: theme.colors.error.color,
    zIndex: 0
  },
  close: {
    position: 'absolute',
    top: 12,
    right: 20,
    cursor: 'pointer'
  }
});

Input.propTypes = {
  customStyles: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  password: PropTypes.bool,
  error: PropTypes.array,
  canClear: PropTypes.bool
}

export default withStyles(Radium(Input), styles);
