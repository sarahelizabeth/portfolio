import * as React from "react";
import { EducationItem } from './components/EducationItem';
import resumeData from "./constants/resumeData";
import { Timeline, Icon } from 'rsuite';

import './scss/pages/education.scss';

export const Education = () => {

  return (
    <section id="education" className="container mt-5">
      <h1>Education</h1>
      <div className="row">
        <div className="col-6">
          <Timeline className="custom-timeline">
          {
            resumeData['education'].slice(0, 2).map((item, i) => (
              <EducationItem i={i} key={i} item={item} type="college" />
            ))
          }
          </Timeline>
        </div>
        <div className="col-6">
          <Timeline className="custom-timeline">
          {
            resumeData['education'].slice(2, 4).map((item, i) => (
              <EducationItem i={i} key={i} item={item} type="bootcamp" />
            ))
          }
          </Timeline>
        </div>
      </div>
    </section>
  );
};
