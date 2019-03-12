import React from 'react';
import Radium from 'radium';
import Input from '../../components/Input';
import { Select, Option } from '../../components/Select';
import theme from '../../theme.js';
import { getAllCountries, getStatesOfCountry } from 'country-state-city';

const countries = getAllCountries();

const getStates = (selectedCountry = 'CA') => {
  const countryObj = countries.filter(country => country.sortname === selectedCountry)[0];
  return getStatesOfCountry(countryObj.id);
}

const Contact = ({
  user,
  form,
  actions,
  moveToTab
}) => (
  <form style={ styles.container }>
    <Input  placeholder="Unit"
            value={ form.address.unit }
            customStyles={ styles.unit }
            errors={ form.errors['address.unit'] }
            onChange={ unit => actions._bindOnChange('address.unit', unit) }/>
    <Input  placeholder="Street Number"
            value={ form.address.number }
            customStyles={ styles.streetNumber }
            errors={ form.errors['address.number'] }
            onChange={ number => actions._bindOnChange('address.number', number) }/>
    <Input  placeholder="Street Name"
            value={ form.address.street }
            customStyles={ styles.streetName }
            errors={ form.errors['address.street'] }
            onChange={ street => actions._bindOnChange('address.street', street) }/>
    <Input  placeholder="City"
            value={ form.address.city }
            customStyles={ styles.city }
            errors={ form.errors['address.city'] }
            onChange={ city => actions._bindOnChange('address.city', city) }/>
    <Select placeholder="State / Province"
            value={ form.address.state }
            customStyles={ styles.state }
            errors={ form.errors['address.state'] }
            onSelect={ state => actions._bindOnChange('address.state', state) }>
            {
              getStates(form.address.country).map(state => <Option value={ state.name }>{ state.name }</Option>)
            }
    </Select>
    <Input  placeholder="Zip / Postal Code"
            value={ form.address.zip }
            customStyles={ styles.zip }
            errors={ form.errors['address.zip'] }
            onChange={ zip => actions._bindOnChange('address.zip', zip) }/>
    <Select placeholder="Country"
            value={ form.address.country }
            customStyles={ styles.country }
            errors={ form.errors['address.country'] }
            onSelect={ country => actions._bindOnChange('address.country', country) }>
            {
              countries.map(country => <Option value={ country.sortname }>{ country.name }</Option>)
            }
    </Select>
    <div style={ theme.break }/>
    <Input  placeholder="Phone Number"
            value={ form.phone.number }
            customStyles={ styles.phone }
            errors={ form.errors['phone.number'] }
            onChange={ number => actions._bindOnChange('phone.number', number) }/>
    <button style={ theme.btn } onClick={ e => {
      e.preventDefault();
      actions.updateProfile(() => moveToTab(2));
    }}>Next</button>
  </form>
);

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 40
  },
  phone: {
    width: '100%'
  },
  unit: {
    width: '10%'
  },
  streetNumber: {
    width: '20%'
  },
  streetName: {
    width: '65%'
  },
  city: {
    width: '47.5%'
  },
  state: {
    width: '50%'
  },
  zip: {
    width: '47.5%'
  },
  country: {
    width: '50%'
  }
}

export default Radium(Contact);
