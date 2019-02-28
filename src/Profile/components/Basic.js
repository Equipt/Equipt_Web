import React from 'react';
import Radium from 'radium';
import Input from '../../components/Input';
import ImageUploader from 'react-images-upload';
import theme from '../../theme.js';

const Basic = ({
  user,
  form,
  actions,
  moveToTab
}) => (
  <form style={ styles.container }>
    <div style={ styles.rightRail }>
      <Input  placeholder="First Name"
              value={ form.firstname || user.firstname }
              customStyles={ styles.input }
              onChange={ value => actions._bindOnChange('firstname', value) }/>
      <Input  placeholder="Last Name"
              value={ form.lastname || user.lastname }
              customStyles={ styles.input }
              onChange={ value => actions._bindOnChange('lastname', value) }/>
      <Input  placeholder="email"
              value={ form.email || user.email }
              customStyles={ styles.input }
              onChange={ value => actions._bindOnChange('email', value) }/>
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
    margin: 0,
    [theme.media.tabletAndAbove]: {
      margin: 40
    }
  },
  rightRail: {
    width: '100%',
    [theme.media.tabletAndAbove]: {
      width: '55%'
    }
  },
  leftRail: {
    width: '100%',
    [theme.media.tabletAndAbove]: {
      width: '45%'
    }
  },
  input: {
    marginBottom: 40
  }
}

export default Radium(Basic);
