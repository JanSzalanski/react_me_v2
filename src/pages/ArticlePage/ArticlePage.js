import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';
import DecorOne from '../../components/atoms/Decors/DecorOne/DecorOne';

const ArticlePage = (props) => {
  return (
    <div div className={classes[props.type] || 'page'}>
      <Header>Strona z artykułami</Header>
      <DecorOne />
      <DecorOne className="second" />
      <Background />
      <Footer>Stopka</Footer>
    </div>
  );
};

export default ArticlePage;
