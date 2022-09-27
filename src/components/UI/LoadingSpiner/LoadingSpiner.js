import React from 'react';

import classes from './LoadingSpiner.module.css';

const LoadingSpiner = () => (
  <div className={classes.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingSpiner;
