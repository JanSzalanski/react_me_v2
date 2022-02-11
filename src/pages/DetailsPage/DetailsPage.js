import React from 'react';
// import DetailsLayout from '../../layouts/DetailsLayout/DetailsLayout';
import { useParams, Link } from 'react-router-dom';
import classes from './DetailsPage.module.css';
import Heading from '../../components/atoms/Heading/Heading';
import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

const DetailsPage = (props) => {
  const params = useParams();
  return (
    <>
      <div className={classes[props.type] || classes.news}>
        <Heading>News</Heading>

        <Pargraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores maxime eius itaque.
          Doloribus dignissimos sunt distinctio eveniet unde molestiae enim suscipit obcaecati velit
          temporibus quibusdam, debitis eligendi culpa quo?
        </Pargraph>
        <Link className={classes.link} to="/">
          <Button type="secondary">powrót</Button>
        </Link>
      </div>
    </>
  );
};

export default DetailsPage;
