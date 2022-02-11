import React from 'react';
// import classes from './News.module.css';
// import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
// import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import Card from '../../components/molecules/Card/Card';
// import { Link } from 'react-router-dom';

const NewsPage = () => {
  return (
    <div className="centeredB">
      <Input className="search"></Input>

      <Card
        path="a1"
        date="01/02/2022"
        title="Pierwszy news"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!"
      />

      <Card
        cardType="normal"
        title="Pierwszy artykuł"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!"
      />
      <Heading>Header 01 ello</Heading>
      <Pargraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!
      </Pargraph>
    </div>
  );
};

export default NewsPage;
