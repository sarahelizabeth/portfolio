import * as React from "react";
import { useRef } from "react";
import { motion, useCycle, AnimateSharedLayout } from "framer-motion";

//import landingImg from './images/landing-page-02.png';
import landingImg1 from './images/portfolio-landing-pieces-01.png';
import landingImg2 from './images/portfolio-landing-pieces-02.png';
import landingImg3 from './images/portfolio-landing-pieces-03.png';
import landingImg4 from './images/portfolio-landing-pieces-04.png';

import './scss/home.scss';

const imgMotion = {
  rest: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 5,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    opacity: 1,
    x: 30,
    transition: {
      duration: 5,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
};

export const Home = () => {
  return (
    <section id="home" className="container">
    <AnimateSharedLayout>
      <motion.div variants={imgMotion} className="landingImg">
        <motion.img className="landingImgParallax" src={landingImg1} alt="Sarah\'s Portfolio"/>
        <motion.img className="landingImgParallax" src={landingImg2} alt="Sarah\'s Portfolio"/>
        <motion.img className="landingImgParallax" src={landingImg3} alt="Sarah\'s Portfolio"/>
        <motion.img className="landingImgParallax" src={landingImg4} alt="Sarah\'s Portfolio"/>
      </motion.div>
      </AnimateSharedLayout>
    </section>
  );
};
