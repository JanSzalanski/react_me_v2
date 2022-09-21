import React from 'react';
import classes from './ZoneMiddle.module.css';

const ZoneMiddle = (props) => {
  return <div className={classes.zoneMiddle}>{props.children}</div>;
};

export default ZoneMiddle;
