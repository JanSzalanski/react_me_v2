import React from 'react';
import '../../scss/main.css';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import Card from '../../components/molecules/Card/Card';

function Root() {
  return (
    <div className="wrapper">
      <h1>react_me v2</h1>
      <Button>My Button</Button>
      <Input className="search" placeholder="search" />
      <ButtonIcon />
      <Heading>Nagłówek 1</Heading>

      <Pargraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non explicabo deleniti
        exercitationem culpa amet alias asperiores enim. Deserunt quae minima et, aperiam labore
        quaerat optio ipsa dignissimos molestias unde libero!
      </Pargraph>
      <Card />
    </div>
  );
}

export default Root;
