import React from 'react';
import classes from './News.module.css';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const News = (props) => {
  return (
    <>
      <div className={props.className || classes.wrapper}>
        <Heading>{props.title}</Heading>
        <Paragraph>{props.content}</Paragraph>
      </div>
    </>
  );
};

export default News;
