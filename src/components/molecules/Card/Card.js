import React from 'react';
import classes from './Card.module.css';
import CardUI from '../../UI/CardUI';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const Card = (props) => {
  const widthFlex = classes.wrapper + ' flex';
  return (
    <CardUI className="bck">
      <div className={classes.wrapperColor}>
        <Heading>Karta AAA</Heading>
        <Paragraph className="paragraphB">3 days</Paragraph>
      </div>
      <div className={widthFlex}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci dolorem
          magni distinctio inventore qui odio aut illum corrupti, id expedita unde, error odit eaque
          consectetur accusantium ex neque ipsam?{' '}
        </Paragraph>
        <Button className="secondary">Button</Button>
      </div>
    </CardUI>
  );
};

export default Card;
