import React from 'react';
import '../../scss/main.css';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

function Root() {
  return (
    <div className="wrapper">
      <h1>react_me v2</h1>
      <Button>My Button</Button>
      <Input className="search" placeholder="search" />
    </div>
  );
}

export default Root;
