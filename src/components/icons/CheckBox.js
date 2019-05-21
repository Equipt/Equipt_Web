import React from 'react';
import theme from '../../theme.js';

export default ({
  isChecked = true,
  fill = theme.colors.primary,
  width = 25,
  height = 25,
  customStyles={}
}) => (
    <svg version="1.1" width={width} height={width} style={ customStyles } xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
    <g>
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        <path fill={ fill } d="M1018.9,4990c-333-70.8-635.5-306.3-784.8-604.8c-143.6-290.9-134,9.6-134-4276c0-3768.7,0-3851,38.3-3996.5c109.1-428.7,424.9-744.6,853.7-853.7c145.5-38.3,227.8-38.3,4008-38.3c3780.2,0,3862.5,0,4008,38.3c428.7,109.1,744.5,424.9,853.7,853.7c38.3,145.5,38.3,227.8,38.3,4008c0,3780.2,0,3862.5-38.3,4008c-109.1,428.7-424.9,744.6-853.7,853.7c-145.5,38.3-225.9,38.3-4006.1,36.4C1776.8,5018.7,1122.2,5012.9,1018.9,4990z M8904.7,4377.5c78.5-23,128.2-55.5,212.5-139.7c187.6-187.6,170.4,216.3,170.4-4117.1c0-4333.4,17.2-3929.5-170.4-4117.1c-187.6-187.6,216.3-170.4-4117.1-170.4S1070.6-4184,883-3996.5c-187.6,187.6-170.3-216.3-170.3,4117.1c0,4333.4-17.2,3929.5,170.3,4117.1c80.4,80.4,135.9,118.7,204.8,139.7c82.3,24.9,566.6,28.7,3904.6,28.7C8420.4,4408.1,8812.8,4404.3,8904.7,4377.5z"/>
        {
          isChecked ? (
            <path fill={ fill } d="M7287.3,2811.8c-30.6-13.4-76.6-45.9-97.6-70.8c-23-24.9-710.1-1058.5-1529.3-2294.9c-819.2-1236.5-1498.7-2258.6-1510.2-2272c-15.3-17.2-197.1,193.3-729.2,840.3c-388.5,472.8-731.2,872.8-758,888.1c-97.6,49.8-191.4,51.7-285.2,3.8c-151.2-78.5-212.5-254.6-137.8-398.1c19.1-36.4,415.4-528.3,880.5-1092.9c639.3-777.1,863.2-1035.5,914.9-1060.4c86.1-40.2,218.2-30.6,292.8,23c49.8,36.4,430.7,599.1,2327.5,3460.6l1052.7,1586.7v109.1c0,118.7-32.5,179.9-128.3,252.6C7515.1,2834.7,7363.9,2848.1,7287.3,2811.8z"/>
          ) : null
        }
      </g>
    </g>
  </svg>
)
