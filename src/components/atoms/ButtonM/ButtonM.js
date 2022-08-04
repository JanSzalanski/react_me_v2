import React from 'react';
import classes from './ButtonM.module.css';

const ButtonM = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <div className={classes.glow}>
        <div className={classes.copy}></div>
      </div>

      <button
        className={classes[props.className] || classes.buttonM}
        type={props.type || 'buttonM'}
        onClick={props.onClick}
      >
        <p>{props.children}</p>
      </button>
    </div>
  );
};

export default ButtonM;
