import React from 'react';
import classes from './PerspectiveA.module.css';
// import TrapezeA from '../../atoms/Decors/TrapezeA/TrapezeA';

const PerspectiveA = (props) => {
  return (
    <div className={classes[props.className] || classes.perspectiveA}>
      {/* <div className={classes.pointer}></div> */}
    </div>
  );
};

export default PerspectiveA;
