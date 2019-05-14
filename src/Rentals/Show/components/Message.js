import React, { useState } from 'react';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import theme from '../../../theme.js';

const Message = ({
  rental,
  user,
  actions,
  feed = []
}) => {

  const [ message, setMessage ] = useState('');

  return (
    <section>
      <h3>Send A Message to { rental.owner.firstname }</h3>
      <ul style={ styles.feed }>
      { feed.map(message => <li>{ message.content }</li>) }
      </ul>
      <form onSubmit={ e => {
        e.preventDefault();
        actions.sendMessage(message);
        setMessage('');
      }}>
        <TextArea customStyles={ styles.textArea }
                  placeholder="Write a message"
                  onChange={ value => setMessage(value) }
                  value={ message }
                  height={ 100 }/>
        <Button>Submit</Button>
      </form>
    </section>
  )

}

const styles = {
  feed: {
    minHeight: 300,
    border: `solid 1px ${ theme.colors.border }`
  },
  form: {

  },
  textArea: {
    height: 100
  }
}

export default Message;
