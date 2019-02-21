import React from 'react';
import Input from './../../../components/Input';
import { Select, Option } from './../../../components/Select';
import Geosuggest from 'react-geosuggest';
import Radium from 'radium';
import theme from '../../../theme.js';

const Filter = ({
  actions,
  sportingGoods: {
    keyword,
    location,
    distance
  }
}) => (
  <div style={ styles.container }>
    <Input  customStyles={ styles.input }
            placeholder="Search by Keyword"
            canClear={ true }
            onChange={ keyword => actions.fetchSportingGoods({ keyword, location, distance }) }
            value={ keyword }/>
    <div style={ styles.geosuggest.wrapper }>
      <Geosuggest style={ styles.geosuggest }
                  onSuggestSelect={ ({ location } = {}) => {
                    actions.fetchSportingGoods({ keyword, location, distance });
                  }}/>
    </div>
    <Select placeholder="Distance"
            customStyles={ styles.select }
            value={ `${ distance }km` }
            onSelect={ distance => actions.fetchSportingGoods({ keyword, location, distance }) }>
      <Option value="5">5km</Option>
      <Option value="10">10km</Option>
      <Option value="20">20km</Option>
      <Option value="50">50km</Option>
    </Select>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '25px 0',
    width: '100%',
    [theme.media.tabletAndAbove]: {
      flexWrap: 'nowrap'
    },
  },
  input: {
    minWidth: '100%',
    [theme.media.tabletAndAbove]: {
      minWidth: '35%'
    }
  },
  select: {
    maxWidth: '20%',
  },
  geosuggestContainer: {
    position: 'relative'
  },
  geosuggest: {
    wrapper: {
      position: 'relative',
      margin: '20px 0',
      width: '75%',
      [theme.media.tabletAndAbove]: {
        width: '38%'
      }
    },
    input: {
      border: `solid 1px ${ theme.colors.border }`,
      padding: '15px 25px',
      fontSize: '15px',
      outline: 0
    },
    suggests: {
      position: 'absolute',
      top: 33,
      left: 0,
      padding: 0,
      background: '#fff',
      border: `solid 1px ${ theme.colors.border }`
    },
    suggestItem: {
      padding: 10,
      listStyle: 'none',
    },
    close: {
      position: 'absolute',
      top: 17,
      right: 20
    }
  }
}

export default Radium(Filter);
