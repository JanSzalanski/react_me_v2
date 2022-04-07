import React from 'react';
import classes from './HeaderB.module.css';
// import Heading from '../../atoms/Heading/Heading';

const HeaderB = (props) => {
  return (
    <header className={classes[props.className] || classes.wrapperHeader}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
    </header>
  );
};

export default HeaderB;
