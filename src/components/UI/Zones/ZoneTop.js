import React from 'react';
import classes from './ZoneTop.module.css';

const ZoneTop = (props) => {
  return <div className={classes[props.className] || classes.zoneTop}>{props.children}</div>;
};

export default ZoneTop;
