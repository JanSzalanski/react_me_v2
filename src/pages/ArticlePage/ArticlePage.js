import React from 'react';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';

const ArticlePage = (props) => {
  return (
    <div div className={classes[props.type] || 'page'}>
      <HeaderB>Strona z artykułami</HeaderB>
      <Background />
      <FooterB>Stopka</FooterB>
    </div>
  );
};

export default ArticlePage;
