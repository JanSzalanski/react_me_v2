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
      <div className={classes.line5}></div>
      <div className={classes.line6}></div>
      <div className={classes.line7}></div>
      {/* <div className={classes.line8}></div>
      <div className={classes.line9}></div>
      <div className={classes.line10}></div> */}
    </header>
  );
};

export default HeaderB;
