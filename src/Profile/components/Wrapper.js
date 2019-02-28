import React, { Component } from 'react';

import { Tabs, Tab } from '../../components/Tabs';
import Basic from './Basic.js';
import Contact from './Contact.js';

class Profile extends Component {

  componentDidMount() {
    this.props.actions.setupForm();
  }

  render() {
    return (
      <section>
        <Tabs>
          <Tab title="Basic">
            <Basic { ...this.props }/>
          </Tab>
          <Tab title="Contact">
            <Contact { ...this.props }/>
          </Tab>
          <Tab title="Verification">
            <div>Verification</div>
          </Tab>
          <Tab title="Payment Methods">
            <div>Payment</div>
          </Tab>
        </Tabs>
      </section>
    )
  }

}

export default Profile;
