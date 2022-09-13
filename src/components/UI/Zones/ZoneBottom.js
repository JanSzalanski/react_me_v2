import React from 'react';
import classes from './ZoneBottom.module.css';

const ZoneBottom = (props) => {
  return <div className={classes.zoneBottom}>{props.children}</div>;
};

export default ZoneBottom;
