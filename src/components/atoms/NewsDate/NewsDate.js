import React from 'react';
import classes from './NewsDate.module.css';

const NewsDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('pl-PL', { month: 'short' });
  const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });

  return (
    <div className={classes.date}>
      <div className={classes.day}>{day}</div>
      <div className={classes.month}>{month}</div>
      <div className={classes.year}>{year}</div>
    </div>
  );
};

export default NewsDate;
