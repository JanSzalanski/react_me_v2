import React from 'react';
// import DetailsLayout from '../../layouts/DetailsLayout/DetailsLayout';
import { useParams, Link } from 'react-router-dom';
import classes from './DetailsPage.module.css';

import Button from '../../components/atoms/Button/Button';
import News from '../../components/molecules/News/News';
import Heading from '../../components/atoms/Heading/Heading';

const DetailsPage = (props) => {
  const params = useParams();

  const singleNews = props.data.find((record) => record.path === params.newsId);

  if (!singleNews) {
    return <Heading>Nie odnaleziono rekordu... </Heading>;
  }
  return (
    <>
      <div className="overlay"></div>
      <div className={classes[props.type] || classes.news}>
        <News title={singleNews.title} content={singleNews.content} date={singleNews.date}></News>
        <Link className="routeLink" to="/">
          <Button type="buttonDetails">powrót</Button>
        </Link>
      </div>
    </>
  );
};

export default DetailsPage;
