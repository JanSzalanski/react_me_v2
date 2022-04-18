import React from 'react';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <HeaderB>Strona o ludziach</HeaderB>
      <Background />
      <FooterB>Stopka</FooterB>
    </div>
  );
};

export default PeoplePage;
