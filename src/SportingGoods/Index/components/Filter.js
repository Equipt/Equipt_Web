import React from 'react';
import Input from './../../../components/Input';
import { Select, Option } from './../../../components/Select';
import CloseIcon from './../../../components/icons/Close';
import Geosuggest from 'react-geosuggest';
import GeoLocation from './../../../components/GeoLocation';
import Radium from 'radium';
import theme from '../../../theme.js';

let _geoLocation;

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
    <GeoLocation
      onSuggest={ ({ location } = {}) => actions.fetchSportingGoods({ keyword, location, distance }) }
      onClose={ () => actions.fetchSportingGoods({ keyword }) }
      canClose={ location.lat && location.lng }
    />
    <Select placeholder="Distance"
            customStyles={ styles.select }
            value={ distance }
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
    maxWidth: '20%'
  },
  geosuggestContainer: {
    position: 'relative'
  }
}

export default Radium(Filter);
