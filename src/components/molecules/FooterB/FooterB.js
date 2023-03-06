import React from 'react';
import classes from './FooterB.module.css';
// import Heading from '../../atoms/Heading/Heading';
import DecorOne from '../../atoms/Decors/DecorOne/DecorOne';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import DecorTwo from '../../atoms/Decors/DecorTwo/DecorTwo';

const FooterB = (props) => {
  return (
    <footer className={classes[props.className] || classes.wrapperFooter}>
      <DecorTwo className="decortwo3"></DecorTwo>
      <DecorTwo className="decortwo4"></DecorTwo>
      <div className={classes.innerWrapper}>
        <DecorOne className="decorFooter"></DecorOne>

        <div className={classes.bgkWrap}>
          <div className={classes.background}></div>
          <div className={classes.lines}></div>
          <div className={classes.scanline}></div>
        </div>
        <div className={classes.socialWrapper}>
          <h3 className={classes.tittle1}>
            moje <b /> socjale
          </h3>
          <a
            href="https://twitter.com/_Jan_Ko_?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            <ButtonIcon className="twit" classBgk="twitter">
              {/* <div className="wrapperTwit"></div> */}
              <h3 className="headingTwit">Follow</h3>
            </ButtonIcon>
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

          <a href="https://www.linkedin.com/in/jan-szalanski/">
            <ButtonIcon className="link" classBgk="linkedin"></ButtonIcon>
          </a>

          <a href="https://github.com/JanSzalanski">
            <ButtonIcon className="git" classBgk="github"></ButtonIcon>
          </a>

          <a href="https://vimeo.com/szalanski">
            <ButtonIcon className="vim" classBgk="vimeo"></ButtonIcon>
          </a>

          <a href="https://www.youtube.com/channel/UCY59lj5rPEpNdXwBlK7uMnQ">
            <ButtonIcon className="you" classBgk="youtube"></ButtonIcon>
          </a>
        </div>

        <div className={classes.lineA}></div>
        <div className={classes.lineB}></div>
        <div className={classes.lineC}></div>
        <div className={classes.lineD}></div>
        <div className={classes.lineE}></div>
        <div className={classes.lineF}></div>
        <div className={classes.lineG}></div>
        <h2 className={classes.footerTitle}>{props.children}</h2>
        <h2 className={classes.footerTitleM}>© 2023 Jan Szałański Polityka prywatności</h2>

        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line2A}></div>
        <div className={classes.line3}></div>
        <div className={classes.line3A}></div>
        <div className={classes.line4}></div>
        <div className={classes.line4A}></div>
        <div className={classes.line4B}></div>
        <div className={classes.line5}></div>
        <div className={classes.line5A}></div>
        <div className={classes.line6}></div>
        <div className={classes.line6A}></div>
        <div className={classes.line7}></div>
        <div className={classes.line8}></div>
        <div className={classes.line8A}></div>
        <div className={classes.line9}></div>
        <div className={classes.line9A}></div>
        <div className={classes.line10}></div>
        <div className={classes.line10A}></div>
      </div>
    </footer>
  );
};

export default FooterB;
