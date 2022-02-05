import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <div className={classes.glow}>
        <div className={classes.copy}></div>
      </div>

      <button
        className={classes[props.className] || classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
