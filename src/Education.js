import * as React from "react";
import { EducationItem } from './components/EducationItem';
import resumeData from "./constants/resumeData";

import './scss/education.scss';

export const Education = () => {

  return (
    <section id="education" className="container">
      <div className="row">
        {
          resumeData['education'].slice(0, 2).map((item, i) => (
            <EducationItem i={i} key={i} item={item} />
          ))
        }
      </div>
      <div className="row">
        {
          resumeData['education'].slice(2, 4).map((item, i) => (
            <EducationItem i={i} key={i} item={item} />
          ))
        }
      </div>
    </section>
  );
};
