import React from 'react';
import classes from './DecorTwo.module.css';

const DecorTwo = (props) => {
  return <div className={classes[props.className] || classes.decortwo}></div>;
};

export default DecorTwo;
