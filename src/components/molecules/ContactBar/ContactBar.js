import React from 'react';
import classes from './ContactBar.module.css';
import Button from '../../atoms/Button/Button';

const ContactBar = (props) => {
  return (
    <div className={classes[props.className] || classes.contactWrapper}>
      <div className={classes.background}>
        <div className={classes.scanline} />
      </div>

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
      <div className={classes.btnWrapper}>
        <Button type="kontakt">Kontakt</Button>
      </div>
    </div>
  );
};

export default ContactBar;
