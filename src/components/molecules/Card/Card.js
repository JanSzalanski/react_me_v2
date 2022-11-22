import React from 'react';
import classes from './Card.module.css';
// import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { NavLink } from 'react-router-dom';
// import NewsDate from '../../atoms/NewsDate/NewsDate';

const Card = ({ className, cardType, date, title, short, content, path }) => {
  const withFlex = classes.wrapper + ' flex';

  return (
    <div className={classes[className] || classes.wrapperAll}>
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
        <div className={withFlex}>
          <div className={classes.paragraphWrapper}>
            <h2 className={classes.title}>{title}</h2>
            {cardType === 'news' && <div className={classes.decorA} />}
            {cardType === 'news' && <div className={classes.decorB} />}
            <Paragraph className="card">{short}</Paragraph>
            {/*pamiętaj ta klasa "card" jest w klasach dla Paragraph!*/}
          </div>
        </div>
        {cardType === 'news' && content && (
          <div className={classes.btnWrapper}>
            <NavLink className="routeLink" to={`/news/${path}`}>
              <Button type="secondary">Detale</Button>
            </NavLink>
          </div>
        )}
        {cardType === 'news' && <h2>{date}</h2>}
      </div>
    </div>
  );
};

// Card.propTypes = {
//   cardType: PropTypes.oneOf(['news', 'normal']),
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   path: PropTypes.string,
//   date: PropTypes.instanceOf(Date),
// };

Card.defaultProps = {
  cardType: 'news',
};

export default Card;
