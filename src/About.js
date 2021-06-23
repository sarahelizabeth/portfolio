import * as React from "react";
import { AboutItem } from './components/AboutItem';
import resumeData from "./constants/resumeData";


import './scss/pages/about.scss';

export const About = () => {

  return (
    <section id="about" className="mt-5 container">
      <h1>About Me</h1>
      <div className="row">
        {
          resumeData['skills'].map((item, i) => (
            <AboutItem i={i} key={i} item={item} />
          ))
        }
      </div>

    </section>
  );
};
