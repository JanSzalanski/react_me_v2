import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import video from '../../assets/earth.mp4';
import Background from '../../components/atoms/Background/Background';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const NotFound = () => {
  return (
    <div className="page">
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <HeaderB>Something goes wrong ? :O</HeaderB>
      <Background />
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
      <ContactBar />
    </div>
  );
};
export default NotFound;
