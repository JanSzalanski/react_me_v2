import React from 'react';
import classes from './ButtonIcon.module.css';

const ButtonIcon = (props) => {
  return (
    <div className={classes[props.className] || classes.buttonicon}>
      <div className={classes[props.classBgk]}></div>
      {props.children}
    </div>
  );
};

export default ButtonIcon;
