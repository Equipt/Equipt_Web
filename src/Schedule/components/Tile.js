import React from 'react';
import { Slider, Slide } from '../../components/Slider';
import withStyles from '../../hocs/withStyles.js';

const Tile = ({
  sportingGood,
  startDate,
  endDate,
  styles
}) => (
  <div style={ styles.tile }>
    <p>{ startDate } - { endDate }</p>
    <Slider>
    {
      sportingGood.images.map(image => (
        <Slide>
          <img style={ styles.slide } src={ process.env.REACT_APP_SERVER_DOMAIN + image.file.url }/>
        </Slide>
      ))
    }
    </Slider>
    <h4>{ sportingGood.title }</h4>
  </div>
);

const styles = ({
  sportingGood
}) => ({
  tile: {
    minWidth: '25%'
  },
  slide: {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'center'
  }
});


export default withStyles(Tile, styles);
