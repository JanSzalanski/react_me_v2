import React from 'react';
// import React from 'react';
import Input from '../../components/atoms/Input/Input';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './ArticlePage.module.css';
import Background from '../../components/atoms/Background/Background';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import ZoneTop from '../../components/UI/Zones/ZoneTop';

const ArticlePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Ciekawe artykuły</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS"></Input>
      <Background />
      <div className="overflowWrapper">
        <ZoneTop className="zoneTopRelative">
          <p>
            Interesujący artykuł na temat pewnego zjawiska tyczącego się sztucznej inteligencji i
            procesu jej uczenia.
            <a href="https://hackernoon.com/stuck-in-time-why-ai-cant-stop-drawing-watches-at-1010">
              <br /> ARTYKUŁ
            </a>
          </p>
        </ZoneTop>
      </div>

      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2025 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default ArticlePage;
