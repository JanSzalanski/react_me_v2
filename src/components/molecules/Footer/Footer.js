import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer class={classes[props.className] || classes.wrapperFooter}>
      <h2 className={classes.footerTitle}>{props.children}</h2>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.line5}></div>
      <div className={classes.line6}></div>
      <div className={classes.line7}></div>
      <div className={classes.line8}></div>
      <div className={classes.line9}></div>
      <div className={classes.line10}></div>
    </footer>
  );
};

export default Footer;
