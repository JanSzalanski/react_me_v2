import React from 'react';
import classes from './Card.module.css';
import CardUI from '../../UI/CardUI';
import Heading from '../../atoms/Heading/Heading';
import Pargraph from '../../atoms/Paragraph/Paragraph';

const Card = (props) => {
  return (
    <CardUI className={classes[props.classNme] || classes.card}>
      <Heading>Karta AAA</Heading>
      <Pargraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci dolorem magni
        distinctio inventore qui odio aut illum corrupti, id expedita unde, error odit eaque
        consectetur accusantium ex neque ipsam?{' '}
      </Pargraph>
    </CardUI>
  );
};

export default Card;
