import React from 'react';
import classes from './CardUI.module.css';

const CardUI = (props) => {
  const allclasses = classes.cardui + ' ' + classes[props.className];
  return (
    <div className={classes.wrapper}>
      <div className={allclasses}>{props.children}</div>;
    </div>
  );
};

export default CardUI;
