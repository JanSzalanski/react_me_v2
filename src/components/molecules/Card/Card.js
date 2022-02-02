import React from 'react';
import classes from './Card.module.css';

import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const Card = (props) => {
  const widthFlex = classes.wrapper + ' flex';

  return (
    <div className={classes.wrapperAll}>
      <div className={classes.card}>
        <div className={classes.cardShapeB} />
        <div className={classes.cardShapeA} />
        <div className={classes.cardShape} />
      </div>
      <div className={classes.wrapperInner}>
        <div className={classes.wrapperColor}>
          <Heading className="card">Aktualne Rekordy</Heading>
          <Paragraph className="cardDate">
            01\02 2022<span className={classes.code}>01\02 2022</span>
          </Paragraph>
        </div>
        <div className={widthFlex}>
          <Paragraph className="card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci dolorem
            magni distinctio inventore qui odio aut illum corrupti, id expedita unde, error odit
            eaque consectetur accusantium ex neque ipsam?{' '}
          </Paragraph>
          <Button className="secondary">Button</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
