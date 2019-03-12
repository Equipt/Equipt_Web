import React, { Component } from 'react';
import Radium from 'radium';
import Check from './icons/Check.js';
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
      <div>
        <ul style={ styles.tabs }>
        {
          React.Children.map(children, (child, index) => {

            const styles = getTabStyles({
              ...child.props,
              isCurrentTab: currentIndex === index
            });

            return (
              <li key={ `tab_${ index }` }
                onClick={ () => this.updateIndex(index) }
                style={ styles }>
                { child.props.title }
                {
                  child.props.checked ?
                  <Check style={ checkStyles } width={ 20 } height={ 20 }/> :
                  null
                }
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
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    cursor: 'pointer',
    [theme.media.tabletAndAbove]: {
      maxWidth: 500
    }
  }
}

const checkStyles = {
  display: 'inline-block',
  margin: '0 0 0 3px',
  verticalAlign: 'text-bottom'
}

const getTabStyles = ({
  isCurrentTab
}) => ({
  listStyle: 'none',
  fontSize: 14,
  borderBottom: isCurrentTab ? `solid 2px ${ theme.colors.primary }` : '  ',
  [theme.media.tabletAndAbove]: {
    fontSize: 16
  }
});

export const Tabs = Radium(TabsComponent);
export const Tab = Radium(TabComponent);
