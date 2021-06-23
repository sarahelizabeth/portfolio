import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle, AnimateSharedLayout } from "framer-motion";
import Parallax from 'parallax-js';

import landingImg1 from './images/hero-parallax-01.png';
import landingImg2 from './images/hero-parallax-02.png';
import landingImg3 from './images/hero-parallax-03.png';
import landingImg4 from './images/hero-parallax-04.png';
import landingImg5 from './images/hero-parallax-05.png';
import landingImg6 from './images/hero-parallax-06.png';

import './scss/pages/home.scss';

export const Home = () => {

  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <section id="home">
      <div ref={sceneEl} id="scene" className="scene">

        <img data-depth="0.20" src={landingImg1} alt="concentric circles"/>
        <img data-depth="0.10" src={landingImg2} alt="background bars"/>
        <img data-depth="0.40" src={landingImg3} alt="center circle"/>
        <img data-depth="0.80" src={landingImg4} alt="squiggles"/>
        <img data-depth="1.00" src={landingImg5} alt="big black dots"/>
        <img data-depth="1.00" src={landingImg6} alt="big black dots"/>
      </div>
    </section>
  );
};
