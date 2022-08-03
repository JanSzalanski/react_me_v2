import React from 'react';
import classes from './ButtonM.module.css';

const ButtonM = (props) => {
  return (
    <button
      className={classes[props.className] || classes.buttonM}
      type={props.type || 'buttonM'}
      onClick={props.onClick}
    >
      <p>{props.children}</p>
    </button>
  );
};

export default ButtonM;
