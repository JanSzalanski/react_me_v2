import React from 'react';
import classes from './Card.module.css';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';

const Card = ({ cardType, date, title, content, path }) => {
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
          <div className={classes.code}></div>
        </div>
        <div className={widthFlex}>
          <div className={classes.paragraphWrapper}>
            <h2 className={classes.title}>{title}</h2>
            {cardType === 'news' && <div className={classes.decorA} />}
            {cardType === 'news' && <div className={classes.decorB} />}
            {cardType === 'news' && <div className={classes.decorC} />}
            {cardType === 'news' && <div className={classes.decorData}>{date}</div>}
            <Paragraph className="card">{content}</Paragraph>
            {/*pamiętaj ta klasa "card" jest w klasach dla Paragraph!*/}
          </div>
          {cardType === 'news' && (
            <Link className="routeLink" to={`/news/${path}`}>
              <Button type="secondary">Detale</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['news', 'normal']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  date: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'news',
};

export default Card;
