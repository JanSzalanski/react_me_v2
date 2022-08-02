import React from 'react';
import classes from './ButtonM.module.css';

const ButtonM = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <button className={classes.buttonM} type={props.type || 'buttonM'} onClick={props.onClick}>
        <p>{props.children}</p>
      </button>
    </div>
  );
};

export default ButtonM;
