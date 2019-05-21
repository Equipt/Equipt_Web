import { connect } from 'react-redux';
import React, { useState } from 'react';
import Moment from 'moment';
import ProfileIcon from '../../../components/icons/Profile';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import theme from '../../../theme.js';
import { randomKey } from './../../../helpers.js';

const Message = ({
  rental,
  user,
  actions,
  messages = []
}) => {

  const [ message, setMessage ] = useState('');
  const { owner } = rental; 

  debugger;

  return (
    <section>
      <h3>Send A Message to { owner.firstname }</h3>
      <ul style={ styles.feed }>
      { rental.messages.map(({
        comment,
        created_at,
        user_id,
        user_profile
      }) => (
          <li key={ randomKey() }style={ user.id === user_id ? styles.message.owner : styles.message.renter  }>
            <div style={styles.profileContainer}>
              {
                user_profile ?
                  <img src={ user_profile } alt="" style={ styles.profile } /> :
                  <ProfileIcon fill={theme.colors.border} style={ styles.profile } width="40" height="40"/>
              }
            </div>
            <p>{ comment }</p>
            <i>{Moment(created_at).fromNow() }</i>
        </li>
      ))}
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
        <Button disabled={ !message.length }>Submit</Button>
      </form>
    </section>
  )

}

const messageStyles = {
  listStyle: 'none',
  padding: '20px 20px 50px',
  clear: 'both',
  borderBottom: `solid 1px ${ theme.colors.border }`
}

const styles = {
  feed: {
    minHeight: 300,
    padding: 50,
    border: `solid 1px ${ theme.colors.border }`,
    overflow: 'scroll'
  },
  form: {

  },
  textArea: {
    height: 100,
  },
  message: {
    owner: {
      ...messageStyles,
      textAlight: 'left'
    },
    renter: {
      ...messageStyles,
      textAlign: 'right'
    }
  },
  profileContainer: {
    display: 'inline-block',
    margin: '0 5px'
  },
  profile: {
    borderRadius: '100%'
  }
}

const mapState = ({
  rental,
  session,
  loading
}) => ({
  rental,
  loading,
  user: session.user
});

export default connect(mapState)(Message);
