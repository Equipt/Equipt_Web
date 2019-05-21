import React, { useEffect } from 'react';

import { Tabs, Tab } from '../../components/Tabs';
import Basic from './Basic';
import Contact from './Contact';
import Verification from './Verification';
import Security from './Security';

const Profile = props => {

  useEffect(() => {
    actions.setupForm();
  }, []);

  const {
    user,
    actions,
    form
  } = props;

  const hasBasic = !!(user.firstname && user.lastname && user.email);
  const hasContact = Object.keys({ ...user.phone, ...user.address }).length > -1;

  return (
    <section>
      <Tabs customStyles={styles.list} 
            currentTab={form.currentTab} 
            onChange={currentTab => actions.changedTab(currentTab)}>
        <Tab title="Basic" name="basic" checked={ hasBasic }>
          <Basic {...props} />
        </Tab>
        <Tab title="Contact" name="contact" checked={ hasContact }>
          <Contact {...props} />
        </Tab>
        <Tab title="Verification" name="verification" checked={user.isVerified}>
          <Verification {...props} />
        </Tab>
        <Tab title="Security" name="security">
          <Security {...props} />
        </Tab>
      </Tabs>
    </section>
  )

}

const styles = {
  list: {
    margin: '0 40px'
  }
}

export default Profile;
