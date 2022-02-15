import React from 'react';
import classes from './Glow.module.css';

const Glow = (props) => {
  return <div className={classes[props.type] || classes.glow}></div>;
};

export default Glow;
