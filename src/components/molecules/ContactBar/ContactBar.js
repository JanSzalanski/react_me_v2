import React from 'react';
import classes from './ContactBar.module.css';

const ContactBar = (props) => {
  return (
    <div className={classes[props.className] || classes.contactWrapper}>
      <div className={classes.lineRight} />
      <div className={classes.lineLeft} />
      <div className={classes.lineTop} />
      <div className={classes.lineBottom} />
      <div className={classes.line1} />
      <div className={classes.line2} />
      <div className={classes.line3} />
      <div className={classes.line4} />
      <div className={classes.line5} />
      {/*  */}
      <div className={classes.line6} />
      <div className={classes.line7} />
      <div className={classes.line8} />
      <div className={classes.line9} />
      <div className={classes.line10} />
    </div>
  );
};

export default ContactBar;
