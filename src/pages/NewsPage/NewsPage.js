import React from 'react';
import video from '../../assets/earth.mp4';
import classes from './NewsPage.module.css';
// import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
// import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Card from '../../components/molecules/Card/Card';
// import Footer from '../../components/molecules/Footer/Footer';
import FooterB from '../../components/molecules/FooterB/FooterB';
// import { Link } from 'react-router-dom';
// import PerspectiveA from '../../components/organisms/PerspectiveA/PerspectiveA';
import Background from '../../components/atoms/Background/Background';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';

const NewsPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay"></div>
      <HeaderB>Aktułalności</HeaderB>
      <Input className="search"></Input>

      <Background />
      <div className={classes.overflowWrapper}>
        <Card
          className="hidden"
          path="a1"
          date="01/02/2022"
          title="Pierwszy news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!"
        />

        <Card
          path="a2"
          date="02/04/2022"
          title="Drugi news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit"
        />

        <Card
          className="hidden"
          path="a3"
          date="25/04/2022"
          title="Trzeci news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam !"
        />
      </div>
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default NewsPage;
