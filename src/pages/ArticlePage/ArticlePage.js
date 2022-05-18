import React from 'react';
// import React from 'react';
import Input from '../../components/atoms/Input/Input';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';
import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const ArticlePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Strona z artykułami</HeaderB>
      <Input className="search"></Input>
      <Background />
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
      <ContactBar />
    </div>
  );
};

export default ArticlePage;
