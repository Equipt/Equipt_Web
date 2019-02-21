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
      color: '#5C9059'
    }
  },
  media: {
    tabletAndAbove: '@media screen and (min-width: 767px)',
    desktopAndAbove: '@media screen and (min-width: 1200px)'
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
    flexDirection: 'column',
    padding: '0 15px',
    lineHeight: 3
  },
  form: {
    wrapper: {
      width: '100%',
      maxWidth: 500
    }
  },
  btn: {
    minHeight: 50,
    padding: '0 25px',
    color: '#fff',
    fontSize: '18px',
    background: variables.colors.primary,
    border: '1px solid #fff',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    borderRadius: 5
  },
  checkbox: {
    padding: '5px',
    border: 'solid 1px #EBEBEB'
  }
}


export default { ...variables, ...styles };
