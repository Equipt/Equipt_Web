import React from 'react';
import withStyles from '../../hocs/withStyles';

const Chevron = ({
  width = 50,
  height = 50,
  fill = '#000',
  customStyles = {},
  styles = {}
}) => (
  <svg  version="1.1"
        x="0px" y="0px"
        width={ width } height={ height }
        fill={ fill }
        style={{ ...customStyles, ...styles.container }}
        viewBox="0 0 1000 1000">
    <g>
      <g transform="matrix(1 0 0 -1 0 1638)">
        <path d="M10,1370.2c0,3.4,0.6,6.6,1.8,9.8s3.1,6,5.8,8.3c5,5,11.1,7.6,18.1,7.6s13.1-2.5,18.1-7.6L500,942.6l445.7,445.7c5,5,11.2,7.6,18.4,7.6s13.3-2.5,18.4-7.6c5-5,7.6-11.1,7.6-18.1s-2.5-13.1-7.6-18.1L518.1,887.7c-5-5-11.1-7.6-18.1-7.6c-7.1,0-13.1,2.5-18.1,7.6L17.6,1352c-2.7,2.4-4.6,5.1-5.8,8.3C10.6,1363.5,10,1366.8,10,1370.2L10,1370.2z"/>
      </g>
    </g>
  </svg>
);

const getDegree = direction => {
  switch(direction) {
    case 'up':
      return 180;
    case 'right':
      return 90;
    case 'left':
      return 270;
    default:
      return 0;
  }
}

const styles = ({ direction }) => ({
  container: {
    transform: `rotate(${ getDegree(direction) }deg)`
  }
})

export default withStyles(Chevron, styles);
