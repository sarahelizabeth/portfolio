import * as React from "react";
import { AboutItem } from './components/AboutItem';
import resumeData from "./constants/resumeData";

import './scss/about.scss';

export const About = () => {

  return (
    <div className="container">
      <div className="row">
        {
          resumeData['skills'].map((item, i) => (
            <AboutItem i={i} key={i} item={item} />
          ))
        }
      </div>
    </div>
  );
};
