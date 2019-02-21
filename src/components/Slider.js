import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import theme from '../theme.js';
import withStyles from '../hocs/withStyles.js';

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  static propTypes = {
    children: PropTypes.array.isRequired
  }

  updateIndex(index) {
    this.setState({ currentIndex: index });
  }

  render() {

    const { children } = this.props;
    const { currentIndex } = this.state;

    const styles = getStyles();

    return (
      <div style={ styles.slider }>
      {
        React.Children.map(children, (child, index) => index === currentIndex ? (
          React.cloneElement(child, { key: `slide_${ index }` })
        ) : null)
      }
        <ul style={ styles.dots }>
        {
          children.length > 1 ? (
            React.Children.map(children, (child, index) => (
              <li style={ index === currentIndex ? styles.activeDot : styles.dot }
                  key={ `dot_${ index }`}
                  onClick={ () => this.updateIndex(index) }/>
            ))
          ) : null
        }
        </ul>
      </div>
    )
  }

}

const SlideComponent = ({ children, width, customStyles }) => {
  const styles = getStyles();
  return <div style={{ ...styles.slide, ...customStyles }}>{ children }</div>
}

SlideComponent.propTypes = {
  children: PropTypes.array.isRequired
}

const getStyles = () => {

  const dots = {
    width: 15,
    height: 15,
    margin: '0 5px',
    borderRadius: '100%',
    listStyle: 'none',
    cursor: 'pointer',
  };

  return {
    slider: {
      position: 'relative',
      display: 'flex',
      overflow: 'hidden'
    },
    slide: {
      width: '100%'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    dot: {
      ...dots,
      background: theme.colors.text
    },
    activeDot: {
      ...dots,
      background: theme.colors.primary
    }
  }

}

export const Slider = Radium(SliderComponent);
export const Slide = Radium(SlideComponent);
