import React from 'react';
import classes from './News.module.css';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import NewsDate from '../../atoms/NewsDate/NewsDate';

const News = (props) => {
  return (
    <>
      <div className={props.className || classes.wrapper}>
        <Heading className="detailPage">{props.title}</Heading>
        <Paragraph className="details">{props.content}</Paragraph>
        <NewsDate className="details" date={props.date} />
      </div>
    </>
  );
};

export default News;
