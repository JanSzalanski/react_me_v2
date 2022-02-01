import React from 'react';
import classes from './CardUI.module.css';

const CardUI = (props) => {
  const allclasses = classes.cardui + ' ' + props.className;
  return <div className={allclasses}>{props.children}</div>;
};

export default CardUI;
