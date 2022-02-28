import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './PeoplePage.module.css';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <Header>Strona o ludziach</Header>
      <Footer>Stopka</Footer>
    </div>
  );
};

export default PeoplePage;
