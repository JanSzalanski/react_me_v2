import React from 'react';
import classes from './Card.module.css';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const Card = ({ cardType }) => {
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
          <Heading className="card">{`${
            cardType === 'news' ? 'Aktualne Rekordy ' : 'Rekord'
          }`}</Heading>
          <Paragraph className="cardDate">
            <div className={classes.code}></div>
          </Paragraph>
        </div>
        <div className={widthFlex}>
          <Paragraph className="card">
            {cardType === 'news' && <div className={classes.decorA} />}
            {cardType === 'news' && <div className={classes.decorB} />}
            {cardType === 'news' && <div className={classes.decorC} />}
            {cardType === 'news' && <div className={classes.decorData}>01\02\2022</div>}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci dolorem
            magni distinctio inventore qui odio aut illum corrupti, id expedita unde, error odit
            eaque consectetur accusantium ex neque ipsam?
          </Paragraph>
          {cardType === 'news' && <Button className="secondary">Button</Button>}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['news', 'normal']),
};

Card.defaultProps = {
  cardType: 'news',
};

export default Card;
