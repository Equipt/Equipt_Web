import React from 'react';
import theme from '../theme';

const NotFound = () => (
  <section style={ styles.container }>
    <h3>Sorry, I can't find this</h3>
  </section>
)

const styles = {
  container: {
    ...theme.container
  }
}

export default NotFound;
