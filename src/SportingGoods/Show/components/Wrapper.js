import React, { Component } from 'react';
import Info from './Info';
import DatePicker from './DatePicker';
import Map from './Map';
import Loading from '../../../Loading';
import { Slider, Slide } from './../../../components/Slider.js';
import theme from '../../../theme.js';
import withStyles from '../../../hocs/withStyles.js';
import Radium from 'radium';

class Wrapper extends Component {

  componentDidMount() {
    const { actions, match } = this.props;
    actions.fetchSportingGood(match.params.id);
  }

  render() {

    const { sportingGood, loading, styles } = this.props;
    const { title, images } = sportingGood;

    if (loading) return <Loading/>;

    return (
      <section>
        <Slider>
        {
          images.map(({ file }) => (
            <Slide customStyles={ styles.slide }>
              <div style={{
                ...styles.image,
                backgroundImage: `url(${process.env.REACT_APP_SERVER_DOMAIN}${file.url})`
              }}/>
            </Slide>
          ))
        }
        </Slider>
        <div style={ styles.content }>
          <div style={ styles.leftRail }>
            <DatePicker/>
          </div>
          <div style={ styles.rightRail }>
            <Info { ...sportingGood }/>
            <Map/>
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
    flexDirection: 'row'
  },
  leftRail: {
    padding: 10,
    width: '60%'
  },
  rightRail: {
    padding: 10,
    width: '40%'
  }
});

export default Radium(withStyles(Wrapper, styles));
