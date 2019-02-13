import React from 'react';
import PropTypes from 'prop-types';

import theme from '../theme.js';
import withStyles from '../hocs/withStyles.js';

const Input = ({
  customStyles = {},
  placeholder,
  onChange,
  value = '',
  password,
  errors = [],
  styles = {}
}) => (
  <div style={ styles.container }>
    <input onChange={ (e) => onChange(e.target.value) }
           placeholder={ placeholder }
           value={ value }
           style={{ ...styles.input, ...customStyles }}
           type={ password ? 'password' : 'text' }
           autoComplete="off"
    />
    <p style={ styles.error }>{ errors.join(', ') }</p>
  </div>
);

const styles = ({
  errors = []
}) => ({
  container: {
    position: 'relative'
  },
  input: {
    display: 'block',
    width: '100%',
    margin: '20px 0',
    padding: '15px 25px',
    fontSize: '15px',
    border: `solid 1px ${ errors.length ? theme.colors.error.background : theme.colors.border }`,
    outline: 0
  },
  error: {
    position: 'absolute',
    right: 5,
    bottom: -5,
    fontSize: 10,
    color: theme.colors.error.color
  }
});

Input.propTypes = {
  customStyles: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  password: PropTypes.bool,
  error: PropTypes.array
}

export default withStyles(Input, styles);
