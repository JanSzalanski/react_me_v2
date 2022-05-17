import React, { useState } from 'react';
// import React from 'react';
import video from '../../assets/earth.mp4';
import Input from '../../components/atoms/Input/Input';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';
import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const ArticlePage = (props) => {
  const [animeKont, setAnimeKont] = useState(null);

  const kontaktHandler = () => {
    if (animeKont === null || animeKont === 'contactHide') {
      setAnimeKont('contactSlide');
    } else if (animeKont === 'contactSlide') {
      setAnimeKont('contactHide');
    } else {
      setAnimeKont(null);
    }
  };

  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" autoPlay loop muted>
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
      <ContactBar className={animeKont} kontaktPointer={kontaktHandler} />
    </div>
  );
};

export default ArticlePage;
