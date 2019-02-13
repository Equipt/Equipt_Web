const variables = {
  colors: {
    primary: '#5C9059',
    text: '#484848',
    border: '#EBEBEB',
    error: {
      background: '#f8d7da',
      color: '#721c24'
    },
    info: {
      background: '#D9ECDB',
      color: '#CAE4CD'
    }
  }
}

const styles = {
  container: {
    maxWidth: 1200,
    width: '100vw',
    top: 90,
    height: 'calc(100vh - 70px)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  form: {
    wrapper: {
      width: '100%',
      maxWidth: 500
    }
  },
  btn: {
    padding: '15px 25px',
    color: '#fff',
    fontSize: '15px',
    background: variables.colors.primary,
    border: '1px solid #fff',
    cursor: 'pointer'
  },
  checkbox: {
    padding: '5px',
    border: 'solid 1px #EBEBEB'
  }
}


export default { ...variables, ...styles };
