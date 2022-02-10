import React from 'react';
import classes from './DetailsLayout.module.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const DetailsLayout = (props) => {
  return (
    <div className={classes[props.type] || classes.news}>
      <h1>News</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores maxime eius itaque.
        Doloribus dignissimos sunt distinctio eveniet unde molestiae enim suscipit obcaecati velit
        temporibus quibusdam, debitis eligendi culpa quo?
      </p>
      <Link to="/">powrót</Link>
    </div>
  );
};

export default DetailsLayout;
