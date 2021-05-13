import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle, AnimateSharedLayout } from "framer-motion";
import Parallax from 'parallax-js';

//import landingImg from './images/landing-page-02.png';
// import landingImg1 from './images/portfolio-landing-pieces-01.png';
// import landingImg2 from './images/portfolio-landing-pieces-02.png';
// import landingImg3 from './images/portfolio-landing-pieces-03.png';
// import landingImg4 from './images/portfolio-landing-pieces-04.png';
import landingImg1 from './images/landing-parallax-01.png';
import landingImg2 from './images/landing-parallax-02.png';
import landingImg3 from './images/landing-parallax-03.png';
import landingImg4 from './images/landing-parallax-04.png';
import landingImg5 from './images/landing-parallax-05.png';
import landingImg6 from './images/landing-parallax-06.png';

import './scss/home.scss';

// const imgMotion = {
//   rest: {
//     opacity: 0,
//     x: 0,
//     transition: {
//       duration: 5,
//       type: "tween",
//       ease: "easeIn"
//     }
//   },
//   hover: {
//     opacity: 1,
//     x: 30,
//     transition: {
//       duration: 5,
//       type: "tween",
//       ease: "easeOut"
//     }
//   }
// };
//
// const slashMotion = {
//   rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//   hover: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeIn"
//     }
//   }
// };

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
        <img data-depth="0.30" src={landingImg2} alt="background bars"/>
        <img data-depth="0.05" src={landingImg3} alt="center circle"/>
        <img data-depth="0.80" src={landingImg4} alt="squiggles"/>
        <img data-depth="1.00" src={landingImg5} alt="big black dots"/>
        <img data-depth="0.60" src={landingImg6} alt="small black dots"/>
      </div>
    </section>
  );
};
