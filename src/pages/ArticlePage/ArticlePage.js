import React from 'react';
// import React from 'react';
import Input from '../../components/atoms/Input/Input';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';
import Pargraph from '../../components/atoms/Paragraph/Paragraph';
// import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const ArticlePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Tablica z artykułami</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS"></Input>
      <Background />
      <div className="overflowWrapper">
        <Pargraph className="article">
          W tej części "portalu" będę zamieszczał moje artykuły, ale i być może podcasty wideo? Będą
          to takie moje przemyślenia na temat różnych zagadnień. Pod pojęciem artykuły mam na myśli
          felietony, recenzje, testy, opinie, analizy słowem wszelkiego rodzaju rozkminy z różnych
          dziedzin, o których mam jakieś pojęcie lub którymi się interesuje.
        </Pargraph>
      </div>

      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default ArticlePage;
