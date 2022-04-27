import React from 'react';
import classes from './FooterB.module.css';
// import Heading from '../../atoms/Heading/Heading';
import DecorOne from '../../atoms/Decors/DecorOne/DecorOne';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Github from '../../atoms/Socials/Github';
import Linkedin from '../../atoms/Socials/Linkedin';
import Vimeo from '../../atoms/Socials/Vimeo';
import Youtube from '../../atoms/Socials/Youtube';
import Twitter from '../../atoms/Socials/Twitter';

const FooterB = (props) => {
  return (
    <footer className={classes[props.className] || classes.wrapperFooter}>
      <div className={classes.innerWrapper}>
        <DecorOne className="decorFooter"></DecorOne>

        <div className={classes.socialWrapper}>
          <h3 className={classes.tittle1}>
            moje <b /> socjale
          </h3>
          <a
            href="https://twitter.com/_Jan_Ko_?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="false"
          >
            <ButtonIcon className="twitter">
              <div className={classes.wrapperTwit}>
                <Twitter />
              </div>
              Follow
            </ButtonIcon>
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

          <a href="https://www.linkedin.com/in/jan-szalanski/">
            <ButtonIcon className="linkedin">
              <Linkedin />
            </ButtonIcon>
          </a>

          <a href="https://github.com/JanSzalanski">
            <ButtonIcon className="git">
              <Github />
            </ButtonIcon>
          </a>

          <a href="https://vimeo.com/szalanski">
            <ButtonIcon className="vimeo">
              <Vimeo />
            </ButtonIcon>
          </a>

          <a href="https://www.youtube.com/channel/UCY59lj5rPEpNdXwBlK7uMnQ">
            <ButtonIcon className="you">
              <Youtube />
            </ButtonIcon>
          </a>
        </div>

        <h2 className={classes.footerTitle}>{props.children}</h2>
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
