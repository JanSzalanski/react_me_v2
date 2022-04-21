import React from 'react';
import classes from './FooterB.module.css';
// import Heading from '../../atoms/Heading/Heading';
import DecorOne from '../../atoms/Decors/DecorOne/DecorOne';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const FooterB = (props) => {
  return (
    <footer className={classes[props.className] || classes.wrapperFooter}>
      <div className={classes.innerWrapper}>
        <DecorOne className="decorFooter"></DecorOne>

        <div className={classes.socialWrapper}>
          <ButtonIcon className="twitter"></ButtonIcon>
          <ButtonIcon className="linkedin"></ButtonIcon>
          <ButtonIcon className="git"></ButtonIcon>
          <ButtonIcon className="you"></ButtonIcon>
          <ButtonIcon className="vimeo"></ButtonIcon>
        </div>

        <h2 className={classes.footerTitle}>{props.children}</h2>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line2A}></div>
        <div className={classes.line3}></div>
        <div className={classes.line3A}></div>
        <div className={classes.line4}></div>
        <div className={classes.line4A}></div>
        <div className={classes.line4B}></div>
        <div className={classes.line5}></div>
        <div className={classes.line5A}></div>
        <div className={classes.line6}></div>
        <div className={classes.line6A}></div>
        <div className={classes.line7}></div>
        <div className={classes.line8}></div>
        <div className={classes.line8A}></div>
        <div className={classes.line9}></div>
        <div className={classes.line9A}></div>
        <div className={classes.line10}></div>
        <div className={classes.line10A}></div>
      </div>
    </footer>
  );
};

export default FooterB;
