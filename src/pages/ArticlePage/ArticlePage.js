import React from 'react';
import video from '../../assets/earth.mp4';
import Input from '../../components/atoms/Input/Input';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';

const ArticlePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <HeaderB>Strona z artykułami</HeaderB>
      <Input className="search"></Input>
      <Background />
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default ArticlePage;
