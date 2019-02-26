import React, { Component } from 'react';
import Radium from 'radium';
import theme from '../theme.js';

class TabsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(index) {
    this.setState({ currentIndex: index });
  }

  render() {

    const { children } = this.props;
    const { currentIndex } = this.state;

    return (
      <div style={ styles.container }>
        <ul style={ styles.tabs }>
        {
          React.Children.map(children, (child, index) => {

            const tabStyles = currentIndex === index ? styles.currentTab : {};

            return (
              <li key={ `tab_${ index }` }
                onClick={ () => this.updateIndex(index) }
                style={{ ...styles.tab, ...tabStyles }}>
                { child.props.title }
              </li>
            )
          })
        }
        </ul>
        {
          React.Children.map(children, (child, index) =>
            currentIndex === index ?
            React.cloneElement(child, { moveToTab: this.updateIndex })
            : null
          )
        }
      </div>
    )
  }

}

const TabComponent = ({
  children,
  moveToTab
}) => (
  <div>
    { React.cloneElement(children, { moveToTab }) }
  </div>
);

const styles = {
  container: {

  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 500
  },
  currentTab: {
    borderBottom: `solid 2px ${ theme.colors.primary }`
  },
  tab: {
    listStyle: 'none'
  }
}

export const Tabs = Radium(TabsComponent);
export const Tab = Radium(TabComponent);
