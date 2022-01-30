import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={classes[props.className] || classes.button}
      //   type={props.type || 'button'}
      //   onClick={props.onClick}
    />
  );
};

export default Input;
