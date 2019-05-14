import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'

import theme from '../theme.js';
import withStyles from '../hocs/withStyles.js';

const TextArea = ({
  customStyles = {},
  placeholder,
  onChange,
  value = '',
  password,
  errors = [],
  styles = {},
  height = 200
}) => (
  <div style={{ ...styles.container, ...customStyles }}>
    <textarea onChange={ (e) => onChange(e.target.value) }
              placeholder={ placeholder }
              value={ value }
              style={{ ...styles.textarea, height }}
              autoComplete="off"
    />
    <p style={ styles.error }>{ errors.join(', ') }</p>
  </div>
);

const styles = ({
  errors = []
}) => ({
  textarea: {
    ...theme.input,
    height: 200,
    border: `solid 1px ${ errors.length ? theme.colors.error.border : theme.colors.border }`
  },
  container: {
    position: 'relative',
    margin: '20px 0',
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

TextArea.propTypes = {
  customStyles: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  password: PropTypes.bool,
  error: PropTypes.array,
  canClear: PropTypes.bool
}

export default withStyles(Radium(TextArea), styles);
