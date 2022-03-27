import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <Header>Strona o ludziach</Header>
      <Background />
      <Footer>Stopka</Footer>
    </div>
  );
};

export default PeoplePage;
