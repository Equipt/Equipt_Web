import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';
import Close from '../../components/icons/Close';

const Modal = ({
  modal: {
    isOpen,
    Component
  },
  actions
}) => isOpen ? (
  <section style={ styles.wrapper }>
    <div style={ styles.overlay } onClick={ () => actions.closeModal() }/>
    <div style={ styles.container }>
      <div onClick={ () => actions.closeModal() }>
        <Close customStyles={ styles.close } fill={ theme.colors.text }/>
      </div>
      <div style={ styles.content }>
        { Component }
      </div>
    </div>
  </section>
) : null;

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '100vw',
    zIndex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#000',
    opacity: '0.7',
    cursor: 'pointer'
  },
  container: {
    position: 'absolute',
    padding: 35,
    width: '80%',
    height: '90%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    background: '#fff',
    border: `solid 1px ${ theme.colors.border }`,
    zIndex: 10,
    overflow: 'hidden'
  },
  content: {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer'
  }
}

Modal.propTypes = {
  modal: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    Component: PropTypes.Component
  })
};

export default Modal;
