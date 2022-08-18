import React from 'react';
// import DetailsLayout from '../../layouts/DetailsLayout/DetailsLayout';
import { Link } from 'react-router-dom';
import classes from './DetailsPage.module.css';

import Button from '../../components/atoms/Button/Button';
import News from '../../components/molecules/News/News';

const DetailsPage = (props) => {
  // const params = useParams();
  return (
    <>
      <div className="overlay"></div>
      <div className={classes[props.type] || classes.news}>
        <News title={props.title} content={props.content}></News>
        <Link className="routeLink" to="/">
          <Button type="secondary">powrót</Button>
        </Link>
      </div>
    </>
  );
};

export default DetailsPage;
