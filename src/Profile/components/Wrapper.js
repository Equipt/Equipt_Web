import React, { Component } from 'react';

import { Tabs, Tab } from '../../components/Tabs';
import Basic from './Basic';
import Contact from './Contact';
import Verification from './Verification';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.hasBasic = this.hasBasic.bind(this);
    this.hasContact = this.hasContact.bind(this);
  }

  componentDidMount() {
    this.props.actions.setupForm();
  }

  hasBasic() {
    const { user } = this.props;
    return !!(user.firstname && user.lastname && user.email);
  }

  hasContact() {
    const { user } = this.props;
    return !!(Object.keys(user.address).length && Object.keys(user.phone).length);
  }

  render() {

    const { user, form, actions } = this.props;

    return (
      <section>
        <Tabs customStyles={ styles.list } currentTab={ form.currentTab  } onChange={ currentTab => actions.changedTab(currentTab) }>
          <Tab title="Basic" name="basic" checked={ this.hasBasic() }>
            <Basic { ...this.props }/>
          </Tab>
          <Tab title="Contact" name="contact" checked={ this.hasContact() }>
            <Contact { ...this.props }/>
          </Tab>
          <Tab title="Verification" name="verification" checked={ user.isVerified }>
            <Verification { ...this.props }/>
          </Tab>
        </Tabs>
      </section>
    )
  }

}

const styles = {
  list: {
    margin: '0 40px'
  }
}

export default Profile;
