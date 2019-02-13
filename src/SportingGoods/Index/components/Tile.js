import React from 'react';

export default ({
  title
}) => (
  <div style={ styles.container }>
    <h4>{ title }</h4>
  </div>
)

const styles = {
  container: {
    width: '25%'
  }
}
