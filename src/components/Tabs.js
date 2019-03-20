import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Check from './icons/Check.js';
import theme from '../theme.js';

class TabsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: props.currentTab
    }
    this.updateTab = this.updateTab.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  updateTab(currentTab) {
    const { onChange } = this.props;
    if (onChange) onChange(currentTab);
    this.setState({ currentTab });
  }

  render() {

    const { children, defaultTab, customStyles = {} } = this.props;
    const { currentTab } = this.state;

    return (
      <div>
        <ul style={{ ...customStyles, ...styles.tabs }}>
        {
          React.Children.map(children, (child, index) => {

            const styles = getTabStyles({
              ...child.props,
              isCurrentTab: currentTab === child.props.name
            });

            return (
              <li key={ `tab_${ index }` }
                onClick={ () => this.updateTab(child.props.name) }
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
            currentTab === child.props.name ?
            React.cloneElement(child, { moveToTab: this.updateIndex })
            : null)
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

TabComponent.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

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
