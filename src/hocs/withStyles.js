import React from 'react';

export default (WrappedComponent, stylesFunc) => {

  return props => {

    const styles = stylesFunc(props);

    return <WrappedComponent { ...props } styles={ styles }/>;
  }

}
