import React from 'react';
import classes from './NewsPage.module.css';
// import Button from '../../components/atoms/Button/Button';
// import Input from '../../components/atoms/Input/Input';
// import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Header from '../../components/molecules/Header/Header';
// import Card from '../../components/molecules/Card/Card';
import Footer from '../../components/molecules/Footer/Footer';
// import { Link } from 'react-router-dom';
import PerspectiveA from '../../components/organisms/PerspectiveA/PerspectiveA';

const NewsPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      {/* <div className="backgroundPage"></div> */}
      <Header>Aktułalności</Header>
      {/* <Input className="search"></Input> */}
      <PerspectiveA />
      <div className="centeredB">
        {/* <Card
          path="a1"
          date="01/02/2022"
          title="Pierwszy news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!"
        /> */}
      </div>
      <Footer>Stopka</Footer>
    </div>
  );
};

export default NewsPage;
