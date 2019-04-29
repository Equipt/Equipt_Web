import React, { Component } from 'react';
import Info from './Info';
import DatePicker from './DatePicker';
import { Map, RadiusMarker } from '../../../components/Map';
import Loading from '../../../Loading';
import { Slider, Slide } from './../../../components/Slider';
import Ratings from './Ratings';
import theme from '../../../theme.js';
import withStyles from '../../../hocs/withStyles.js';
import Radium from 'radium';
import { randomKey } from './../../../helpers.js';

class Wrapper extends Component {

  componentDidMount() {
    const { actions, match } = this.props;
    actions.fetchSportingGood(match.params.slug);
  }

  render() {

    const { sportingGood, loading, styles, actions } = this.props;
    const { images, coordinates = {} } = sportingGood;

    if (loading) return <Loading/>;

    return (
      <section>
        <Slider>
        {
          images.map(({ file }, index) => (
            <Slide key={ randomKey() } customStyles={ styles.slide }>
              <div style={{
                ...styles.image,
                backgroundImage: `url(${process.env.REACT_APP_SERVER_DOMAIN}${file.url})`
              }}/>
            </Slide>
          ))
        }
        </Slider>
        <div style={ styles.content }>
          <div style={ styles.datePickerContainer }>
            <DatePicker rentals={ sportingGood.rentals } onChange={ dates => actions.checkAvailability(dates) }/>
          </div>
          <div style={ styles.leftRail }>
            <Ratings ratings={ sportingGood.ratings }/>
          </div>
          <div style={ styles.rightRail }>
            <Info { ...this.props }/>
            <Map { ...coordinates }>
              <RadiusMarker lat={ coordinates.latitude } lng={ coordinates.longitude }/>
            </Map>
          </div>
        </div>
      </section>
    )
  }
}

const styles = () => ({
  image: {
    width: '100%',
    height: 400,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  slide: {
    minWidth: '100%'
  },
  content: {
    ...theme.container,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 30,
    flexDirection: 'column',
    [theme.media.desktopAndAbove]: {
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  },
  datePickerContainer: {
    margin: 10,
    [theme.media.desktopAndAbove]: {
      flex: '1 0 100%',
      margin: '20px 0'
    }
  },
  leftRail: {
    padding: 10,
    width: '100%',
    order: 1,
    [theme.media.desktopAndAbove]: {
      width: '60%',
      order: 0,
    }
  },
  rightRail: {
    padding: 10,
    width: '100%',
    order: 0,
    [theme.media.desktopAndAbove]: {
      width: '40%'
    }
  }
});

export default withStyles(Radium(Wrapper), styles);
