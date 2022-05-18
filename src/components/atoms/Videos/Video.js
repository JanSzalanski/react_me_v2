import React from 'react';
import classes from './Video.module.css';
import video from '../../../assets/earth.mp4';

const Video = (props) => {
  return (
    <video className={classes.video} autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
