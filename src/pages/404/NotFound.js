import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import Background from '../../components/atoms/Background/Background';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const NotFound = () => {
  return (
    <div className="page">
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
