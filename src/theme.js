const variables = {
  colors: {
    primary: '#5C9059',
    text: '#484848',
    border: '#EBEBEB',
    disabled: '#ccc',
    error: {
      border: '#f8d7da',
      color: '#721c24'
    },
    info: {
      border: '#D9ECDB',
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
    minHeight: '100%',
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
  input: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '15px 25px',
    fontSize: '15px',
    border: `solid 1px ${ variables.colors.border }`,
    outline: 0,
    zIndex: 0
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
    borderRadius: 5,
    ':disabled': {
      background: variables.colors.disabled,
      cursor: 'not-allowed'
    },
    ':hover': {
      opacity: 0.7
    }
  },
  checkbox: {
    padding: '5px',
    border: 'solid 1px #EBEBEB'
  },
  break: {
    width: '100%',
    margin: '20px 0',
    borderBottom: `solid 1px ${ variables.colors.border }`
  }
}


export default { ...variables, ...styles };
