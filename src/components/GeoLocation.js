import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Geosuggest from 'react-geosuggest';
import CloseIcon from './icons/Close';
import theme from './../theme.js';

let _geoLocation;

const GeoLocation = ({
  onClose,
  onSuggest,
  placeholder,
  canClose = false
}) => (
  <div style={ styles.geosuggest.wrapper }>
    <Geosuggest style={ styles.geosuggest }
    ref={ ref => _geoLocation = ref }
    placeholder={ placeholder }
    onSuggestSelect={ address => onSuggest(address) }/>
    {
       canClose ? (
        <div style={ styles.geosuggest.close } onClick={ () => {
          _geoLocation && _geoLocation.clear();
          onClose();
        }}>
        <CloseIcon fill={ theme.colors.border } width={ 15 }/>
        </div>
      ) : null
    }
  </div>
);

GeoLocation.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuggest: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  canClose: PropTypes.bool
}

const styles = {
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
      top: 7,
      right: 15,
      cursor: 'pointer'
    }
  }
}

export default Radium(GeoLocation);
