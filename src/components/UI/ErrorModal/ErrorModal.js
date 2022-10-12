import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Button from '../../atoms/Button/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h2>Wystąpił błąd</h2>
      <p>{props.children}</p>
      <div className={classes.actions}>
        <Button type="modal" onClick={props.onClose}>
          Spoko
        </Button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById('overlay-root'),
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
