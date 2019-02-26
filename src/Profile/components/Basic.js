import React from 'react';
import Input from '../../components/Input';
import ImageUploader from 'react-images-upload';
import theme from '../../theme.js';

const Basic = ({
  firstname,
  moveToTab
}) => (
  <form style={ styles.container }>
    <div style={ styles.rightRail }>
      <Input placeholder="First Name" value={ firstname }/>
      <Input placeholder="Last Name" value={ firstname }/>
      <Input placeholder="email" value={ firstname }/>
    </div>
    <div style={ styles.leftRail }>
      <ImageUploader withPreview={ true }/>
    </div>
    <button style={ theme.btn } onClick={ () => moveToTab(1) }>Next</button>
  </form>
);

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 40,
  },
  rightRail: {
    width: '55%'
  },
  leftRail: {
    width: '45%'
  }
}

export default Basic;
