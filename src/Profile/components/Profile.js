import React from 'react';

import { Tabs, Tab } from '../../components/Tabs';
import Basic from './Basic.js';

const Profile = ({
  user
}) => (
  <section>
    <Tabs>
      <Tab title="Basic">
        <Basic { ...user }/>
      </Tab>
      <Tab title="Address">
        <div>Address</div>
      </Tab>
      <Tab title="Verification">
        <div>Verification</div>
      </Tab>
      <Tab title="Payment Methods">
        <div>Payment</div>
      </Tab>
    </Tabs>
  </section>
);

export default Profile;
