import React from 'react';
import Input from './../../../components/Input';

const Filter = ({
  actions,
  sportingGoods: {
    keyword
  }
}) => (
  <div style={ styles.container }>
    <Input  customStyles={ styles.input }
            placeholder="Search by Keyword"
            onChange={ actions.changedSearch }
            value={ keyword }
    />
    <Input customStyles={ styles.input } placeholder="Search by Places" onChange={ actions.changedPlace }/>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 0',
    width: '50%'
  },
  input: {
    width: 200
  }
}

export default Filter;
