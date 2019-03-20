import React from 'react';
import Radium from 'radium';
import Input from '../../components/Input';
import Button from '../../components/Button';
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
      <ImageUploader withPreview={ true } onChange={ ([ image ]) => actions._bindOnChange('image', image) }/>
    </div>
    <Button
      customStyles={ styles.submit }
      isLoading={ form.isLoading }
      onClick={ e => {
      e.preventDefault();
      actions.updateProfile({ nextTab: 'contact', basic: true });
    }}>
      Save
    </Button>
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
  },
  submit: {
    minWidth: 90
  }
}

export default Radium(Basic);
