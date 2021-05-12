import * as React from "react";
//import { useRef } from "react";
//import { motion, useCycle } from "framer-motion";

import landingImg from './images/landing-page-02.png';
import './scss/home.scss';

export const Home = () => {
  return (
    <section id="home" className="container">
      <div className="landingImg">
        <img src={landingImg} alt="Sarah\'s Portfolio"/>
      </div>
    </section>
  );
};
