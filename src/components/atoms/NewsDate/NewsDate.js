import React from 'react';
import classes from './NewsDate.module.css';

const NewsDate = (props) => {
  const calendarDate = new Date([props.date]);
  const year = calendarDate.getFullYear();
  const month = calendarDate.toLocaleString('pl-PL', { month: 'short' });
  const day = calendarDate.toLocaleString('pl-PL', { day: '2-digit' });

  return (
    <div className={classes[props.className] || classes.date}>
      <div className={classes.day}>{day}</div>
      <div className={classes.month}>{month}</div>
      <div className={classes.year}>{year}</div>
    </div>
  );
};

export default NewsDate;
