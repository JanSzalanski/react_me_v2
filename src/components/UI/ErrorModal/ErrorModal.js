import React from 'react';
import classes from './ErrorModal.module.css';
import Button from '../../atoms/Button/Button';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <h2>Wystąpił bląd</h2>
        <p>{props.children}</p>
        <div className={classes.actions}>
          <Button type="modal" onClick={props.onClose}>
            Spoko
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
