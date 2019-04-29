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
      isOpen: false,
      filter: ''
    }
  }

  filterResults() {
    const { children, onSelect } = this.props;
    const { filter } = this.state;

    return React.Children.map(children, child => {
      return child.props.children.toLowerCase().indexOf(filter.toLowerCase()) > -1 ?
        React.cloneElement(child, { onSelect, closeDropDown: () => this.setState({ isOpen: false }) }) :
        null
    })
  }

  render() {

    const {
      placeholder,
      customStyles,
      styles,
      children,
      value = null,
      errors = []
    } = this.props;

    const { isOpen, filter } = this.state;

    return (
      <div style={{ ...styles.select, ...customStyles }}
           onMouseEnter={ () => this.setState({ isOpen: true }) }
           onMouseLeave={ () => this.setState({ isOpen: false }) }>
        <input style={ styles.placeholder }
               placholder={ placeholder }
               value={ filter || value }/>
        <span  style={ styles.error }>{ errors.length ? errors.join(', ') : '' }</span>
        <Chevron width="20"
                 height="20"
                 fill={ theme.colors.border }
                 customStyles={ styles.chevron }/>
        {
          isOpen ? (
            <ul style={ styles.dropDown }>
              { this.filterResults() }
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
    width: '100%',
    marginRight: 10,
    fontSize: 15,
    padding: '2px 10px',
    color: '#757575',
    lineHeight: 3,
    border: 'none',
    outline: 0
  },
  dropDown: {
    position: 'absolute',
    width: '100.5%',
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
    marginTop: 15,
    marginRight: 15
  }
});


export const Select = withStyles(Radium(SelectTag), styles);
export const Option = withStyles(Radium(OptionTag), styles);
