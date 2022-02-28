import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './ArticlePage.module.css';

const ArticlePage = (props) => {
  return (
    <div div className={classes[props.type] || 'page'}>
      <Header>Strona z artykułami</Header>
      <Footer>Stopka</Footer>
    </div>
  );
};

export default ArticlePage;
