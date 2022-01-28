import React from 'react';
import '../../scss/main.css';
import Button from '../../components/Button/Button';

function Root() {
  return (
    <div className="wrapper">
      <h1>react_me v2</h1>
      <Button className="secondary">My Button</Button>
    </div>
  );
}

export default Root;
