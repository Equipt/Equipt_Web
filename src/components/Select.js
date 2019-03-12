import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import withStyles from '../hocs/withStyles.js'

import theme from '../theme.js';

import Chevron from './icons/Chevron';

class SelectTag extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {

    const {
      placeholder,
      customStyles,
      styles,
      onSelect,
      children,
      value = null,
      errors = []
    } = this.props;

    const { isOpen } = this.state;

    return (
      <div style={{ ...styles.select, ...customStyles }}
           onMouseEnter={ () => this.setState({ isOpen: true }) }
           onMouseLeave={ () => this.setState({ isOpen: false }) }>
        <span style={ styles.placeholder }>{ value ? value : placeholder }</span>
        <span style={ styles.error }>{ errors.length ? errors.join(', ') : '' }</span>
        <Chevron width="20" height="20" fill={ theme.colors.border } customStyles={ styles.chevron }/>
        { isOpen ? (
            <ul style={ styles.dropDown }>
            {
              React.Children.map(children, child =>
                React.cloneElement(child, { onSelect, closeDropDown: () => this.setState({ isOpen: false }) })
              )
            }
            </ul>
          ) : null
        }
      </div>
    )
  }

}

SelectTag.propTypes = {
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  customStyles: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  errors: PropTypes.array
}

const OptionTag = ({
  children,
  onSelect,
  styles,
  closeDropDown,
  value
}) => (
  <li onClick={ () => {
    onSelect(value);
    closeDropDown();
  }}
      style={ styles.option }>
      { children }
  </li>
);

OptionTag.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const styles = ({
  errors = []
}) => ({
  select: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    margin: '20px 0',
    padding: '2px 25px',
    fontSize: '15px',
    border: `solid 1px ${ errors.length ? theme.colors.error.border : theme.colors.border }`,
    outline: 0
  },
  error: {
    position: 'absolute',
    bottom: 5,
    right: 4,
    fontSize: 10,
    color: theme.colors.error.color
  },
  placeholder: {
    marginRight: 10,
    fontSize: 15,
    color: '#757575',
    lineHeight: 3
  },
  dropDown: {
    position: 'absolute',
    width: '101%',
    padding: 0,
    top: 33,
    left: -1,
    border: `solid 1px ${ theme.colors.border }`,
    background: '#fff',
    maxHeight: 300,
    overflow: 'scroll',
    zIndex: 100
  },
  option: {
    listStyle: 'none',
    padding: 10,
    cursor: 'pointer',
    ':hover': {
      background: theme.colors.border
    }
  },
  chevron: {
    marginTop: 10
  }
});


export const Select = withStyles(Radium(SelectTag), styles);
export const Option = withStyles(Radium(OptionTag), styles);
