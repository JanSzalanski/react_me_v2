import React from 'react';
// import classes from './MainPage.module.css';
import Button from '../components/atoms/Button/Button';
import Input from '../components/atoms/Input/Input';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Pargraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import Card from '../components/molecules/Card/Card';

const MainTemplates = (props) => {
  return (
    <>
      <Button>Button</Button>
      <Input className="search"></Input>
      <ButtonIcon></ButtonIcon>
      <Card />
      <Card cardType="normal" />
      <Heading>Header 01 ello</Heading>
      <Pargraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!
      </Pargraph>
    </>
  );
};

export default MainTemplates;
