import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Option } from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';

const Cancel = ({
  rental,
  actions
}) => {

  const [ reason, setReason ] = useState(null);
  const [ message, setMessage ] = useState('');

  return (
    <form>
      <Select placeholder="What's the reason for cancelling?"
              onSelect={ value => setReason(value) }
              value={ reason }>
        <Option value="No longer need the item?">No longer need the item?</Option>
        <Option value="Need to change the rental dates">Need to change the rental dates</Option>
        <Option value="The item no longer works for my needs">The item no longer works for my needs</Option>
        <Option value="None of the above">None of the above</Option>
      </Select>
      <TextArea placeholder="Optional: Send the owner a message"
                onChange={ value => setMessage(value) }
                value={ message }/>
      <Button onClick={ () => actions.cancelRental({ reason, message }) }>Cancel Rental</Button>
    </form>
  )

}

Cancel.propTypes = {
  rental: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Cancel;
