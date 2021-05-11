import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import './scss/home.scss';

export const Home = () => {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
