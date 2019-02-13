import React from 'react';
import theme from '../../theme.js';

export default ({
  width = 25,
  height = 25,
  fill = theme.colors.primary,
  customStyles: {
    svg
  } = {}
}) => (
  <svg version="1.1" id="Capa_1" width={ width } height={ height } fill={ fill } viewBox="0 0 357 357" style={ svg }>
    <g>
      <g id="close">
        <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
    214.2,178.5"/>
      </g>
    </g>
  </svg>
)
