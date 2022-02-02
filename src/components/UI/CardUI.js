import React from 'react';
import classes from './CardUI.module.css';

const CardUI = (props) => {
  const allclasses = classes.cardui + ' ' + classes[props.className];
  return (
    <span className={classes.wrapper}>
      <div className={allclasses}>{props.children}</div>;
    </span>
  );
};

export default CardUI;
