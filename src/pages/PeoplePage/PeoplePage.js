import React from 'react';
import video from '../../assets/earth.mp4';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <HeaderB>Strona o ludziach</HeaderB>
      <Background />
      <FooterB>Stopka</FooterB>
    </div>
  );
};

export default PeoplePage;
