import React from 'react';
import classes from './HeaderB.module.css';
import Heading from '../../atoms/Heading/Heading';
import DecorOne from '../../atoms/Decors/DecorOne/DecorOne';

const HeaderB = (props) => {
  return (
    <header className={classes[props.className] || classes.wrapperHeader}>
      <div className={classes.innerWrapper}>
        <DecorOne className="decorHeader"></DecorOne>
        <div className={classes.bgkWrap}>
          <div className={classes.background}></div>
          <div className={classes.lines}></div>
          <div className={classes.scanline}></div>
        </div>
        <div className={classes.lineA}></div>
        <div className={classes.lineC}></div>
        <div className={classes.lineB}></div>

        <div className={classes.lineD}></div>
        <div className={classes.lineE}></div>
        <div className={classes.lineF}></div>
        <div className={classes.lineG}></div>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line2A}></div>
        <div className={classes.line3}></div>
        <div className={classes.line3A}></div>
        <div className={classes.line4}></div>
        <div className={classes.line4A}></div>
        <div className={classes.line5}></div>
        <div className={classes.line6}></div>
        <div className={classes.line6A}></div>
        <div className={classes.line7}></div>
        <div className={classes.line7A}></div>
        <div className={classes.line8}></div>
        <div className={classes.line8A}></div>
        <div className={classes.line8B}></div>
        <div className={classes.line9}></div>
        <div className={classes.line9A}></div>
        <div className={classes.line10}></div>
        <div className={classes.line10A}></div>
        <Heading className="position">{props.children}</Heading>
      </div>
    </header>
  );
};

export default HeaderB;
