import React from 'react';
import './Glow.css';

const Glow = (props) => {
  const cssClasses = ['glow', props.class];
  return <div className={cssClasses.join(' ')}></div>;
};

export default Glow;
