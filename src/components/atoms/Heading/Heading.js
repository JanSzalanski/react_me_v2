import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => {
  return <h1 className={classes[props.className] || classes.heading}>{props.children}</h1>;
};

export default Heading;
